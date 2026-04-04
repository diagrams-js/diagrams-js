import { _Outscale } from "./index.js";

class _Storage extends _Outscale {
  protected static override _type = "storage";
  protected static override _iconDir = "outscale/storage";
}

export class SimpleStorageService extends _Storage {
  protected static override _icon = "simple-storage-service.png";
}

export class Storage extends _Storage {
  protected static override _icon = "storage.png";
}

