import { _Openstack } from "./index.js";

class _Optimization extends _Openstack {
  protected static override _type = "optimization";
  protected static override _iconDir = "openstack/optimization";
}

export class Congress extends _Optimization {
  protected static override _icon = "congress.png";
}

export class Rally extends _Optimization {
  protected static override _icon = "rally.png";
}

export class Vitrage extends _Optimization {
  protected static override _icon = "vitrage.png";
}

export class Watcher extends _Optimization {
  protected static override _icon = "watcher.png";
}

