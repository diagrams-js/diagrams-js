import { _Programming } from "./index.js";

class _Runtime extends _Programming {
  protected static override _type = "runtime";
  protected static override _iconDir = "programming/runtime";
}

export class Dapr extends _Runtime {
  protected static override _icon = "dapr.png";
}

