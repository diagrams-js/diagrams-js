import { _Aws } from "./index.js";

class _Storage extends _Aws {
  protected static override _type = "storage";
  protected static override _iconDir = "aws/storage";
}

export class Backup extends _Storage {
  protected static override _icon = "backup.png";
}

export class CloudendureDisasterRecovery extends _Storage {
  protected static override _icon = "cloudendure-disaster-recovery.png";
}

export class EFSInfrequentaccessPrimaryBg extends _Storage {
  protected static override _icon = "efs-infrequentaccess-primary-bg.png";
}

export class EFSStandardPrimaryBg extends _Storage {
  protected static override _icon = "efs-standard-primary-bg.png";
}

export class ElasticBlockStoreEBSSnapshot extends _Storage {
  protected static override _icon = "elastic-block-store-ebs-snapshot.png";
}

export class ElasticBlockStoreEBSVolume extends _Storage {
  protected static override _icon = "elastic-block-store-ebs-volume.png";
}

export class ElasticBlockStoreEBS extends _Storage {
  protected static override _icon = "elastic-block-store-ebs.png";
}

export class ElasticFileSystemEFSFileSystem extends _Storage {
  protected static override _icon = "elastic-file-system-efs-file-system.png";
}

export class ElasticFileSystemEFS extends _Storage {
  protected static override _icon = "elastic-file-system-efs.png";
}

export class FsxForLustre extends _Storage {
  protected static override _icon = "fsx-for-lustre.png";
}

export class FsxForWindowsFileServer extends _Storage {
  protected static override _icon = "fsx-for-windows-file-server.png";
}

export class Fsx extends _Storage {
  protected static override _icon = "fsx.png";
}

export class MultipleVolumesResource extends _Storage {
  protected static override _icon = "multiple-volumes-resource.png";
}

export class S3AccessPoints extends _Storage {
  protected static override _icon = "s3-access-points.png";
}

export class S3GlacierArchive extends _Storage {
  protected static override _icon = "s3-glacier-archive.png";
}

export class S3GlacierVault extends _Storage {
  protected static override _icon = "s3-glacier-vault.png";
}

export class S3Glacier extends _Storage {
  protected static override _icon = "s3-glacier.png";
}

export class S3ObjectLambdaAccessPoints extends _Storage {
  protected static override _icon = "s3-object-lambda-access-points.png";
}

export class SimpleStorageServiceS3BucketWithObjects extends _Storage {
  protected static override _icon = "simple-storage-service-s3-bucket-with-objects.png";
}

export class SimpleStorageServiceS3Bucket extends _Storage {
  protected static override _icon = "simple-storage-service-s3-bucket.png";
}

export class SimpleStorageServiceS3Object extends _Storage {
  protected static override _icon = "simple-storage-service-s3-object.png";
}

export class SimpleStorageServiceS3 extends _Storage {
  protected static override _icon = "simple-storage-service-s3.png";
}

export class SnowFamilySnowballImportExport extends _Storage {
  protected static override _icon = "snow-family-snowball-import-export.png";
}

export class SnowballEdge extends _Storage {
  protected static override _icon = "snowball-edge.png";
}

export class Snowball extends _Storage {
  protected static override _icon = "snowball.png";
}

export class Snowmobile extends _Storage {
  protected static override _icon = "snowmobile.png";
}

export class StorageGatewayCachedVolume extends _Storage {
  protected static override _icon = "storage-gateway-cached-volume.png";
}

export class StorageGatewayNonCachedVolume extends _Storage {
  protected static override _icon = "storage-gateway-non-cached-volume.png";
}

export class StorageGatewayVirtualTapeLibrary extends _Storage {
  protected static override _icon = "storage-gateway-virtual-tape-library.png";
}

export class StorageGateway extends _Storage {
  protected static override _icon = "storage-gateway.png";
}

export class Storage extends _Storage {
  protected static override _icon = "storage.png";
}

// Aliases
export const CDR = CloudendureDisasterRecovery;
export const EBS = ElasticBlockStoreEBS;
export const EFS = ElasticFileSystemEFS;
export const FSx = Fsx;
export const S3 = SimpleStorageServiceS3;

