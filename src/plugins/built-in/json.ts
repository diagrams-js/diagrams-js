/**
 * Built-in JSON plugin for diagrams-js
 *
 * This plugin provides import/export capabilities for the native JSON format.
 * It is automatically registered with every diagram.
 */

import type { DiagramsPlugin, ImporterCapability, ExporterCapability } from "../types.js";
import type { Diagram } from "../../Diagram.js";
import type { DiagramJSON } from "../../json.js";
import { fromJSON as fromJSONImpl } from "../../json.js";

/**
 * Create the built-in JSON plugin
 *
 * This plugin is automatically registered with every diagram and provides
 * native JSON serialization/deserialization capabilities.
 *
 * @example
 * ```typescript
 * const diagram = Diagram('Test');
 * // JSON import/export is available by default
 * const json = diagram.toJSON();
 * ```
 */
export function createJSONPlugin(): DiagramsPlugin {
  return {
    name: "json",
    version: "1.0.0",
    apiVersion: "1.0",
    runtimeSupport: {
      node: true,
      browser: true,
      deno: true,
      bun: true,
    },
    capabilities: [
      {
        type: "importer",
        name: "json",
        extensions: [".json"],
        mimeTypes: ["application/json"],

        canImport: async (source: string | string[]): Promise<boolean> => {
          try {
            const sources = Array.isArray(source) ? source : [source];
            for (const src of sources) {
              const parsed = JSON.parse(src);
              // Basic validation - check for required fields
              if (!parsed || typeof parsed !== "object" || !Array.isArray(parsed.nodes)) {
                return false;
              }
            }
            return true;
          } catch {
            return false;
          }
        },

        import: async (source: string | string[], diagram: Diagram, _context): Promise<void> => {
          const sources = Array.isArray(source) ? source : [source];

          for (let i = 0; i < sources.length; i++) {
            const json: DiagramJSON = JSON.parse(sources[i]);

            if (sources.length > 1) {
              // Multiple sources - each in its own cluster
              diagram.cluster(json.name || `import-${i}`);
              await fromJSONImpl(json);

              // Note: This is a simplified implementation
              // In a full implementation, we would copy nodes, edges, and clusters to this cluster
            } else {
              // Single source - import directly (no cluster)
              await fromJSONImpl(json);

              // Note: This is a simplified implementation
              // In a full implementation, we would copy nodes, edges, and clusters to the diagram
            }
          }

          throw new Error(
            "JSON import via plugin is not fully supported. Use Diagram.fromJSON() instead. " +
              "Example: const diagram = await Diagram.fromJSON(jsonString)",
          );
        },
      } as ImporterCapability,

      {
        type: "exporter",
        name: "json",
        extension: ".json",
        mimeType: "application/json",

        export: async (diagram: Diagram): Promise<string> => {
          const json = diagram.toJSON();
          return JSON.stringify(json, null, 2);
        },
      } as ExporterCapability,
    ],
  };
}

/**
 * Default JSON plugin instance
 * Exported for convenience
 */
export const jsonPlugin = createJSONPlugin();
