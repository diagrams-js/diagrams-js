import { _Openstack } from "./index.js";

class _Sharedservices extends _Openstack {
  protected static override _type = "sharedservices";
  protected static override _iconDir = "openstack/sharedservices";
}

export class Barbican extends _Sharedservices {
  protected static override _icon = "barbican.png";
}

export class Glance extends _Sharedservices {
  protected static override _icon = "glance.png";
}

export class Karbor extends _Sharedservices {
  protected static override _icon = "karbor.png";
}

export class Keystone extends _Sharedservices {
  protected static override _icon = "keystone.png";
}

export class Searchlight extends _Sharedservices {
  protected static override _icon = "searchlight.png";
}

