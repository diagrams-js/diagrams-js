/**
 * C4 Model support for diagrams-js
 *
 * A set of nodes and edges to visualize software architecture using the C4 model.
 * Based on https://c4model.com/
 */

import { Node } from "../../Node.js";
import { Edge } from "../../Edge.js";
import { Cluster } from "../../Cluster.js";

/**
 * Escape HTML special characters to safely include in HTML labels
 */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

/**
 * Format description text to fit into C4 nodes.
 *
 * Wraps text to 40 characters wide, maximum 3 lines.
 * If more than 3 lines, truncates and adds "..." on the last line.
 */
function formatDescription(description: string): string {
  // Simple word wrap implementation
  const words = description.split(/\s+/);
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    if (testLine.length <= 40) {
      currentLine = testLine;
    } else {
      if (currentLine) {
        lines.push(escapeHtml(currentLine));
      }
      currentLine = word;
      if (lines.length >= 3) {
        // We've filled 3 lines, truncate the last one with "..."
        lines[2] = lines[2].substring(0, Math.max(0, 37 - currentLine.length)) + "...";
        return lines.slice(0, 3).join("<br/>");
      }
    }
  }

  if (currentLine) {
    lines.push(escapeHtml(currentLine));
  }

  // Pad to exactly 3 lines
  while (lines.length < 3) {
    lines.push("");
  }

  return lines.slice(0, 3).join("<br/>");
}

/**
 * Format edge label text
 *
 * Wraps text to 24 characters wide, maximum 3 lines.
 */
function formatEdgeLabel(description: string): string {
  const words = description.split(/\s+/);
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    if (testLine.length <= 24) {
      currentLine = testLine;
    } else {
      if (currentLine) {
        lines.push(escapeHtml(currentLine));
      }
      currentLine = word;
      if (lines.length >= 3) {
        // We've filled 3 lines, truncate the last one with "..."
        lines[2] = lines[2].substring(0, Math.max(0, 21 - currentLine.length)) + "...";
        return `<<font point-size="10">${lines.slice(0, 3).join("<br/>")}</font>>`;
      }
    }
  }

  if (currentLine) {
    lines.push(escapeHtml(currentLine));
  }

  return `<<font point-size="10">${lines.join("<br/>")}</font>>`;
}

/**
 * Create a C4 node label with HTML formatting using table for proper centering
 * Using uppercase attributes as Graphviz requires
 */
function formatNodeLabel(name: string, type: string, description?: string): string {
  let content = `<TR><TD ALIGN="CENTER" VALIGN="MIDDLE"><FONT POINT-SIZE="12"><B>${escapeHtml(name)}</B></FONT></TD></TR>`;

  if (type) {
    content += `<TR><TD ALIGN="CENTER" VALIGN="MIDDLE"><FONT POINT-SIZE="9">[${escapeHtml(type)}]</FONT></TD></TR>`;
  }

  if (description) {
    content += `<TR><TD ALIGN="CENTER" VALIGN="MIDDLE"><FONT POINT-SIZE="10">${formatDescription(description)}</FONT></TD></TR>`;
  }

  // Use uppercase attributes for Graphviz compatibility, fixedsize="false" for natural sizing
  return `<<TABLE BORDER="0" CELLBORDER="0" CELLSPACING="2" CELLPADDING="2" FIXEDSIZE="FALSE" WIDTH="0" HEIGHT="0">${content}</TABLE>>`;
}

/**
 * Base C4 node factory
 */
function C4Node(
  name: string,
  type: string,
  description?: string,
  options: Record<string, unknown> = {},
): ReturnType<typeof Node> {
  const label = formatNodeLabel(name, type, description);
  const hasDescription = !!description;

  const nodeOptions: Record<string, unknown> = {
    labelloc: "c",
    shape: "rect",
    width: hasDescription ? "2.6" : "2",
    height: hasDescription ? "1.6" : "1",
    fixedsize: "true",
    style: "filled",
    fillcolor: "dodgerblue3",
    fontcolor: "white",
    ...options,
  };

  // Pass the label as the first parameter, not in options
  // to avoid duplicate label attributes in DOT output
  return Node(label, nodeOptions);
}

/**
 * Represents a person (user, actor, role, persona)
 *
 * @param name - The name of the person
 * @param description - Optional description
 * @param external - Whether this is an external person (uses gray instead of blue)
 * @param options - Additional Graphviz node attributes
 */
export function Person(
  name: string,
  description?: string,
  external = false,
  options: Record<string, unknown> = {},
): ReturnType<typeof Node> {
  return C4Node(name, external ? "External Person" : "Person", description, {
    fillcolor: external ? "gray60" : "dodgerblue4",
    style: "rounded,filled",
    ...options,
  });
}

/**
 * Represents a container (applications, web apps, etc.)
 *
 * @param name - The name of the container
 * @param technology - Optional technology (e.g., "Java", "Node.js", "PostgreSQL")
 * @param description - Optional description
 * @param options - Additional Graphviz node attributes
 */
export function Container(
  name: string,
  technology?: string,
  description?: string,
  options: Record<string, unknown> = {},
): ReturnType<typeof Node> {
  const type = technology ? `Container: ${technology}` : "Container";
  return C4Node(name, type, description, options);
}

/**
 * Represents a database (data storage)
 *
 * @param name - The name of the database
 * @param technology - Optional technology (e.g., "PostgreSQL", "MongoDB")
 * @param description - Optional description
 * @param options - Additional Graphviz node attributes
 */
export function Database(
  name: string,
  technology?: string,
  description?: string,
  options: Record<string, unknown> = {},
): ReturnType<typeof Node> {
  const type = technology ? `Database: ${technology}` : "Database";
  return C4Node(name, type, description, {
    shape: "cylinder",
    labelloc: "b",
    ...options,
  });
}

/**
 * Represents a software system
 *
 * @param name - The name of the system
 * @param description - Optional description
 * @param external - Whether this is an external system (uses gray instead of blue)
 * @param options - Additional Graphviz node attributes
 */
export function System(
  name: string,
  description?: string,
  external = false,
  options: Record<string, unknown> = {},
): ReturnType<typeof Node> {
  return C4Node(name, external ? "External System" : "System", description, {
    fillcolor: external ? "gray60" : "dodgerblue4",
    ...options,
  });
}

/**
 * Creates a C4 relationship (edge)
 *
 * @param label - Optional relationship label/description
 * @param options - Additional Graphviz edge attributes
 */
export function Relationship(
  label?: string,
  options: Record<string, unknown> = {},
): ReturnType<typeof Edge> {
  return Edge({
    style: "dashed",
    color: "gray60",
    ...(label && { label: formatEdgeLabel(label) }),
    ...options,
  });
}

/**
 * Creates a system boundary (cluster)
 *
 * @param label - The name/label of the boundary
 * @param diagram - The diagram this boundary belongs to
 * @param options - Additional Graphviz graph attributes
 */
export function SystemBoundary(
  label: string,
  diagram: {
    cluster: (label: string) => ReturnType<typeof Cluster>;
    ["~subgraph"]: (cluster: ReturnType<typeof Cluster>) => void;
  },
  options: Record<string, unknown> = {},
): ReturnType<typeof Cluster> {
  // First create a basic cluster through the diagram
  const cluster = diagram.cluster(label);

  // Then override the graph attributes with C4-specific styling
  Object.assign(cluster.graphAttr, {
    bgcolor: "white",
    margin: "16",
    style: "dashed",
    labeljust: "l",
    ...options,
  });

  return cluster;
}
