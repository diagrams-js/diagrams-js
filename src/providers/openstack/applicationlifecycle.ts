import { _Openstack } from "./index.js";

class _Applicationlifecycle extends _Openstack {
  protected static override _type = "applicationlifecycle";
  protected static override _iconDir = "openstack/applicationlifecycle";
}

export class Freezer extends _Applicationlifecycle {
  protected static override _icon = "freezer.png";
}

export class Masakari extends _Applicationlifecycle {
  protected static override _icon = "masakari.png";
}

export class Murano extends _Applicationlifecycle {
  protected static override _icon = "murano.png";
}

export class Solum extends _Applicationlifecycle {
  protected static override _icon = "solum.png";
}

