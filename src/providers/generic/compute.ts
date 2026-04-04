import { _Generic } from "./index.js";

class _Compute extends _Generic {
  protected static override _type = "compute";
  protected static override _iconDir = "generic/compute";
}

export class Rack extends _Compute {
  protected static override _icon = "rack.png";
}

