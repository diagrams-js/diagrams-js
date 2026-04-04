import { _Openstack } from "./index.js";

class _Compute extends _Openstack {
  protected static override _type = "compute";
  protected static override _iconDir = "openstack/compute";
}

export class Nova extends _Compute {
  protected static override _icon = "nova.png";
}

export class Qinling extends _Compute {
  protected static override _icon = "qinling.png";
}

export class Zun extends _Compute {
  protected static override _icon = "zun.png";
}

