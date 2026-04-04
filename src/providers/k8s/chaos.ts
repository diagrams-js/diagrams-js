import { _K8s } from "./index.js";

class _Chaos extends _K8s {
  protected static override _type = "chaos";
  protected static override _iconDir = "k8s/chaos";
}

export class ChaosMesh extends _Chaos {
  protected static override _icon = "chaos-mesh.png";
}

export class LitmusChaos extends _Chaos {
  protected static override _icon = "litmus-chaos.png";
}

