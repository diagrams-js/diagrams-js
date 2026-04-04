import { _Openstack } from "./index.js";

class _Nfv extends _Openstack {
  protected static override _type = "nfv";
  protected static override _iconDir = "openstack/nfv";
}

export class Tacker extends _Nfv {
  protected static override _icon = "tacker.png";
}

