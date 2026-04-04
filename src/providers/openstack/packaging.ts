import { _Openstack } from "./index.js";

class _Packaging extends _Openstack {
  protected static override _type = "packaging";
  protected static override _iconDir = "openstack/packaging";
}

export class LOCI extends _Packaging {
  protected static override _icon = "loci.png";
}

export class Puppet extends _Packaging {
  protected static override _icon = "puppet.png";
}

export class RPM extends _Packaging {
  protected static override _icon = "rpm.png";
}

