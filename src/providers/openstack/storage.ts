import { _Openstack } from "./index.js";

class _Storage extends _Openstack {
  protected static override _type = "storage";
  protected static override _iconDir = "openstack/storage";
}

export class Cinder extends _Storage {
  protected static override _icon = "cinder.png";
}

export class Manila extends _Storage {
  protected static override _icon = "manila.png";
}

export class Swift extends _Storage {
  protected static override _icon = "swift.png";
}

