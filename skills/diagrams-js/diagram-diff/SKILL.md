---
name: diagrams-js/diagram-diff
description: >
  Visual diff for diagrams. Compare two versions of a diagram to see added, removed,
  modified, and renamed elements with color-coded side-by-side rendering. Perfect for
  code reviews, documentation, and architecture evolution tracking.
type: core
library: diagrams-js
library_version: "0.0.9"
requires:
  - diagrams-js/getting-started
  - diagrams-js/json-serialization
sources:
  - "hatemhosny/diagrams-js:docs/docs/guides/diagram-diff.mdx"
  - "hatemhosny/diagrams-js:src/diff.ts"
---

This skill builds on diagrams-js/getting-started and diagrams-js/json-serialization. Read them first for foundational concepts.

# diagrams-js — Diagram Diff

Compare two versions of a diagram visually. The diff feature highlights **added**, **removed**, **modified**, and **renamed** elements with color-coded overlays in a side-by-side view.

## Use Cases

- **Code reviews**: See exactly what infrastructure changed in a PR
- **Documentation**: Show evolution of system architecture
- **Auditing**: Track what was added or removed between deployments

## Core Patterns

### Compute and Render a Diff

```typescript
import { computeDiff, renderDiff } from "diagrams-js";
import { writeFileSync } from "fs";

const before = JSON.parse(await fs.readFile("arch-v1.json", "utf8"));
const after = JSON.parse(await fs.readFile("arch-v2.json", "utf8"));

// Compute the diff
const diff = computeDiff(before, after);
console.log(diff.summary); // { added: 2, removed: 1, modified: 3, ... }

// Render as self-contained HTML
const html = await renderDiff(diff, before, after, { format: "html" });
await fs.writeFile("diff.html", html);
```

### Use Convenience Static Methods

```typescript
import { Diagram } from "diagrams-js";

// Just compute
const diff = Diagram.diff(before, after);

// Compute and render in one call
const html = await Diagram.renderDiff(before, after, { format: "html" });
```

### Understanding the Diff Result

```typescript
const diff = computeDiff(before, after);

// Summary counts
console.log(diff.summary);
// { added: 2, removed: 1, modified: 3, unchanged: 5, renamed: 0 }

// Check specific node
const nodeDiff = diff.nodes.get("web-server");

if (nodeDiff?.kind === "modified") {
  console.log("Changes:", nodeDiff.changes);
  // ["label: \"Web\" → \"Web v2\"", "type: \"EC2\" → \"Lambda\""]
}
```

### Render Options

```typescript
const html = await renderDiff(diff, before, after, {
  format: "html", // "html" or "svg"
  theme: "light", // "light" or "dark"
  layout: "side-by-side", // "side-by-side" or "stacked"
  showUnchanged: "dim", // "show", "dim", or "hide"
  showLegend: true, // Show color legend
  showSummary: true, // Show change counts
  hoverDetails: true, // Show tooltips on hover
});
```

## Change Types

| Kind        | Color     | Description                                         |
| ----------- | --------- | --------------------------------------------------- |
| `added`     | 🟢 Green  | New element in after version                        |
| `removed`   | 🔴 Red    | Element deleted in after version                    |
| `modified`  | 🟠 Amber  | Properties changed                                  |
| `renamed`   | 🟣 Purple | ID changed but same entity (matched by fingerprint) |
| `unchanged` | ⚪ Gray   | No changes (dimmed by default)                      |

## Node Matching

Nodes are matched in two phases:

1. **ID Matching**: Same `id` → direct match
2. **Fingerprint Matching**: Unmatched nodes compared by `(label, provider, service, type)`

This detects renames (same entity, different ID) vs true add/remove.

```typescript
// These match as "renamed" (same fingerprint, different ID)
// Before: { id: "web-old", label: "Web Server", provider: "aws", type: "EC2" }
// After:  { id: "web-new", label: "Web Server", provider: "aws", type: "EC2" }
```

## Diff Options

```typescript
const diff = computeDiff(before, after, {
  // Ignore layout/position changes (default: true)
  ignore: { position: true },

  // Ignore all metadata
  ignore: { metadata: true },

  // Ignore specific metadata keys
  ignore: { metadata: ["cpu", "memory"] },

  // Ignore specific Graphviz attributes
  ignore: { attrs: ["color", "fillcolor"] },

  // Custom matching function
  matchNodes: (a, b) => a.metadata?.resourceId === b.metadata?.resourceId,
});
```

