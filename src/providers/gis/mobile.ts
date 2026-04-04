import { _Gis } from "./index.js";

class _Mobile extends _Gis {
  protected static override _type = "mobile";
  protected static override _iconDir = "gis/mobile";
}

export class Mergin extends _Mobile {
  protected static override _icon = "mergin.png";
}

export class Qfield extends _Mobile {
  protected static override _icon = "qfield.png";
}

export class Smash extends _Mobile {
  protected static override _icon = "smash.png";
}

