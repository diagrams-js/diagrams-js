import { _Aws } from "./index.js";

class _Migration extends _Aws {
  protected static override _type = "migration";
  protected static override _iconDir = "aws/migration";
}

export class ApplicationDiscoveryService extends _Migration {
  protected static override _icon = "application-discovery-service.png";
}

export class CloudendureMigration extends _Migration {
  protected static override _icon = "cloudendure-migration.png";
}

export class DatabaseMigrationService extends _Migration {
  protected static override _icon = "database-migration-service.png";
}

export class DatasyncAgent extends _Migration {
  protected static override _icon = "datasync-agent.png";
}

export class Datasync extends _Migration {
  protected static override _icon = "datasync.png";
}

export class MigrationAndTransfer extends _Migration {
  protected static override _icon = "migration-and-transfer.png";
}

export class MigrationHub extends _Migration {
  protected static override _icon = "migration-hub.png";
}

export class ServerMigrationService extends _Migration {
  protected static override _icon = "server-migration-service.png";
}

export class SnowballEdge extends _Migration {
  protected static override _icon = "snowball-edge.png";
}

export class Snowball extends _Migration {
  protected static override _icon = "snowball.png";
}

export class Snowmobile extends _Migration {
  protected static override _icon = "snowmobile.png";
}

export class TransferForSftp extends _Migration {
  protected static override _icon = "transfer-for-sftp.png";
}

// Aliases
export const ADS = ApplicationDiscoveryService;
export const CEM = CloudendureMigration;
export const DMS = DatabaseMigrationService;
export const MAT = MigrationAndTransfer;
export const SMS = ServerMigrationService;

