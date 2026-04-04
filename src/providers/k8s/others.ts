import { _K8s } from "./index.js";

class _Others extends _K8s {
  protected static override _type = "others";
  protected static override _iconDir = "k8s/others";
}

export class CRD extends _Others {
  protected static override _icon = "crd.png";
}

export class PSP extends _Others {
  protected static override _icon = "psp.png";
}

