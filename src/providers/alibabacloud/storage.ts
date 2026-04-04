import { _Alibabacloud } from "./index.js";

class _Storage extends _Alibabacloud {
  protected static override _type = "storage";
  protected static override _iconDir = "alibabacloud/storage";
}

export class CloudStorageGateway extends _Storage {
  protected static override _icon = "cloud-storage-gateway.png";
}

export class FileStorageHdfs extends _Storage {
  protected static override _icon = "file-storage-hdfs.png";
}

export class FileStorageNas extends _Storage {
  protected static override _icon = "file-storage-nas.png";
}

export class HybridBackupRecovery extends _Storage {
  protected static override _icon = "hybrid-backup-recovery.png";
}

export class HybridCloudDisasterRecovery extends _Storage {
  protected static override _icon = "hybrid-cloud-disaster-recovery.png";
}

export class Imm extends _Storage {
  protected static override _icon = "imm.png";
}

export class ObjectStorageService extends _Storage {
  protected static override _icon = "object-storage-service.png";
}

export class ObjectTableStore extends _Storage {
  protected static override _icon = "object-table-store.png";
}

// Aliases
export const HDFS = FileStorageHdfs;
export const NAS = FileStorageNas;
export const HBR = HybridBackupRecovery;
export const HDR = HybridCloudDisasterRecovery;
export const OSS = ObjectStorageService;
export const OTS = ObjectTableStore;

