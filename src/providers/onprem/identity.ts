import { _Onprem } from "./index.js";

class _Identity extends _Onprem {
  protected static override _type = "identity";
  protected static override _iconDir = "onprem/identity";
}

export class Dex extends _Identity {
  protected static override _icon = "dex.png";
}

