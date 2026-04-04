import { _Openstack } from "./index.js";

class _Containerservices extends _Openstack {
  protected static override _type = "containerservices";
  protected static override _iconDir = "openstack/containerservices";
}

export class Kuryr extends _Containerservices {
  protected static override _icon = "kuryr.png";
}

