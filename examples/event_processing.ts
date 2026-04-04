import { Diagram, Cluster, Edge, setIconBaseDir } from "../src/index.js";
import { EC2, ELB, Lambda } from "../src/providers/aws/compute.js";
import { RDS, Redshift } from "../src/providers/aws/database.js";
import { S3 } from "../src/providers/aws/storage.js";
import { SQS } from "../src/providers/aws/integration.js";
import { EKS } from "../src/providers/aws/compute.js";

// Set icon base directory
setIconBaseDir("resources");

// Create diagram
const diagram = new Diagram("Event Processing", {
  direction: "TB",
  outformat: "svg",
  show: false,
});

// Create nodes
const source = diagram.add(new EKS("k8s source"));

// Create cluster
diagram.cluster("Event Flows", (eventFlows) => {
  eventFlows.cluster("Event Workers", (workersCluster) => {
    const workers = [
      workersCluster.add(new EC2("worker1")),
      workersCluster.add(new EC2("worker2")),
      workersCluster.add(new EC2("worker3")),
    ];
    
    const queue = eventFlows.add(new SQS("event queue"));
    
    eventFlows.cluster("Processing", (procCluster) => {
      const handlers = [
        procCluster.add(new Lambda("proc1")),
        procCluster.add(new Lambda("proc2")),
        procCluster.add(new Lambda("proc3")),
      ];
    });
  });
});

const store = diagram.add(new S3("events store"));
const dw = diagram.add(new Redshift("analytics"));

// Connect nodes
// source >> workers >> queue >> handlers
// handlers >> store
// handlers >> dw

console.log("✓ Event Processing diagram created");
console.log("\nDOT source:");
console.log(diagram.toString());

diagram.render()
  .then(() => diagram.save())
  .then(() => {
    console.log("\n✓ Saved to event_processing.svg");
    diagram.destroy();
  })
  .catch((err) => {
    console.error("Error:", err);
    diagram.destroy();
    process.exit(1);
  });
