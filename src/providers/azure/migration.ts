import { _Azure } from "./index.js";

class _Migration extends _Azure {
  protected static override _type = "migration";
  protected static override _iconDir = "azure/migration";
}

export class AzureDatabaseMigrationServices extends _Migration {
  protected static override _icon = "azure-database-migration-services.png";
}

export class DataBoxEdge extends _Migration {
  protected static override _icon = "data-box-edge.png";
}

export class DataBox extends _Migration {
  protected static override _icon = "data-box.png";
}

export class DatabaseMigrationServices extends _Migration {
  protected static override _icon = "database-migration-services.png";
}

export class MigrationProjects extends _Migration {
  protected static override _icon = "migration-projects.png";
}

export class RecoveryServicesVaults extends _Migration {
  protected static override _icon = "recovery-services-vaults.png";
}

