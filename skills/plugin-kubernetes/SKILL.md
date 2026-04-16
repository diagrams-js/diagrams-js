---
name: plugin-kubernetes
description: >-
  Import and export Kubernetes YAML manifests with diagrams-js.
  Convert Kubernetes manifests to architecture diagrams and vice versa.
type: feature
library: diagrams-js
---

# Kubernetes Plugin for diagrams-js

The Kubernetes plugin enables bidirectional conversion between Kubernetes YAML manifests and architecture diagrams.

## When to Use This Skill

Use this skill when you need to:

- Visualize Kubernetes configurations as architecture diagrams
- Generate Kubernetes manifests from existing diagrams
- Import multi-resource Kubernetes applications into diagrams
- Export diagrams to Kubernetes deployment configurations
- Document container orchestration setups

## Quick Start

### Installation

```bash
npm install @diagrams-js/plugin-kubernetes
```

### Import from Kubernetes YAML

```typescript
import { Diagram } from "diagrams-js";
import { kubernetesPlugin } from "@diagrams-js/plugin-kubernetes";

const diagram = Diagram("My K8s Application");

// Register the plugin
await diagram.registerPlugins([kubernetesPlugin]);

// Import from Kubernetes YAML
const k8sYaml = `
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    spec:
      containers:
      - name: web
        image: nginx:latest
        ports:
        - containerPort: 80
`;

await diagram.import(k8sYaml, "kubernetes");

// Render the diagram
const svg = await diagram.render();
```

### Export to Kubernetes YAML

```typescript
import { Diagram, Node } from "diagrams-js";
import { kubernetesPlugin } from "@diagrams-js/plugin-kubernetes";

const diagram = Diagram("My K8s Application");

// Create nodes with Kubernetes metadata
const deployment = diagram.add(Node("web-deployment"));
deployment.metadata = {
  kubernetes: {
    kind: "Deployment",
    namespace: "default",
    spec: {
      replicas: 3,
      selector: { matchLabels: { app: "web" } },
      template: {
        spec: {
          containers: [{ name: "web", image: "nginx:latest", ports: [{ containerPort: 80 }] }],
        },
      },
    },
  },
};

// Register plugin and export
await diagram.registerPlugins([kubernetesPlugin]);
const k8sYaml = await diagram.export("kubernetes");
```

## Features

### Import Capabilities

- Parse Kubernetes YAML manifests (single or multi-document)
- Create nodes for each resource with appropriate Kubernetes icons
- Support for all common Kubernetes resource types
- Create edges for service-to-deployment relationships
- Create clusters for namespaces
- Store Kubernetes-specific metadata on nodes

### Supported Resource Types

**Workloads:**

- Deployment
- StatefulSet
- DaemonSet
- ReplicaSet
- Pod
- Job
- CronJob

**Services & Networking:**

- Service
- Ingress
- NetworkPolicy

**Storage:**

- ConfigMap
- Secret
- PersistentVolume
- PersistentVolumeClaim
- StorageClass

**RBAC:**

- Role
- RoleBinding
- ClusterRole
- ClusterRoleBinding
- ServiceAccount

**Cluster:**

- Namespace
- Node
- HorizontalPodAutoscaler

### Export Capabilities

- Export diagrams to Kubernetes YAML format
- Generate valid Kubernetes manifests
- Preserve resource configuration (replicas, selectors, ports, etc.)
- Support for multi-document YAML output

## Configuration

### Custom Resource Mappings

You can customize which icons are used for specific Kubernetes resources:

```typescript
import { Diagram } from "diagrams-js";
import { createKubernetesPlugin } from "@diagrams-js/plugin-kubernetes";

const diagram = Diagram("My K8s Application");

// Create plugin with custom resource mappings
const plugin = createKubernetesPlugin({
  defaultNamespace: "production",
  imageMappings: {
    // 1. Provider icon mapping - use built-in provider icons
    "my-custom-deployment": {
      provider: "onprem",
      type: "compute",
      resource: "Server",
    },
    "my-custom-service": {
      provider: "onprem",
      type: "database",
      resource: "Postgresql",
    },

    // 2. Direct URL string - use a custom image URL
    "my-frontend": "https://example.com/react-icon.png",

    // 3. URL object - same as string but as object
    "my-backend": {
      url: "https://example.com/node-icon.svg",
    },

    // 4. Iconify icon - use icons from Iconify (https://iconify.design/)
    // Format: { iconify: "prefix:name" }
    "custom-app": {
      iconify: "logos:kubernetes",
    },
    "redis-cache": {
      iconify: "logos:redis",
    },
  },
});

await diagram.registerPlugins([plugin]);
```

