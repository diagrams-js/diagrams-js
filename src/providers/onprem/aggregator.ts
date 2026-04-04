import { _Onprem } from "./index.js";

class _Aggregator extends _Onprem {
  protected static override _type = "aggregator";
  protected static override _iconDir = "onprem/aggregator";
}

export class Fluentd extends _Aggregator {
  protected static override _icon = "fluentd.png";
}

export class Vector extends _Aggregator {
  protected static override _icon = "vector.png";
}

