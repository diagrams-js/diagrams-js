import { _Gcp } from "./index.js";

class _Iot extends _Gcp {
  protected static override _type = "iot";
  protected static override _iconDir = "gcp/iot";
}

export class IotCore extends _Iot {
  protected static override _icon = "iot-core.png";
}