## Metadata Changes

Diagram-level changes (name, theme, direction, etc.) are tracked separately:

```typescript
const diff = computeDiff(before, after);

if (diff.meta.name) {
  console.log(`Renamed: "${diff.meta.name.before}" → "${diff.meta.name.after}"`);
}

if (diff.meta.theme) {
  console.log(`Theme changed: ${diff.meta.theme.before} → ${diff.meta.theme.after}`);
}
```

These appear in the HTML output under "Diagram Options Changed".

## Common Mistakes

### CRITICAL Forgetting to await renderDiff

Wrong:

```typescript
const html = renderDiff(diff, before, after); // Missing await
fs.writeFileSync("diff.html", html); // html is Promise, not string
```

Correct:

```typescript
const html = await renderDiff(diff, before, after);
fs.writeFileSync("diff.html", html);
```

`renderDiff` is async because it renders both diagrams to SVG.

### HIGH Expecting renamed nodes without fingerprint match

Wrong:

```typescript
// Before: { id: "web", label: "Web Server" }
// After:  { id: "api", label: "API Server" }
// Both label AND id changed → detected as removed + added
```

Correct:

```typescript
// Before: { id: "web", label: "Web Server", provider: "aws", type: "EC2" }
// After:  { id: "api", label: "Web Server", provider: "aws", type: "EC2" }
// Same label/provider/type → detected as renamed
```

Keep at least `(label, provider, service, type)` consistent for rename detection.

### MEDIUM Confusing modified with renamed

- `renamed`: Only the ID changed, everything else identical
- `modified`: ID stayed the same, properties changed
- Both: ID changed AND properties changed → `renamed` with `changes` array

```typescript
if (nodeDiff.kind === "renamed" && nodeDiff.changes) {
  // Renamed AND something else changed
  console.log("Renamed from", nodeDiff.before?.id, "to", nodeDiff.after?.id);
  console.log("Also changed:", nodeDiff.changes);
}
```

## Best Practices

### Use Stable Node IDs

Node IDs should represent the logical entity:

```typescript
// Good: ID represents the service
const web = diagram.add(EC2("Web Server", { nodeId: "web-service" }));

// Bad: ID includes version/instance info
const web = diagram.add(EC2("Web Server", { nodeId: "web-v1-az1" }));
```

### Export JSON for Versioning

Save `diagram.toJSON()` alongside your code:

```typescript
// In your build/CI
await diagram.save("architecture.json", { format: "json" });
```

### Focus on Meaningful Changes

Ignore cosmetic changes:

```typescript
computeDiff(before, after, {
  ignore: {
    position: true, // Layout changes
    attrs: ["color"], // Visual styling
    metadata: ["cost"], // Non-structural metadata
  },
});
```

## Complete Example

```typescript
import { Diagram, computeDiff, renderDiff } from "diagrams-js";
import { EC2, Lambda } from "diagrams-js/aws/compute";
import { RDS } from "diagrams-js/aws/database";
import { S3 } from "diagrams-js/aws/storage";

// Version 1: Traditional architecture
const v1 = Diagram("Architecture v1", { direction: "TB" });
const web1 = v1.add(EC2("Web Server"));
const db1 = v1.add(RDS("Database"));
web1.to(db1);

// Version 2: Serverless migration
const v2 = Diagram("Architecture v2", { direction: "TB" });
const web2 = v2.add(Lambda("API Handler")); // Changed: EC2 → Lambda
const db2 = v2.add(RDS("Database")); // Unchanged
const storage = v2.add(S3("Assets")); // Added
web2.to(db2);
web2.to(storage);

// Compute diff
const diff = computeDiff(v1.toJSON(), v2.toJSON());
console.log(diff.summary);
// { added: 1, removed: 0, modified: 1, unchanged: 1, renamed: 0 }

// Render visual diff
const html = await renderDiff(diff, v1.toJSON(), v2.toJSON(), {
  format: "html",
  theme: "light",
  showUnchanged: "dim",
});

await fs.writeFile("architecture-diff.html", html);
```

The HTML shows:

- 🟢 Green: New S3 "Assets" node
- 🟠 Amber: Changed EC2 → Lambda node
- ⚪ Dimmed: Unchanged RDS node

## See Also

- diagrams-js/json-serialization — Export diagrams to JSON
- diagrams-js/rendering-export — General rendering options
- diagrams-js/diagram-configuration — Diagram options (name, theme, direction)
