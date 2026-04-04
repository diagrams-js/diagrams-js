import { _Onprem } from "./index.js";

class _Etl extends _Onprem {
  protected static override _type = "etl";
  protected static override _iconDir = "onprem/etl";
}

export class Embulk extends _Etl {
  protected static override _icon = "embulk.png";
}

