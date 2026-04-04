# diagrams-ts

A TypeScript port of the [diagrams](https://github.com/mingrammer/diagrams) Python library for drawing cloud system architecture diagrams as code.

## Features

- **Diagram as Code**: Define your architecture diagrams in TypeScript/JavaScript
- **Cross-Platform**: Works in Node.js, Deno, Bun, browsers, and Cloudflare Workers
- **Graphviz-Powered**: Uses `@viz-js/viz` (WebAssembly-based Graphviz) for rendering
- **Type-Safe**: Full TypeScript support with autocompletion
- **Provider Support**: AWS, Azure, GCP, Kubernetes, and more (coming soon)

## Installation

```bash
npm install diagrams-ts
# or
yarn add diagrams-ts
# or
pnpm add diagrams-ts
```

## Quick Start

```typescript
import { Diagram, Node, Edge, setIconBaseDir } from "diagrams-ts";

// Set icon base directory (optional, defaults to "resources")
setIconBaseDir("resources");

// Create a diagram
const diagram = new Diagram("Web Service", {
  direction: "TB",      // Top to Bottom
  outformat: "svg",     // Output format
  show: false,          // Don't open after render
});

// Create nodes
const web = diagram.add(new Node("Web Server"));
const app = diagram.add(new Node("App Server"));
const db = diagram.add(new Node("Database"));

// Connect them: web -> app -> db
web.to(app).to(db);

// Add custom edges
web.to(new Edge({ color: "red", style: "dashed" }), db);

// Render and save
await diagram.save("web_service.svg");
diagram.destroy();
```

## Python to TypeScript Migration Guide

| Python | TypeScript |
|--------|-----------|
| `with Diagram("Name"):` | `const diagram = new Diagram("Name");` |
| `Node("label")` | `new Node("label")` |
| `node1 >> node2` | `node1.to(node2)` |
| `node1 << node2` | `node1.from(node2)` |
| `node1 - node2` | `node1.with(node2)` |
| `node1 >> [node2, node3]` | `node1.to([node2, node3])` |
| `Edge(color="red")` | `new Edge({ color: "red" })` |
| `with Cluster("Name"):` | `diagram.cluster("Name", (cluster) => { ... })` |

## API Reference

### Diagram

```typescript
const diagram = new Diagram(name: string, options?: DiagramOptions)
```

**Options:**
- `direction`: `"TB" | "BT" | "LR" | "RL"` - Layout direction
- `curvestyle`: `"ortho" | "curved" | "spline" | "polyline"` - Edge curve style
- `outformat`: `"png" | "jpg" | "svg" | "pdf" | "dot"` - Output format(s)
- `theme`: `"neutral" | "pastel" | "blues" | "greens" | "orange"` - Color theme
- `show`: `boolean` - Open rendered image after generation
- `autolabel`: `boolean` - Auto-prefix node labels with class name

### Node

```typescript
const node = new Node(label: string, options?: NodeOptions)
```

**Methods:**
- `to(target: Node | Node[] | Edge, target?: Node)` - Forward connection (>>)
- `from(source: Node | Node[])` - Reverse connection (<<)
- `with(target: Node | Node[])` - Bidirectional connection (-)

### Edge

```typescript
const edge = new Edge(options?: EdgeOptions)
```

**Options:**
- `label`: `string` - Edge label
- `color`: `string` - Edge color
- `style`: `string` - Edge style (solid, dashed, dotted, bold)
- `forward`: `boolean` - Forward direction arrow
- `reverse`: `boolean` - Reverse direction arrow

**Static factories:**
- `Edge.label(text)` - Create edge with label
- `Edge.color(color)` - Create edge with color
- `Edge.style(style)` - Create edge with style

### Cluster

```typescript
diagram.cluster("Name", (cluster) => {
  const node = cluster.add(new Node("label"));
});
```

## Clusters

```typescript
const diagram = new Diagram("Clustered Example", { direction: "LR" });

// Create nodes outside cluster
const lb = diagram.add(new Node("Load Balancer"));

// Create a cluster
diagram.cluster("Services", (cluster) => {
  const web1 = cluster.add(new Node("Web 1"));
  const web2 = cluster.add(new Node("Web 2"));
  
  // Connect within cluster
  web1.with(web2);
});

// Connect outside to cluster
lb.to(/* nodes in cluster */);
```

## Themes

Built-in themes:
- `neutral` (default)
- `pastel`
- `blues`
- `greens`
- `orange`

```typescript
const diagram = new Diagram("Themed", { theme: "blues" });
```

## Development

This project uses [Vite+](https://vitejs.dev/) (a unified toolchain).

```bash
# Install dependencies
vp install

# Run tests
vp test

# Build library
vp pack

# Type check and lint
vp check
```

## Project Status

This is a work-in-progress TypeScript port of the Python diagrams library.

**Completed:**
- ✅ Core classes (Diagram, Node, Edge, Cluster)
- ✅ Context management
- ✅ Graphviz rendering via WASM
- ✅ Cross-platform support (Node.js, Deno, Bun, browsers, workers)
- ✅ Connection operators (to, from, with)
- ✅ Themes
- ✅ Clusters with nesting
- ✅ Edge customization

**Coming Soon:**
- 🔄 Provider classes (AWS, GCP, Azure, etc.)
- 🔄 Custom nodes
- 🔄 C4 model support
- 🔄 Python-to-TypeScript migration tool

## License

MIT - Same as the original diagrams library
