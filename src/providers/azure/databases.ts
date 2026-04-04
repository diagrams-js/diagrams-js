import { _Azure } from "./index.js";

class _Databases extends _Azure {
  protected static override _type = "databases";
  protected static override _iconDir = "azure/databases";
}

export class AzureCosmosDb extends _Databases {
  protected static override _icon = "azure-cosmos-db.png";
}

export class AzureDataExplorerClusters extends _Databases {
  protected static override _icon = "azure-data-explorer-clusters.png";
}

export class AzureDatabaseMariadbServer extends _Databases {
  protected static override _icon = "azure-database-mariadb-server.png";
}

export class AzureDatabaseMigrationServices extends _Databases {
  protected static override _icon = "azure-database-migration-services.png";
}

export class AzureDatabaseMysqlServer extends _Databases {
  protected static override _icon = "azure-database-mysql-server.png";
}

export class AzureDatabasePostgresqlServerGroup extends _Databases {
  protected static override _icon = "azure-database-postgresql-server-group.png";
}

export class AzureDatabasePostgresqlServer extends _Databases {
  protected static override _icon = "azure-database-postgresql-server.png";
}

export class AzurePurviewAccounts extends _Databases {
  protected static override _icon = "azure-purview-accounts.png";
}

export class AzureSQLEdge extends _Databases {
  protected static override _icon = "azure-sql-edge.png";
}

export class AzureSQLServerStretchDatabases extends _Databases {
  protected static override _icon = "azure-sql-server-stretch-databases.png";
}

export class AzureSQLVM extends _Databases {
  protected static override _icon = "azure-sql-vm.png";
}

export class AzureSQL extends _Databases {
  protected static override _icon = "azure-sql.png";
}

export class AzureSynapseAnalytics extends _Databases {
  protected static override _icon = "azure-synapse-analytics.png";
}

export class CacheRedis extends _Databases {
  protected static override _icon = "cache-redis.png";
}

export class DataFactories extends _Databases {
  protected static override _icon = "data-factories.png";
}

export class ElasticJobAgents extends _Databases {
  protected static override _icon = "elastic-job-agents.png";
}

export class InstancePools extends _Databases {
  protected static override _icon = "instance-pools.png";
}

export class ManagedDatabase extends _Databases {
  protected static override _icon = "managed-database.png";
}

export class OracleDatabase extends _Databases {
  protected static override _icon = "oracle-database.png";
}

export class SQLDataWarehouses extends _Databases {
  protected static override _icon = "sql-data-warehouses.png";
}

export class SQLDatabase extends _Databases {
  protected static override _icon = "sql-database.png";
}

export class SQLElasticPools extends _Databases {
  protected static override _icon = "sql-elastic-pools.png";
}

export class SQLManagedInstance extends _Databases {
  protected static override _icon = "sql-managed-instance.png";
}

export class SQLServerRegistries extends _Databases {
  protected static override _icon = "sql-server-registries.png";
}

export class SQLServer extends _Databases {
  protected static override _icon = "sql-server.png";
}

export class SsisLiftAndShiftIr extends _Databases {
  protected static override _icon = "ssis-lift-and-shift-ir.png";
}

export class VirtualClusters extends _Databases {
  protected static override _icon = "virtual-clusters.png";
}

