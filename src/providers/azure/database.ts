import { _Azure } from "./index.js";

class _Database extends _Azure {
  protected static override _type = "database";
  protected static override _iconDir = "azure/database";
}

export class BlobStorage extends _Database {
  protected static override _icon = "blob-storage.png";
}

export class CacheForRedis extends _Database {
  protected static override _icon = "cache-for-redis.png";
}

export class CosmosDb extends _Database {
  protected static override _icon = "cosmos-db.png";
}

export class DataExplorerClusters extends _Database {
  protected static override _icon = "data-explorer-clusters.png";
}

export class DataFactory extends _Database {
  protected static override _icon = "data-factory.png";
}

export class DataLake extends _Database {
  protected static override _icon = "data-lake.png";
}

export class DatabaseForMariadbServers extends _Database {
  protected static override _icon = "database-for-mariadb-servers.png";
}

export class DatabaseForMysqlServers extends _Database {
  protected static override _icon = "database-for-mysql-servers.png";
}

export class DatabaseForPostgresqlServers extends _Database {
  protected static override _icon = "database-for-postgresql-servers.png";
}

export class ElasticDatabasePools extends _Database {
  protected static override _icon = "elastic-database-pools.png";
}

export class ElasticJobAgents extends _Database {
  protected static override _icon = "elastic-job-agents.png";
}

export class InstancePools extends _Database {
  protected static override _icon = "instance-pools.png";
}

export class ManagedDatabases extends _Database {
  protected static override _icon = "managed-databases.png";
}

export class SQLDatabases extends _Database {
  protected static override _icon = "sql-databases.png";
}

export class SQLDatawarehouse extends _Database {
  protected static override _icon = "sql-datawarehouse.png";
}

export class SQLManagedInstances extends _Database {
  protected static override _icon = "sql-managed-instances.png";
}

export class SQLServerStretchDatabases extends _Database {
  protected static override _icon = "sql-server-stretch-databases.png";
}

export class SQLServers extends _Database {
  protected static override _icon = "sql-servers.png";
}

export class SQLVM extends _Database {
  protected static override _icon = "sql-vm.png";
}

export class SQL extends _Database {
  protected static override _icon = "sql.png";
}

export class SsisLiftAndShiftIr extends _Database {
  protected static override _icon = "ssis-lift-and-shift-ir.png";
}

export class SynapseAnalytics extends _Database {
  protected static override _icon = "synapse-analytics.png";
}

export class VirtualClusters extends _Database {
  protected static override _icon = "virtual-clusters.png";
}

export class VirtualDatacenter extends _Database {
  protected static override _icon = "virtual-datacenter.png";
}

