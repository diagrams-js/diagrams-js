import { _Ibm } from "./index.js";

class _Storage extends _Ibm {
  protected static override _type = "storage";
  protected static override _iconDir = "ibm/storage";
}

export class BlockStorage extends _Storage {
  protected static override _icon = "block-storage.png";
}

export class ObjectStorage extends _Storage {
  protected static override _icon = "object-storage.png";
}

