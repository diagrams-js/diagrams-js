import { _Outscale } from "./index.js";

class _Compute extends _Outscale {
  protected static override _type = "compute";
  protected static override _iconDir = "outscale/compute";
}

export class Compute extends _Compute {
  protected static override _icon = "compute.png";
}

export class DirectConnect extends _Compute {
  protected static override _icon = "direct-connect.png";
}

