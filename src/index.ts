/**
 * diagrams-js - Draw cloud system architecture diagrams as code
 *
 * @example
 * ```typescript
 * import { Diagram } from "diagrams-js";
 * import { EC2 } from "diagrams-js/aws/compute";
 * import { S3 } from "diagrams-js/aws/storage";
 *
 * const diagram = Diagram("My Architecture", { direction: "LR" });
 *
 * const db = diagram.add(Database("PostgreSQL"));
 * const api = diagram.add(EC2("API Server"));
 * const storage = diagram.add(S3("Storage"));
 *
 * db.to(api);
 * api.to(storage);
 *
 * const svg = await diagram.render();
 * ```
 *
 * @packageDocumentation
 */

// Core functions
export { Diagram } from "./Diagram.js";
export { Node } from "./Node.js";
export { Edge } from "./Edge.js";
export { Custom } from "./Custom.js";

// Types
export type { Cluster } from "./Cluster.js";
export type { DiagramOptions, EdgeOptions, NodeOptions, ThemeName, ThemeConfig } from "./types.js";
