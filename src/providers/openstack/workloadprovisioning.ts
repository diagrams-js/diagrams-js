import { _Openstack } from "./index.js";

class _Workloadprovisioning extends _Openstack {
  protected static override _type = "workloadprovisioning";
  protected static override _iconDir = "openstack/workloadprovisioning";
}

export class Magnum extends _Workloadprovisioning {
  protected static override _icon = "magnum.png";
}

export class Sahara extends _Workloadprovisioning {
  protected static override _icon = "sahara.png";
}

export class Trove extends _Workloadprovisioning {
  protected static override _icon = "trove.png";
}

