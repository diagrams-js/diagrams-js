import { _Gcp } from "./index.js";

class _Storage extends _Gcp {
  protected static override _type = "storage";
  protected static override _iconDir = "gcp/storage";
}

export class Filestore extends _Storage {
  protected static override _icon = "filestore.png";
}

export class LocalSSD extends _Storage {
  protected static override _icon = "local-ssd.png";
}

export class PersistentDisk extends _Storage {
  protected static override _icon = "persistent-disk.png";
}

export class Storage extends _Storage {
  protected static override _icon = "storage.png";
}

// Aliases
export const SSD = LocalSSD;
export const GCS = Storage;

