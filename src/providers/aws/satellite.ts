import { _Aws } from "./index.js";

class _Satellite extends _Aws {
  protected static override _type = "satellite";
  protected static override _iconDir = "aws/satellite";
}

export class GroundStation extends _Satellite {
  protected static override _icon = "ground-station.png";
}

export class Satellite extends _Satellite {
  protected static override _icon = "satellite.png";
}

