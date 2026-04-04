import { _Openstack } from "./index.js";

class _Frontend extends _Openstack {
  protected static override _type = "frontend";
  protected static override _iconDir = "openstack/frontend";
}

export class Horizon extends _Frontend {
  protected static override _icon = "horizon.png";
}

