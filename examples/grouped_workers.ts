import { Diagram, setIconBaseDir } from "../src/index.js";
import { EC2, RDS, ELB } from "../src/providers/aws/compute.js";
import { Redshift } from "../src/providers/aws/database.js";
import { S3 } from "../src/providers/aws/storage.js";
import { SQS } from "../src/providers/aws/integration.js";
import { Lambda } from "../src/providers/aws/compute.js";

// Set icon base directory
setIconBaseDir("resources");

// Create a diagram
const diagram = new Diagram("Grouped Workers", {
  direction: "TB",
  outformat: "svg",
  show: false,
});

// Create nodes
const lb = diagram.add(new ELB("lb"));
const workers = [
  diagram.add(new EC2("worker1")),
  diagram.add(new EC2("worker2")),
  diagram.add(new EC2("worker3")),
  diagram.add(new EC2("worker4")),
  diagram.add(new EC2("worker5")),
];
const events = diagram.add(new RDS("events"));

// Connect them: lb >> workers >> events
lb.to(workers).to(events);

// Generate and save
console.log("DOT source:");
console.log(diagram.toString());

diagram.render()
  .then(() => diagram.save())
  .then(() => {
    console.log("\n✓ Diagram saved to grouped_workers.svg");
    diagram.destroy();
  })
  .catch((err) => {
    console.error("Error:", err);
    diagram.destroy();
    process.exit(1);
  });
