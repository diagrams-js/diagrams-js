import { _Openstack } from "./index.js";

class _Networking extends _Openstack {
  protected static override _type = "networking";
  protected static override _iconDir = "openstack/networking";
}

export class Designate extends _Networking {
  protected static override _icon = "designate.png";
}

export class Neutron extends _Networking {
  protected static override _icon = "neutron.png";
}

export class Octavia extends _Networking {
  protected static override _icon = "octavia.png";
}

