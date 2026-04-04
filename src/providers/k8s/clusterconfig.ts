import { _K8s } from "./index.js";

class _Clusterconfig extends _K8s {
  protected static override _type = "clusterconfig";
  protected static override _iconDir = "k8s/clusterconfig";
}

export class HPA extends _Clusterconfig {
  protected static override _icon = "hpa.png";
}

export class Limits extends _Clusterconfig {
  protected static override _icon = "limits.png";
}

export class Quota extends _Clusterconfig {
  protected static override _icon = "quota.png";
}

// Aliases
export const LimitRange = Limits;
export const HorizontalPodAutoscaler = HPA;