#### Iconify Icons

The plugin supports [Iconify](https://iconify.design/) icons, which provides access to 200,000+ open source icons:

```typescript
{
  iconify: "logos:kubernetes"; // Kubernetes logo
  iconify: "logos:redis"; // Redis logo
  iconify: "mdi:server"; // Material Design server icon
}
```

#### Mapping Priority

The plugin checks mappings by **resource name** first, then falls back to **resource kind**:

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-api # Would normally show Deployment icon
```

```typescript
// This mapping by RESOURCE NAME takes precedence
imageMappings: {
  "my-api": { iconify: "logos:aws" }  // Shows AWS icon instead of Deployment
}

// This mapping by KIND is the fallback
imageMappings: {
  "Deployment": { iconify: "logos:kubernetes" }  // Used if no "my-api" mapping
}
```

## Examples

### Visualize a Microservices Architecture

```typescript
import { Diagram } from "diagrams-js";
import { kubernetesPlugin } from "@diagrams-js/plugin-kubernetes";

const k8sYaml = `
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
spec:
  replicas: 3
  selector:
    matchLabels:
      app: frontend
  template:
    spec:
      containers:
      - name: frontend
        image: nginx:alpine
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: frontend-service
spec:
  selector:
    app: frontend
  ports:
  - port: 80
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
spec:
  replicas: 2
  selector:
    matchLabels:
      app: api
  template:
    spec:
      containers:
      - name: api
        image: node:18
        ports:
        - containerPort: 3000
---
apiVersion: v1
kind: Service
metadata:
  name: api-service
spec:
  selector:
    app: api
  ports:
  - port: 3000
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
spec:
  serviceName: postgres
  replicas: 1
  selector:
    matchLabels:
      app: postgres
  template:
    spec:
      containers:
      - name: postgres
        image: postgres:15
`;

const diagram = Diagram("Production Architecture");
await diagram.registerPlugins([kubernetesPlugin]);
await diagram.import(k8sYaml, "kubernetes");

const svg = await diagram.render();
```

### Import Multiple Manifest Files

```typescript
const stagingManifest = `
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web
  namespace: staging
spec:
  replicas: 1
  template:
    spec:
      containers:
      - name: web
        image: myapp:staging
`;

const productionManifest = `
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web
  namespace: production
spec:
  replicas: 5
  template:
    spec:
      containers:
      - name: web
        image: myapp:latest
`;

const diagram = Diagram("Environment Comparison");
await diagram.registerPlugins([kubernetesPlugin]);

// Each manifest gets its own cluster
await diagram.import([stagingManifest, productionManifest], "kubernetes");
```

### Export with Custom Metadata

```typescript
import { Diagram, Node } from "diagrams-js";
import { kubernetesPlugin } from "@diagrams-js/plugin-kubernetes";

const diagram = Diagram("Production Stack");

const deployment = diagram.add(Node("api"));
deployment.metadata = {
  kubernetes: {
    kind: "Deployment",
    namespace: "production",
    labels: {
      app: "api",
      tier: "backend",
      env: "production",
    },
    spec: {
      replicas: 5,
      selector: { matchLabels: { app: "api" } },
      template: {
        spec: {
          containers: [
            {
              name: "api",
              image: "myapp:latest",
              resources: {
                limits: { cpu: "1000m", memory: "512Mi" },
                requests: { cpu: "200m", memory: "256Mi" },
              },
            },
          ],
        },
      },
    },
  },
};

await diagram.registerPlugins([kubernetesPlugin]);
const k8sYaml = await diagram.export("kubernetes");
```

### Round-trip Conversion

```typescript
const diagram = Diagram("Modified Stack");
await diagram.registerPlugins([kubernetesPlugin]);

// Import existing manifest
await diagram.import(existingK8sYaml, "kubernetes");

// Add a new resource
const monitoring = diagram.add(Node("prometheus"));
monitoring.metadata = {
  kubernetes: {
    kind: "Deployment",
    namespace: "monitoring",
    spec: {
      replicas: 1,
      selector: { matchLabels: { app: "prometheus" } },
      template: {
        spec: {
          containers: [
            {
              name: "prometheus",
              image: "prom/prometheus:latest",
              ports: [{ containerPort: 9090 }],
            },
          ],
        },
      },
    },
  },
};

// Export modified configuration
const updatedYaml = await diagram.export("kubernetes");
```

## API Reference

### `kubernetesPlugin`

Pre-created Kubernetes plugin instance (no configuration needed).

```typescript
import { kubernetesPlugin } from "@diagrams-js/plugin-kubernetes";

// ✅ Use the pre-created instance
await diagram.registerPlugins([kubernetesPlugin]);
```

The plugin provides:

- **Importer**: `name: "kubernetes"`, supports `.yml` and `.yaml` files
- **Exporter**: `name: "kubernetes"`, exports to `.yaml` format

### `createKubernetesPlugin(config?)`

Factory function for creating a Kubernetes plugin with custom configuration.

```typescript
import { createKubernetesPlugin } from "@diagrams-js/plugin-kubernetes";

// ✅ Create plugin with custom configuration
const customPlugin = createKubernetesPlugin({
  defaultNamespace: "production",
  imageMappings: {
    "custom-app": { iconify: "logos:kubernetes" },
  },
});

await diagram.registerPlugins([customPlugin]);
```

**Parameters:**

- `config` (optional): `KubernetesPluginConfig`
  - `defaultNamespace`: Default namespace for exports (default: "default")
  - `imageMappings`: Custom resource to icon mappings

**Returns:** `DiagramsPlugin` - The plugin instance

### Exported Types

The plugin exports the `ImageMappings` type for TypeScript users:

```typescript
import { createKubernetesPlugin, type ImageMappings } from "@diagrams-js/plugin-kubernetes";

// Type your image mappings for better IDE support
const mappings: ImageMappings = {
  "my-deployment": { provider: "k8s", type: "compute", resource: "Deploy" },
  "my-app": { iconify: "logos:kubernetes" },
  "custom-resource": "https://example.com/icon.svg",
};

const plugin = createKubernetesPlugin({ imageMappings: mappings });
```

## Runtime Support

- Node.js ✅
- Browser ✅
- Deno ✅
- Bun ✅

## Best Practices

### 1. Use Descriptive Resource Names

Resource names become node labels:

```yaml
# ✅ Good
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service

# ❌ Avoid
apiVersion: apps/v1
kind: Deployment
metadata:
  name: svc1
```

### 2. Store Metadata for Round-trip

When creating nodes programmatically, store Kubernetes metadata:

```typescript
const node = diagram.add(Node("my-deployment"));
node.metadata = {
  kubernetes: {
    kind: "Deployment",
    namespace: "default",
    spec: {
      replicas: 3,
      selector: { matchLabels: { app: "my-app" } },
    },
  },
};
```

### 3. Handle Service Selectors

The plugin automatically creates edges when Service selectors match Deployment labels:

```yaml
# Deployment labels
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web
  labels:
    app: web

# Service selector matches
apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  selector:
    app: web  # Creates edge from service to deployment
```

### 4. Use Namespaces

Organize resources with namespaces for better visualization:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
  namespace: production

apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
  namespace: staging
```

### 5. Multi-document YAML

Use `---` separator for multiple resources:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web
---
apiVersion: v1
kind: Service
metadata:
  name: web-service
```

## Troubleshooting

### Plugin Not Found

```typescript
// Make sure to register the plugin before using import/export
import { kubernetesPlugin } from "@diagrams-js/plugin-kubernetes";

await diagram.registerPlugins([kubernetesPlugin]);
```

### Type Errors

The metadata property is typed as `Record<string, any>`:

```typescript
node.metadata = {
  kubernetes: { ... }
};
```

### Missing Icons

For custom resources or specific icons:

```typescript
const plugin = createKubernetesPlugin({
  imageMappings: {
    // Option 1: Use a provider icon
    "my-deployment": { provider: "k8s", type: "compute", resource: "Deploy" },

    // Option 2: Use a custom image URL
    "my-app": "https://example.com/icon.svg",

    // Option 3: Use Iconify
    "custom-app": { iconify: "logos:kubernetes" },
  },
});
```

### Import Fails

Ensure your Kubernetes YAML is valid:

```typescript
try {
  await diagram.import(k8sYaml, "kubernetes");
} catch (error) {
  console.error("Import failed:", error.message);
}
```

Required fields: `apiVersion`, `kind`, `metadata.name`

## Further Reading

- diagrams-js Plugin System: See plugin system documentation
- diagrams-js Documentation: https://diagrams-js.hatemhosny.dev
- Kubernetes Documentation: https://kubernetes.io/docs/
- Iconify Icons: https://iconify.design/
