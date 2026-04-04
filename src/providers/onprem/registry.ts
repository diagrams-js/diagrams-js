import { _Onprem } from "./index.js";

class _Registry extends _Onprem {
  protected static override _type = "registry";
  protected static override _iconDir = "onprem/registry";
}

export class Harbor extends _Registry {
  protected static override _icon = "harbor.png";
}

export class Jfrog extends _Registry {
  protected static override _icon = "jfrog.png";
}

