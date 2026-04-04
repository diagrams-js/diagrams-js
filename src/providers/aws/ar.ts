import { _Aws } from "./index.js";

class _Ar extends _Aws {
  protected static override _type = "ar";
  protected static override _iconDir = "aws/ar";
}

export class ArVr extends _Ar {
  protected static override _icon = "ar-vr.png";
}

export class Sumerian extends _Ar {
  protected static override _icon = "sumerian.png";
}

