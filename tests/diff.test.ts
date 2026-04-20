import { describe, it, expect } from "vite-plus/test";
import { computeDiff, renderDiff } from "../src/diff.js";
import { Diagram } from "../src/Diagram.js";
import type { DiagramJSON } from "../src/json.js";

describe("computeDiff", () => {
  describe("basic diff computation", () => {
    it("should detect unchanged diagrams", () => {
      const before: DiagramJSON = {
        name: "Test",
        nodes: [
          { id: "web", label: "Web Server", provider: "aws", service: "compute", type: "EC2" },
          { id: "db", label: "Database", provider: "aws", service: "database", type: "RDS" },
        ],
        edges: [{ from: "web", to: "db", label: "SQL" }],
      };

      const after: DiagramJSON = JSON.parse(JSON.stringify(before));
      const diff = computeDiff(before, after);

      expect(diff.summary.unchanged).toBe(3); // 2 nodes + 1 edge
      expect(diff.summary.added).toBe(0);
      expect(diff.summary.removed).toBe(0);
      expect(diff.summary.modified).toBe(0);
    });

    it("should detect added nodes", () => {
      const before: DiagramJSON = {
        name: "Test",
        nodes: [
          { id: "web", label: "Web Server", provider: "aws", service: "compute", type: "EC2" },
        ],
      };

      const after: DiagramJSON = {
        name: "Test",
        nodes: [
          { id: "web", label: "Web Server", provider: "aws", service: "compute", type: "EC2" },
          {
            id: "cache",
            label: "Cache",
            provider: "aws",
            service: "database",
            type: "ElastiCache",
          },
        ],
      };

      const diff = computeDiff(before, after);

      expect(diff.summary.added).toBe(1);
      expect(diff.nodes.get("cache")?.kind).toBe("added");
    });

    it("should detect removed nodes", () => {
      const before: DiagramJSON = {
        name: "Test",
        nodes: [
          { id: "web", label: "Web Server", provider: "aws", service: "compute", type: "EC2" },
          { id: "db", label: "Database", provider: "aws", service: "database", type: "RDS" },
        ],
      };

      const after: DiagramJSON = {
        name: "Test",
        nodes: [
          { id: "web", label: "Web Server", provider: "aws", service: "compute", type: "EC2" },
        ],
      };

      const diff = computeDiff(before, after);

      expect(diff.summary.removed).toBe(1);
      expect(diff.nodes.get("db")?.kind).toBe("removed");
    });

    it("should detect label changes as modified (same provider/type, different label)", () => {
      const before: DiagramJSON = {
        name: "Test",
        nodes: [
          { id: "web1", label: "Web Server", provider: "aws", service: "compute", type: "EC2" },
        ],
      };

      const after: DiagramJSON = {
        name: "Test",
        nodes: [
          { id: "web2", label: "Web Server v2", provider: "aws", service: "compute", type: "EC2" },
        ],
      };

      const diff = computeDiff(before, after);

      // Same provider/service/type but different label = modified (label changes are treated as modifications)
      expect(diff.summary.modified).toBe(1);
      expect(diff.nodes.get("web2")?.kind).toBe("modified");
      expect(diff.nodes.get("web2")?.changes?.some((c) => c.includes("label"))).toBe(true);
    });

    it("should detect unchanged nodes with different auto-generated IDs", () => {
      const before: DiagramJSON = {
        name: "Test",
        nodes: [
          { id: "web-old", label: "Web Server", provider: "aws", service: "compute", type: "EC2" },
        ],
      };

      const after: DiagramJSON = {
        name: "Test",
        nodes: [
          { id: "web-new", label: "Web Server", provider: "aws", service: "compute", type: "EC2" },
        ],
      };

      const diff = computeDiff(before, after);

      // Same fingerprint (label+provider+service+type) = unchanged (IDs are ignored)
      expect(diff.summary.unchanged).toBe(1);
      expect(diff.nodes.get("web-new")?.kind).toBe("unchanged");
    });

    it("should detect type changes (different fingerprint)", () => {
      const before: DiagramJSON = {
        name: "Test",
        nodes: [{ id: "web1", label: "Server", provider: "aws", service: "compute", type: "EC2" }],
      };

      const after: DiagramJSON = {
        name: "Test",
        nodes: [
          { id: "web2", label: "Server", provider: "aws", service: "compute", type: "Lambda" },
        ],
      };

      const diff = computeDiff(before, after);

      // Different type = different fingerprint = removed + added (not modified)
      expect(diff.summary.removed).toBe(1);
      expect(diff.summary.added).toBe(1);
      expect(diff.nodes.get("web1")?.kind).toBe("removed");
      expect(diff.nodes.get("web2")?.kind).toBe("added");
    });
  });

  describe("edge diff computation", () => {
    it("should detect added edges", () => {
      const before: DiagramJSON = {
        name: "Test",
        nodes: [
          { id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" },
          { id: "db", label: "DB", provider: "aws", service: "database", type: "RDS" },
        ],
        edges: [],
      };

      const after: DiagramJSON = {
        name: "Test",
        nodes: [
          { id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" },
          { id: "db", label: "DB", provider: "aws", service: "database", type: "RDS" },
        ],
        edges: [{ from: "web", to: "db", label: "SQL" }],
      };

      const diff = computeDiff(before, after);

      expect(diff.summary.added).toBe(1);
    });

    it("should detect removed edges", () => {
      const before: DiagramJSON = {
        name: "Test",
        nodes: [
          { id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" },
          { id: "db", label: "DB", provider: "aws", service: "database", type: "RDS" },
        ],
        edges: [{ from: "web", to: "db", label: "SQL" }],
      };

      const after: DiagramJSON = {
        name: "Test",
        nodes: [
          { id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" },
          { id: "db", label: "DB", provider: "aws", service: "database", type: "RDS" },
        ],
        edges: [],
      };

      const diff = computeDiff(before, after);

      expect(diff.summary.removed).toBe(1);
    });

    it("should detect modified edges", () => {
      const before: DiagramJSON = {
        name: "Test",
        nodes: [
          { id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" },
          { id: "db", label: "DB", provider: "aws", service: "database", type: "RDS" },
        ],
        edges: [{ from: "web", to: "db", label: "SQL" }],
      };

      const after: DiagramJSON = {
        name: "Test",
        nodes: [
          { id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" },
          { id: "db", label: "DB", provider: "aws", service: "database", type: "RDS" },
        ],
        edges: [{ from: "web", to: "db", label: "HTTPS" }],
      };

      const diff = computeDiff(before, after);

      expect(diff.summary.modified).toBe(1);
    });

    it("should handle edges when endpoints have different IDs but same fingerprint", () => {
      const before: DiagramJSON = {
        name: "Test",
        nodes: [
          { id: "web-old", label: "Web Server", provider: "aws", service: "compute", type: "EC2" },
          { id: "db-old", label: "DB", provider: "aws", service: "database", type: "RDS" },
        ],
        edges: [{ from: "web-old", to: "db-old", label: "SQL" }],
      };

      const after: DiagramJSON = {
        name: "Test",
        nodes: [
          { id: "web-new", label: "Web Server", provider: "aws", service: "compute", type: "EC2" },
          { id: "db-new", label: "DB", provider: "aws", service: "database", type: "RDS" },
        ],
        edges: [{ from: "web-new", to: "db-new", label: "SQL" }],
      };

      const diff = computeDiff(before, after);

      // Nodes with same fingerprint but different IDs = unchanged
      expect(diff.summary.unchanged).toBe(2);
      // Edge should also be unchanged (matched by fingerprint-mapped IDs)
      expect(diff.summary.added).toBe(0);
      expect(diff.summary.removed).toBe(0);
    });
  });

  describe("metadata diff computation", () => {
    it("should detect metadata changes", () => {
      const before: DiagramJSON = {
        name: "Test",
        nodes: [
          {
            id: "web",
            label: "Web",
            provider: "aws",
            service: "compute",
            type: "EC2",
            metadata: { cpu: 2, memory: 4 },
          },
        ],
      };

      const after: DiagramJSON = {
        name: "Test",
        nodes: [
          {
            id: "web",
            label: "Web",
            provider: "aws",
            service: "compute",
            type: "EC2",
            metadata: { cpu: 4, memory: 4 },
          },
        ],
      };

      const diff = computeDiff(before, after);

      expect(diff.summary.modified).toBe(1);
      expect(diff.nodes.get("web")?.changes?.some((c) => c.includes("metadata"))).toBe(true);
    });

    it("should detect metadata changes with different IDs", () => {
      const before: DiagramJSON = {
        name: "Test",
        nodes: [
          {
            id: "db1",
            label: "Database",
            provider: "aws",
            service: "database",
            type: "RDS",
            metadata: { hi: "there" },
          },
        ],
      };

      const after: DiagramJSON = {
        name: "Test",
        nodes: [
          {
            id: "db2",
            label: "Database",
            provider: "aws",
            service: "database",
            type: "RDS",
            metadata: { hi: "there2" },
          },
        ],
      };

      const diff = computeDiff(before, after);

      // Same fingerprint (label+provider+service+type) but different metadata = modified
      expect(diff.summary.modified).toBe(1);
      expect(diff.summary.unchanged).toBe(0);
      expect(diff.nodes.get("db2")?.kind).toBe("modified");
      expect(diff.nodes.get("db2")?.changes?.some((c) => c.includes("metadata.hi"))).toBe(true);
    });

    it("should ignore metadata when configured", () => {
      const before: DiagramJSON = {
        name: "Test",
        nodes: [
          {
            id: "web",
            label: "Web",
            provider: "aws",
            service: "compute",
            type: "EC2",
            metadata: { cpu: 2 },
          },
        ],
      };

      const after: DiagramJSON = {
        name: "Test",
        nodes: [
          {
            id: "web",
            label: "Web",
            provider: "aws",
            service: "compute",
            type: "EC2",
            metadata: { cpu: 4 },
          },
        ],
      };

      const diff = computeDiff(before, after, { ignore: { metadata: true } });

      expect(diff.summary.modified).toBe(0);
      expect(diff.summary.unchanged).toBe(1);
    });
  });

  describe("diagram metadata changes", () => {
    it("should detect name changes in meta", () => {
      const before: DiagramJSON = { name: "Architecture v1", nodes: [] };
      const after: DiagramJSON = { name: "Architecture v2", nodes: [] };

      const diff = computeDiff(before, after);

      expect(diff.meta.name).toEqual({ before: "Architecture v1", after: "Architecture v2" });
    });

    it("should detect theme changes in meta", () => {
      const before: DiagramJSON = { name: "Test", theme: "pastel", nodes: [] };
      const after: DiagramJSON = { name: "Test", theme: "blues", nodes: [] };

      const diff = computeDiff(before, after);

      expect(diff.meta.theme).toEqual({ before: "pastel", after: "blues" });
    });

    it("should detect direction changes in meta", () => {
      const before: DiagramJSON = { name: "Test", direction: "LR", nodes: [] };
      const after: DiagramJSON = { name: "Test", direction: "TB", nodes: [] };

      const diff = computeDiff(before, after);

      expect(diff.meta.direction).toEqual({ before: "LR", after: "TB" });
    });
  });

  describe("cluster diff computation", () => {
    it("should detect added clusters", () => {
      const before: DiagramJSON = {
        name: "Test",
        nodes: [{ id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" }],
      };

      const after: DiagramJSON = {
        name: "Test",
        nodes: [{ id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" }],
        clusters: [{ label: "Public Subnet", nodes: ["web"] }],
      };

      const diff = computeDiff(before, after);

      expect(diff.summary.added).toBeGreaterThanOrEqual(1);
      expect(diff.clusters.some((c) => c.kind === "added" && c.label === "Public Subnet")).toBe(
        true,
      );
    });

    it("should detect removed clusters", () => {
      const before: DiagramJSON = {
        name: "Test",
        nodes: [{ id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" }],
        clusters: [{ label: "Public Subnet", nodes: ["web"] }],
      };

      const after: DiagramJSON = {
        name: "Test",
        nodes: [{ id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" }],
      };

      const diff = computeDiff(before, after);

      expect(diff.summary.removed).toBeGreaterThanOrEqual(1);
      expect(diff.clusters.some((c) => c.kind === "removed" && c.label === "Public Subnet")).toBe(
        true,
      );
    });
  });

  describe("accepts Diagram objects", () => {
    it("should accept Diagram objects as input", async () => {
      const before = Diagram("Test", {});
      const after = Diagram("Test", {});

      // Create proper nodes using the Node class
      const { Node } = await import("../src/Node.js");
      const webNode = new (Node as unknown as new (label: string) => {
        "~register": (d: unknown) => void;
        label: string;
        nodeId: string;
      })("Web");
      const dbNode = new (Node as unknown as new (label: string) => {
        "~register": (d: unknown) => void;
        label: string;
        nodeId: string;
      })("DB");

      before.add(webNode as unknown as import("../src/Node.js").Node);
      after.add(webNode as unknown as import("../src/Node.js").Node);
      after.add(dbNode as unknown as import("../src/Node.js").Node);

      // Test that it doesn't throw when accepting Diagram objects
      expect(() => computeDiff(before, after)).not.toThrow();
    });
  });
});

describe("renderDiff", () => {
  it("should render HTML format", async () => {
    const before: DiagramJSON = {
      name: "Test",
      nodes: [{ id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" }],
    };

    const after: DiagramJSON = {
      name: "Test",
      nodes: [
        { id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" },
        { id: "db", label: "DB", provider: "aws", service: "database", type: "RDS" },
      ],
    };

    const diff = computeDiff(before, after);
    const html = await renderDiff(diff, before, after, { format: "html" });

    expect(html).toContain("<!DOCTYPE html>");
    expect(html).toContain("Before");
    expect(html).toContain("After");
    expect(html).toContain("Added");
  });

  it("should render SVG format", async () => {
    const before: DiagramJSON = {
      name: "Test",
      nodes: [{ id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" }],
    };

    const after: DiagramJSON = {
      name: "Test",
      nodes: [
        { id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" },
        { id: "db", label: "DB", provider: "aws", service: "database", type: "RDS" },
      ],
    };

    const diff = computeDiff(before, after);
    const svg = await renderDiff(diff, before, after, { format: "svg" });

    expect(svg).toContain("<svg");
    expect(svg).toContain("</svg>");
    expect(svg).toContain("Before");
    expect(svg).toContain("After");
  });

  it("should support dark theme", async () => {
    const before: DiagramJSON = { name: "Test", nodes: [] };
    const after: DiagramJSON = { name: "Test", nodes: [] };

    const diff = computeDiff(before, after);
    const html = await renderDiff(diff, before, after, { format: "html", theme: "dark" });

    expect(html).toContain("#0d1117"); // Dark background color
  });

  it("should support stacked layout", async () => {
    const before: DiagramJSON = { name: "Test", nodes: [] };
    const after: DiagramJSON = { name: "Test", nodes: [] };

    const diff = computeDiff(before, after);
    const html = await renderDiff(diff, before, after, { format: "html", layout: "stacked" });

    expect(html).toContain("stacked");
  });

  it("should include summary when showSummary is true", async () => {
    const before: DiagramJSON = {
      name: "Test",
      nodes: [{ id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" }],
    };

    const after: DiagramJSON = {
      name: "Test",
      nodes: [
        { id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" },
        { id: "db", label: "DB", provider: "aws", service: "database", type: "RDS" },
      ],
    };

    const diff = computeDiff(before, after);
    const html = await renderDiff(diff, before, after, { format: "html", showSummary: true });

    expect(html).toContain("+1"); // Added count
  });

  it("should include legend when showLegend is true", async () => {
    const before: DiagramJSON = { name: "Test", nodes: [] };
    const after: DiagramJSON = { name: "Test", nodes: [] };

    const diff = computeDiff(before, after);
    const html = await renderDiff(diff, before, after, { format: "html", showLegend: true });

    expect(html).toContain("Legend");
  });

  it("should show meta changes in HTML", async () => {
    const before: DiagramJSON = { name: "Architecture v1", nodes: [] };
    const after: DiagramJSON = { name: "Architecture v2", nodes: [] };

    const diff = computeDiff(before, after);
    const html = await renderDiff(diff, before, after, { format: "html" });

    expect(html).toContain("Diagram Options Changed");
    expect(html).toContain("Architecture v1");
    expect(html).toContain("Architecture v2");
  });
});

describe("Diagram.diff static method", () => {
  it("should be available as Diagram.diff", () => {
    expect(Diagram.diff).toBeDefined();
    expect(typeof Diagram.diff).toBe("function");
  });

  it("should compute diff using Diagram.diff", async () => {
    const before: DiagramJSON = {
      name: "Test",
      nodes: [{ id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" }],
    };

    const after: DiagramJSON = {
      name: "Test",
      nodes: [
        { id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" },
        { id: "db", label: "DB", provider: "aws", service: "database", type: "RDS" },
      ],
    };

    const diff = await Diagram.diff(before, after);

    expect(diff.summary.added).toBe(1);
    expect(diff.nodes.get("db")?.kind).toBe("added");
  });
});

describe("Diagram.renderDiff static method", () => {
  it("should be available as Diagram.renderDiff", () => {
    expect(Diagram.renderDiff).toBeDefined();
    expect(typeof Diagram.renderDiff).toBe("function");
  });

  it("should render diff using Diagram.renderDiff", async () => {
    const before: DiagramJSON = {
      name: "Test",
      nodes: [{ id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" }],
    };

    const after: DiagramJSON = {
      name: "Test",
      nodes: [
        { id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" },
        { id: "db", label: "DB", provider: "aws", service: "database", type: "RDS" },
      ],
    };

    const html = await Diagram.renderDiff(before, after, { format: "html" });

    expect(html).toContain("<!DOCTYPE html>");
    expect(html).toContain("Before");
    expect(html).toContain("After");
  });
});
