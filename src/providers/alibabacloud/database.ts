import { _Alibabacloud } from "./index.js";

class _Database extends _Alibabacloud {
  protected static override _type = "database";
  protected static override _iconDir = "alibabacloud/database";
}

export class ApsaradbCassandra extends _Database {
  protected static override _icon = "apsaradb-cassandra.png";
}

export class ApsaradbHbase extends _Database {
  protected static override _icon = "apsaradb-hbase.png";
}

export class ApsaradbMemcache extends _Database {
  protected static override _icon = "apsaradb-memcache.png";
}

export class ApsaradbMongodb extends _Database {
  protected static override _icon = "apsaradb-mongodb.png";
}

export class ApsaradbOceanbase extends _Database {
  protected static override _icon = "apsaradb-oceanbase.png";
}

export class ApsaradbPolardb extends _Database {
  protected static override _icon = "apsaradb-polardb.png";
}

export class ApsaradbPostgresql extends _Database {
  protected static override _icon = "apsaradb-postgresql.png";
}

export class ApsaradbPpas extends _Database {
  protected static override _icon = "apsaradb-ppas.png";
}

export class ApsaradbRedis extends _Database {
  protected static override _icon = "apsaradb-redis.png";
}

export class ApsaradbSqlserver extends _Database {
  protected static override _icon = "apsaradb-sqlserver.png";
}

export class DataManagementService extends _Database {
  protected static override _icon = "data-management-service.png";
}

export class DataTransmissionService extends _Database {
  protected static override _icon = "data-transmission-service.png";
}

export class DatabaseBackupService extends _Database {
  protected static override _icon = "database-backup-service.png";
}

export class DisributeRelationalDatabaseService extends _Database {
  protected static override _icon = "disribute-relational-database-service.png";
}

export class GraphDatabaseService extends _Database {
  protected static override _icon = "graph-database-service.png";
}

export class HybriddbForMysql extends _Database {
  protected static override _icon = "hybriddb-for-mysql.png";
}

export class RelationalDatabaseService extends _Database {
  protected static override _icon = "relational-database-service.png";
}

// Aliases
export const DMS = DataManagementService;
export const DTS = DataTransmissionService;
export const DBS = DatabaseBackupService;
export const DRDS = DisributeRelationalDatabaseService;
export const GDS = GraphDatabaseService;
export const RDS = RelationalDatabaseService;

