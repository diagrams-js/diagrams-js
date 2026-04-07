import { describe, it, expect } from "vite-plus/test";
import { Diagram } from "../src/index.js";
import {
  Person,
  Container,
  Database,
  System,
  Relationship,
  SystemBoundary,
} from "../src/providers/c4/index.js";

describe("C4 Model", () => {
  describe("Person", () => {
    it("should create a person node", () => {
      const diagram = Diagram("C4 Test");
      const person = diagram.add(Person("User"));

      expect(person).toBeDefined();
      expect(person.nodeId).toBeDefined();
      diagram.destroy();
    });

    it("should create a person with description", () => {
      const diagram = Diagram("C4 Test");
      diagram.add(Person("User", "A user of the system"));

      const dot = diagram.toString();
      expect(dot).toContain("User");
      expect(dot).toContain("Person");
      expect(dot).toContain('fillcolor="dodgerblue4"');
      expect(dot).toContain('style="rounded,filled"');
      diagram.destroy();
    });

    it("should create an external person", () => {
      const diagram = Diagram("C4 Test");
      diagram.add(Person("External User", "An external user", true));

      const dot = diagram.toString();
      expect(dot).toContain("External User");
      expect(dot).toContain("External Person");
      expect(dot).toContain('fillcolor="gray60"');
      diagram.destroy();
    });

    it("should have correct dimensions with description", () => {
      const diagram = Diagram("C4 Test");
      diagram.add(Person("User", "Description here"));

      const dot = diagram.toString();
      expect(dot).toContain('width="2.6"');
      expect(dot).toContain('height="1.6"');
      diagram.destroy();
    });

    it("should have smaller dimensions without description", () => {
      const diagram = Diagram("C4 Test");
      diagram.add(Person("User"));

      const dot = diagram.toString();
      expect(dot).toContain('width="2"');
      expect(dot).toContain('height="1"');
      diagram.destroy();
    });
  });

  describe("Container", () => {
    it("should create a container node", () => {
      const diagram = Diagram("C4 Test");
      const container = diagram.add(Container("Web App"));

      expect(container).toBeDefined();
      expect(container.nodeId).toBeDefined();
      diagram.destroy();
    });

    it("should create a container with technology", () => {
      const diagram = Diagram("C4 Test");
      diagram.add(Container("API", "Node.js"));

      const dot = diagram.toString();
      expect(dot).toContain("API");
      expect(dot).toContain("Container: Node.js");
      expect(dot).toContain('fillcolor="dodgerblue3"');
      diagram.destroy();
    });

    it("should create a container with technology and description", () => {
      const diagram = Diagram("C4 Test");
      diagram.add(Container("Web App", "React", "Frontend application"));

      const dot = diagram.toString();
      expect(dot).toContain("Web App");
      expect(dot).toContain("Container: React");
      expect(dot).toContain("Frontend application");
      diagram.destroy();
    });
  });

  describe("Database", () => {
    it("should create a database node with cylinder shape", () => {
      const diagram = Diagram("C4 Test");
      diagram.add(Database("PostgreSQL"));

      const dot = diagram.toString();
      expect(dot).toContain("PostgreSQL");
      expect(dot).toContain('shape="cylinder"');
      expect(dot).toContain('labelloc="b"');
      diagram.destroy();
    });

    it("should create a database with technology and description", () => {
      const diagram = Diagram("C4 Test");
      diagram.add(Database("Main DB", "PostgreSQL", "Primary data store"));

      const dot = diagram.toString();
      expect(dot).toContain("Main DB");
      expect(dot).toContain("Database: PostgreSQL");
      expect(dot).toContain("Primary data store");
      diagram.destroy();
    });
  });

  describe("System", () => {
    it("should create a system node", () => {
      const diagram = Diagram("C4 Test");
      const system = diagram.add(System("Core System"));

      expect(system).toBeDefined();
      expect(system.nodeId).toBeDefined();
      diagram.destroy();
    });

    it("should create a system with description", () => {
      const diagram = Diagram("C4 Test");
      diagram.add(System("Billing", "Handles payments"));

      const dot = diagram.toString();
      expect(dot).toContain("Billing");
      expect(dot).toContain("System");
      expect(dot).toContain("Handles payments");
      expect(dot).toContain('fillcolor="dodgerblue4"');
      diagram.destroy();
    });

    it("should create an external system", () => {
      const diagram = Diagram("C4 Test");
      diagram.add(System("Payment Gateway", "External payment provider", true));

      const dot = diagram.toString();
      expect(dot).toContain("Payment Gateway");
      expect(dot).toContain("External System");
      expect(dot).toContain('fillcolor="gray60"');
      diagram.destroy();
    });
  });

  describe("Relationship", () => {
    it("should create a relationship edge with default styling", () => {
      const diagram = Diagram("C4 Test");
      const node1 = diagram.add(System("A"));
      const node2 = diagram.add(System("B"));

      node1.to(Relationship(), node2);

      const dot = diagram.toString();
      expect(dot).toContain('style="dashed"');
      expect(dot).toContain('color="gray60"');
      diagram.destroy();
    });

    it("should create a relationship with label", () => {
      const diagram = Diagram("C4 Test");
      const node1 = diagram.add(System("A"));
      const node2 = diagram.add(System("B"));

      node1.to(Relationship("Uses"), node2);

      const dot = diagram.toString();
      expect(dot).toContain('style="dashed"');
      expect(dot).toContain('color="gray60"');
      expect(dot).toContain("Uses");
      diagram.destroy();
    });
  });

  describe("SystemBoundary", () => {
    it("should create a system boundary cluster", () => {
      const diagram = Diagram("C4 Test");
      const boundary = SystemBoundary("My System", diagram);

      expect(boundary).toBeDefined();
      expect(boundary.label).toBe("My System");
      expect(boundary.name).toBe("cluster_My_System");
      diagram.destroy();
    });

    it("should have correct styling", () => {
      const diagram = Diagram("C4 Test");
      SystemBoundary("System", diagram);

      const dot = diagram.toString();
      expect(dot).toContain('style="dashed"');
      expect(dot).toContain('bgcolor="white"');
      expect(dot).toContain('margin="16"');
      expect(dot).toContain('labeljust="l"');
      diagram.destroy();
    });

    it("should contain nodes", () => {
      const diagram = Diagram("C4 Test");
      const boundary = SystemBoundary("System", diagram);
      const container = boundary.add(Container("Web App"));

      expect(container).toBeDefined();
      expect(boundary.getNodes().size).toBe(1);
      diagram.destroy();
    });
  });

  describe("C4 Diagram Integration", () => {
    it("should create a complete C4 container diagram", () => {
      const diagram = Diagram("Container Diagram", { direction: "TB" });

      // External user
      const user = diagram.add(Person("User", "System user", true));

      // System boundary
      const system = SystemBoundary("My Application", diagram);
      const webApp = system.add(Container("Web App", "React", "User interface"));
      const api = system.add(Container("API", "Node.js", "Business logic"));
      const db = system.add(Database("Database", "PostgreSQL", "Data storage"));

      // Relationships
      user.to(Relationship("Uses"), webApp);
      webApp.to(Relationship("Calls"), api);
      api.to(Relationship("Reads/Writes"), db);

      const dot = diagram.toString();

      // Verify all elements exist
      expect(dot).toContain("User");
      expect(dot).toContain("My Application");
      expect(dot).toContain("Web App");
      expect(dot).toContain("API");
      expect(dot).toContain("Database");
      expect(dot).toContain("cluster_My_Application");

      // Verify relationships
      expect(dot).toContain('style="dashed"');

      diagram.destroy();
    });

    it("should render C4 diagram to SVG", async () => {
      const diagram = Diagram("C4 SVG Test");

      const user = diagram.add(Person("User"));
      const system = diagram.add(System("App"));

      user.to(Relationship("Uses"), system);

      const result = await diagram.render();
      expect(typeof result).toBe("string");
      expect(result).toContain('<?xml version="1.0"');
      expect(result).toContain("<svg");
      expect(result).toContain("</svg>");

      diagram.destroy();
    });
  });

  describe("Description Formatting", () => {
    it("should handle empty description", () => {
      const diagram = Diagram("C4 Test");
      diagram.add(Container("App", "", ""));

      const dot = diagram.toString();
      expect(dot).toContain("App");
      diagram.destroy();
    });

    it("should handle HTML special characters in descriptions", () => {
      const diagram = Diagram("C4 Test");
      diagram.add(Container("App", "Java", 'Uses <special> & "chars"'));

      const dot = diagram.toString();
      // HTML should be escaped in the DOT output
      expect(dot).toContain("&lt;special&gt;");
      expect(dot).toContain("&amp;");
      expect(dot).toContain("&quot;chars&quot;");
      diagram.destroy();
    });
  });
});
