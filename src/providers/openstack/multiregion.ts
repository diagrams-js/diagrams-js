import { _Openstack } from "./index.js";

class _Multiregion extends _Openstack {
  protected static override _type = "multiregion";
  protected static override _iconDir = "openstack/multiregion";
}

export class Tricircle extends _Multiregion {
  protected static override _icon = "tricircle.png";
}

