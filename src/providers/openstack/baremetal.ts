import { _Openstack } from "./index.js";

class _Baremetal extends _Openstack {
  protected static override _type = "baremetal";
  protected static override _iconDir = "openstack/baremetal";
}

export class Cyborg extends _Baremetal {
  protected static override _icon = "cyborg.png";
}

export class Ironic extends _Baremetal {
  protected static override _icon = "ironic.png";
}

