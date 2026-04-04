import { Diagram, Node, Edge, setIconBaseDir } from "./src/index.js";

// Set icon base directory
setIconBaseDir("resources");

// Create a simple diagram
const diagram = new Diagram("Simple Example", {
  direction: "TB",
  show: false,
  outformat: "svg"
});

// Create nodes
const web = diagram.add(new Node("Web Server"));
const app = diagram.add(new Node("App Server"));
const db = diagram.add(new Node("Database"));

// Connect them: web -> app -> db
web.to(app).to(db);

// Add a custom edge
web.to(new Edge({ color: "blue", style: "dashed" }), db);

// Generate DOT and render
console.log("DOT source:");
console.log(diagram.toString());

// Render to file
diagram.render()
  .then((output) => {
    console.log("\nDiagram rendered successfully!");
    console.log("Output size:", (output as Uint8Array).length, "bytes");
    
    // Save to file (works in Node.js)
    return diagram.save();
  })
  .then(() => {
    console.log("Saved to simple_example.png");
    diagram.destroy();
  })
  .catch((err) => {
    console.error("Error:", err);
    diagram.destroy();
    process.exit(1);
  });
