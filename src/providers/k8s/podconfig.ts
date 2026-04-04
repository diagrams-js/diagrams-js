import { _K8s } from "./index.js";

class _Podconfig extends _K8s {
  protected static override _type = "podconfig";
  protected static override _iconDir = "k8s/podconfig";
}

export class CM extends _Podconfig {
  protected static override _icon = "cm.png";
}

export class Secret extends _Podconfig {
  protected static override _icon = "secret.png";
}

// Aliases
export const ConfigMap = CM;

