import { _Generic } from "./index.js";

class _Place extends _Generic {
  protected static override _type = "place";
  protected static override _iconDir = "generic/place";
}

export class Datacenter extends _Place {
  protected static override _icon = "datacenter.png";
}

