import { _Firebase } from "./index.js";

class _Extentions extends _Firebase {
  protected static override _type = "extentions";
  protected static override _iconDir = "firebase/extentions";
}

export class Extensions extends _Extentions {
  protected static override _icon = "extensions.png";
}

