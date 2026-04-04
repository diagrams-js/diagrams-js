import type { Diagram, Cluster } from "./index.js";

// Global context storage using a simple stack-based approach
// This works across all JavaScript runtimes (Node.js, Deno, Bun, browsers, workers)

class ContextManager<T> {
  private stack: T[] = [];

  get(): T | undefined {
    return this.stack[this.stack.length - 1];
  }

  push(value: T): void {
    this.stack.push(value);
  }

  pop(): T | undefined {
    return this.stack.pop();
  }
}

const diagramContext = new ContextManager<Diagram>();
const clusterContext = new ContextManager<Cluster>();

export function getDiagram(): Diagram | undefined {
  return diagramContext.get();
}

export function setDiagram(diagram: Diagram): void {
  diagramContext.push(diagram);
}

export function clearDiagram(): Diagram | undefined {
  return diagramContext.pop();
}

export function getCluster(): Cluster | undefined {
  return clusterContext.get();
}

export function setCluster(cluster: Cluster): void {
  clusterContext.push(cluster);
}

export function clearCluster(): Cluster | undefined {
  return clusterContext.pop();
}

/**
 * Run a callback with a specific diagram in context
 */
export function runWithDiagram<R>(diagram: Diagram, callback: () => R): R {
  diagramContext.push(diagram);
  try {
    return callback();
  } finally {
    diagramContext.pop();
  }
}

/**
 * Run a callback with a specific cluster in context
 */
export function runWithCluster<R>(cluster: Cluster | undefined, callback: () => R): R {
  if (cluster) {
    clusterContext.push(cluster);
    try {
      return callback();
    } finally {
      clusterContext.pop();
    }
  }
  return callback();
}
