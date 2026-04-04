import { _Openstack } from "./index.js";

class _Apiproxies extends _Openstack {
  protected static override _type = "apiproxies";
  protected static override _iconDir = "openstack/apiproxies";
}

export class EC2API extends _Apiproxies {
  protected static override _icon = "ec2api.png";
}

