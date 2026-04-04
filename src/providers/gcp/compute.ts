import { _Gcp } from "./index.js";

class _Compute extends _Gcp {
  protected static override _type = "compute";
  protected static override _iconDir = "gcp/compute";
}

export class AppEngine extends _Compute {
  protected static override _icon = "app-engine.png";
}

export class BinaryAuthorization extends _Compute {
  protected static override _icon = "binary-authorization.png";
}

export class ComputeEngine extends _Compute {
  protected static override _icon = "compute-engine.png";
}

export class ContainerOptimizedOS extends _Compute {
  protected static override _icon = "container-optimized-os.png";
}

export class Functions extends _Compute {
  protected static override _icon = "functions.png";
}

export class GKEOnPrem extends _Compute {
  protected static override _icon = "gke-on-prem.png";
}

export class GPU extends _Compute {
  protected static override _icon = "gpu.png";
}

export class KubernetesEngine extends _Compute {
  protected static override _icon = "kubernetes-engine.png";
}

export class OSConfigurationManagement extends _Compute {
  protected static override _icon = "os-configuration-management.png";
}

export class OSInventoryManagement extends _Compute {
  protected static override _icon = "os-inventory-management.png";
}

export class OSPatchManagement extends _Compute {
  protected static override _icon = "os-patch-management.png";
}

export class Run extends _Compute {
  protected static override _icon = "run.png";
}

// Aliases
export const GAE = AppEngine;
export const GCE = ComputeEngine;
export const GCF = Functions;
export const GKE = KubernetesEngine;
export const CloudRun = Run;

