import { _Firebase } from "./index.js";

class _Base extends _Firebase {
  protected static override _type = "base";
  protected static override _iconDir = "firebase/base";
}

export class Firebase extends _Base {
  protected static override _icon = "firebase.png";
}

