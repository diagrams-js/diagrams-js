import { _Elastic } from "./index.js";

class _Orchestration extends _Elastic {
  protected static override _type = "orchestration";
  protected static override _iconDir = "elastic/orchestration";
}

export class ECE extends _Orchestration {
  protected static override _icon = "ece.png";
}

export class ECK extends _Orchestration {
  protected static override _icon = "eck.png";
}

