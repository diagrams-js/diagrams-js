import { _Azure } from "./index.js";

class _Menu extends _Azure {
  protected static override _type = "menu";
  protected static override _iconDir = "azure/menu";
}

export class Keys extends _Menu {
  protected static override _icon = "keys.png";
}

