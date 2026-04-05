import type { Diagram } from "./Diagram.js";
import { Cluster } from "./Cluster.js";
import { Edge } from "./Edge.js";
import type { NodeOptions } from "./types.js";

let _iconBaseDir = "";

export function setIconBaseDir(dir: string): void {
  _iconBaseDir = dir;
}

export function getIconBaseDir(): string {
  return _iconBaseDir;
}

export class Node {
  protected static _provider: string | null = null;
  protected static _type: string | null = null;
  protected static _iconDir: string | null = null;
  protected static _icon: string | null = null;
  protected static _iconDataUrl: string | null = null;
  protected static _height = 1.9;

  private _id: string;
  label: string;
  private _diagram: Diagram;
  private _cluster?: Cluster;
  private _attrs: Record<string, string | number> = {};

  constructor(label = "", options: NodeOptions = {}) {
    this._id = options.nodeId ?? this._randId();
    this.label = label;
    this._diagram = null as unknown as Diagram;
    this._cluster = undefined;

    // Check if this node has an icon data URL (embedded via esbuild dataurl loader)
    const iconDataUrl = (this.constructor as typeof Node)._iconDataUrl;
    if (iconDataUrl) {
      this._attrs = {
        shape: "none",
        height: "1.0",
        width: "1.0",
        fixedsize: "true",
        margin: "0,0",
      };
    }

    // Merge additional attributes
    for (const [key, value] of Object.entries(options)) {
      if (key !== "nodeId") {
        this._attrs[key] = String(value);
      }
    }
  }

  /**
   * Register this node with a diagram or cluster
   * Called by Diagram.add() or Cluster.add()
   * @internal
   */
  _register(parent: Diagram | Cluster): void {
    if (parent instanceof Cluster) {
      this._cluster = parent;
      this._diagram = parent.diagram;
      parent.node(this._id, this.label, this._attrs);
    } else {
      this._diagram = parent;
      parent.node(this._id, this.label, this._attrs);
    }

    // Handle autolabel
    if (this._diagram.autolabel) {
      const prefix = this.constructor.name;
      if (this.label) {
        this.label = prefix + "\n" + this.label;
      } else {
        this.label = prefix;
      }
    }

    // Track this node if it has an icon data URL (for auto-icon injection)
    const iconDataUrl = (this.constructor as typeof Node)._iconDataUrl;
    if (iconDataUrl && this._diagram) {
      this._diagram.trackNodeWithIcon(this, iconDataUrl);
    }

    // Handle Custom nodes with external icons
    if (this._isCustomNode() && this._diagram) {
      // Track the pending icon load so render can wait for it
      const iconLoadPromise = this._handleCustomNodeIcon();
      this._diagram.trackPendingIconLoad(iconLoadPromise);
    }
  }

  /**
   * Check if this is a Custom node (has external icon)
   * @internal
   */
  private _isCustomNode(): boolean {
    return (
      "getIconUrl" in this &&
      typeof (this as { getIconUrl: () => string }).getIconUrl === "function"
    );
  }

  /**
   * Handle loading and tracking of Custom node icon
   * @internal
   */
  private async _handleCustomNodeIcon(): Promise<void> {
    const customNode = this as unknown as {
      getIconUrl: () => string;
      loadIcon: () => Promise<string | null>;
    };
    const iconUrl = customNode.getIconUrl();

    // If it's already a data URL, track it directly
    if (iconUrl.startsWith("data:")) {
      this._diagram!.trackNodeWithIcon(this, iconUrl);
      return;
    }

    // Otherwise, load the icon asynchronously
    try {
      const dataUrl = await customNode.loadIcon();
      if (dataUrl && this._diagram) {
        this._diagram.trackNodeWithIcon(this, dataUrl);
      }
    } catch (error) {
      console.warn(`Failed to load custom icon for node ${this._id}:`, error);
    }
  }

  get nodeId(): string {
    return this._id;
  }

  /**
   * Get the cluster this node belongs to, if any
   */
  get cluster(): Cluster | undefined {
    return this._cluster;
  }

