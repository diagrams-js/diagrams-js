import { _Onprem } from "./index.js";

class _Messaging extends _Onprem {
  protected static override _type = "messaging";
  protected static override _iconDir = "onprem/messaging";
}

export class Centrifugo extends _Messaging {
  protected static override _icon = "centrifugo.png";
}

