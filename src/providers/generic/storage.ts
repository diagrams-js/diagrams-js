import { _Generic } from "./index.js";

class _Storage extends _Generic {
  protected static override _type = "storage";
  protected static override _iconDir = "generic/storage";
}

export class Storage extends _Storage {
  protected static override _icon = "storage.png";
}

