import { _Elastic } from "./index.js";

class _Saas extends _Elastic {
  protected static override _type = "saas";
  protected static override _iconDir = "elastic/saas";
}

export class Cloud extends _Saas {
  protected static override _icon = "cloud.png";
}

export class Elastic extends _Saas {
  protected static override _icon = "elastic.png";
}

