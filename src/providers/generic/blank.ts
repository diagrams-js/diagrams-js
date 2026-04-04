import { _Generic } from "./index.js";

class _Blank extends _Generic {
  protected static override _type = "blank";
  protected static override _iconDir = "generic/blank";
}

export class Blank extends _Blank {
  protected static override _icon = "blank.png";
}

