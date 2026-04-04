import { _Generic } from "./index.js";

class _Device extends _Generic {
  protected static override _type = "device";
  protected static override _iconDir = "generic/device";
}

export class Mobile extends _Device {
  protected static override _icon = "mobile.png";
}

export class Tablet extends _Device {
  protected static override _icon = "tablet.png";
}