  /**
   * Connect to another node
   * Python: Self >> Node (forward)
   * TypeScript: node.to(otherNode)
   */
  to(target: Node): Node;
  to(target: Node[]): Node[];
  to(edge: Edge, target: Node): Node;
  to(edge: Edge, target: Node[]): Node[];
  to(edge: Edge): Edge;
  to(targetOrEdge: Node | Node[] | Edge, targetOrUndefined?: Node | Node[]): Node | Node[] | Edge {
    if (targetOrEdge instanceof Edge) {
      // Edge provided: node.to(edge, target?) or node.to(edge)
      targetOrEdge.node = this;
      targetOrEdge.forward = true;

      // If no target provided, return the edge for chaining
      if (targetOrUndefined === undefined) {
        return targetOrEdge;
      }

      const target = targetOrUndefined;
      if (Array.isArray(target)) {
        for (const t of target) {
          // Create a copy of the edge for each target to avoid shared state
          const edgeCopy = new Edge({
            ...targetOrEdge.attrs,
            node: this,
            forward: true,
          });
          this.connect(t, edgeCopy);
        }
        return target;
      }
      return this.connect(target, targetOrEdge);
    }

    const target = targetOrEdge;

    if (Array.isArray(target)) {
      for (const t of target) {
        // Create a new edge for each target to avoid shared state
        const edge = new Edge({ node: this, forward: true });
        this.connect(t, edge);
      }
      return target;
    }
    const edge = new Edge({ node: this, forward: true });
    return this.connect(target, edge);
  }

  /**
   * Connect from another node (reverse direction)
   * Python: Self << Node
   * TypeScript: node.from(otherNode)
   *
   * Example: pod.from(rs) creates pod << rs (arrow from pod back to rs)
   * This creates edges with dir=back
   */
  from(source: Node): Node;
  from(sources: Node[]): Node;
  from(edge: Edge, source: Node): Node;
  from(edge: Edge, sources: Node[]): Node;
  from(sourceOrEdge: Node | Node[] | Edge, sourceOrUndefined?: Node | Node[]): Node {
    if (sourceOrEdge instanceof Edge) {
      // Edge provided: node.from(edge, source)
      sourceOrEdge.node = this;
      sourceOrEdge.reverse = true;
      const source = sourceOrUndefined!;
      if (Array.isArray(source)) {
        for (const s of source) {
          // Create a copy of the edge for each source to avoid shared state
          const edgeCopy = new Edge({
            ...sourceOrEdge.attrs,
            node: this,
            reverse: true,
          });
          this.connect(s, edgeCopy);
        }
        return this;
      }
      return this.connect(source, sourceOrEdge);
    }

    const source = sourceOrEdge;

    // When we call p.from(rs), we want pod << rs
    // This creates an edge from pod to rs with dir=back
    // Graphviz will place pod to the left of rs, and the arrow points back
    if (Array.isArray(source)) {
      for (const s of source) {
        // Create a new edge for each source to avoid shared state
        // Edge goes from this (target) to source with reverse=true (dir=back)
        const edge = new Edge({ node: s, reverse: true });
        this.connect(s, edge);
      }
      return this;
    }
    // Edge goes from this (target) to source with reverse=true (dir=back)
    const edge = new Edge({ node: source, reverse: true });
    return this.connect(source, edge);
  }

  /**
   * Undirected connection (no arrows)
   * Python: Self - Node
   * TypeScript: node.with(otherNode)
   */
  with(target: Node): Node;
  with(targets: Node[]): Node[];
  with(edge: Edge, target: Node): Node;
  with(edge: Edge, target: Node[]): Node[];
  with(targetOrEdge: Node | Node[] | Edge, targetOrUndefined?: Node | Node[]): Node | Node[] {
    if (targetOrEdge instanceof Edge) {
      // Edge provided: node.with(edge, target)
      // For undirected edges, don't set forward or reverse (results in dir="none")
      targetOrEdge.node = this;
      const target = targetOrUndefined!;
      if (Array.isArray(target)) {
        for (const t of target) {
          // Create a copy of the edge for each target to avoid shared state
          const edgeCopy = new Edge({
            ...targetOrEdge.attrs,
            node: this,
          });
          this.connect(t, edgeCopy);
        }
        return target;
      }
      return this.connect(target, targetOrEdge);
    }

    const target = targetOrEdge;
    // For undirected connections, don't set forward or reverse flags
    // This results in dir="none" (no arrow heads)
    const edge = new Edge({ node: this });

    if (Array.isArray(target)) {
      for (const t of target) {
        this.connect(t, edge);
      }
      return target;
    }
    return this.connect(target, edge);
  }

  /**
   * Internal connect method
   */
  connect(target: Node, edge: Edge): Node {
    if (!target || typeof target !== "object" || !("nodeId" in target)) {
      throw new Error(`${String(target)} is not a valid Node`);
    }
    if (!edge || typeof edge !== "object" || !("attrs" in edge)) {
      throw new Error(`${String(edge)} is not a valid Edge`);
    }
    this._diagram.connect(this, target, edge);
    return target;
  }

  private _randId(): string {
    return `${Date.now().toString(36)}_${Math.random().toString(36).substr(2, 9)}`;
  }
}
