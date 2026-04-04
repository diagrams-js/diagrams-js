import { _Oci } from "./index.js";

class _Storage extends _Oci {
  protected static override _type = "storage";
  protected static override _iconDir = "oci/storage";
}

export class BackupRestoreWhite extends _Storage {
  protected static override _icon = "backup-restore-white.png";
}

export class BackupRestore extends _Storage {
  protected static override _icon = "backup-restore.png";
}

export class BlockStorageCloneWhite extends _Storage {
  protected static override _icon = "block-storage-clone-white.png";
}

export class BlockStorageClone extends _Storage {
  protected static override _icon = "block-storage-clone.png";
}

export class BlockStorageWhite extends _Storage {
  protected static override _icon = "block-storage-white.png";
}

export class BlockStorage extends _Storage {
  protected static override _icon = "block-storage.png";
}

export class BucketsWhite extends _Storage {
  protected static override _icon = "buckets-white.png";
}

export class Buckets extends _Storage {
  protected static override _icon = "buckets.png";
}

export class DataTransferWhite extends _Storage {
  protected static override _icon = "data-transfer-white.png";
}

export class DataTransfer extends _Storage {
  protected static override _icon = "data-transfer.png";
}

export class ElasticPerformanceWhite extends _Storage {
  protected static override _icon = "elastic-performance-white.png";
}

export class ElasticPerformance extends _Storage {
  protected static override _icon = "elastic-performance.png";
}

export class FileStorageWhite extends _Storage {
  protected static override _icon = "file-storage-white.png";
}

export class FileStorage extends _Storage {
  protected static override _icon = "file-storage.png";
}

export class ObjectStorageWhite extends _Storage {
  protected static override _icon = "object-storage-white.png";
}

export class ObjectStorage extends _Storage {
  protected static override _icon = "object-storage.png";
}

export class StorageGatewayWhite extends _Storage {
  protected static override _icon = "storage-gateway-white.png";
}

export class StorageGateway extends _Storage {
  protected static override _icon = "storage-gateway.png";
}

