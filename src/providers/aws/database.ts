import { _Aws } from "./index.js";

class _Database extends _Aws {
  protected static override _type = "database";
  protected static override _iconDir = "aws/database";
}

export class AuroraInstance extends _Database {
  protected static override _icon = "aurora-instance.png";
}

export class Aurora extends _Database {
  protected static override _icon = "aurora.png";
}

export class DatabaseMigrationServiceDatabaseMigrationWorkflow extends _Database {
  protected static override _icon = "database-migration-service-database-migration-workflow.png";
}

export class DatabaseMigrationService extends _Database {
  protected static override _icon = "database-migration-service.png";
}

export class Database extends _Database {
  protected static override _icon = "database.png";
}

export class DocumentdbMongodbCompatibility extends _Database {
  protected static override _icon = "documentdb-mongodb-compatibility.png";
}

export class DynamodbAttribute extends _Database {
  protected static override _icon = "dynamodb-attribute.png";
}

export class DynamodbAttributes extends _Database {
  protected static override _icon = "dynamodb-attributes.png";
}

export class DynamodbDax extends _Database {
  protected static override _icon = "dynamodb-dax.png";
}

export class DynamodbGlobalSecondaryIndex extends _Database {
  protected static override _icon = "dynamodb-global-secondary-index.png";
}

export class DynamodbItem extends _Database {
  protected static override _icon = "dynamodb-item.png";
}

export class DynamodbItems extends _Database {
  protected static override _icon = "dynamodb-items.png";
}

export class DynamodbStreams extends _Database {
  protected static override _icon = "dynamodb-streams.png";
}

export class DynamodbTable extends _Database {
  protected static override _icon = "dynamodb-table.png";
}

export class Dynamodb extends _Database {
  protected static override _icon = "dynamodb.png";
}

export class ElasticacheCacheNode extends _Database {
  protected static override _icon = "elasticache-cache-node.png";
}

export class ElasticacheForMemcached extends _Database {
  protected static override _icon = "elasticache-for-memcached.png";
}

export class ElasticacheForRedis extends _Database {
  protected static override _icon = "elasticache-for-redis.png";
}

export class Elasticache extends _Database {
  protected static override _icon = "elasticache.png";
}

export class KeyspacesManagedApacheCassandraService extends _Database {
  protected static override _icon = "keyspaces-managed-apache-cassandra-service.png";
}

export class Neptune extends _Database {
  protected static override _icon = "neptune.png";
}

export class QuantumLedgerDatabaseQldb extends _Database {
  protected static override _icon = "quantum-ledger-database-qldb.png";
}

export class RDSInstance extends _Database {
  protected static override _icon = "rds-instance.png";
}

export class RDSMariadbInstance extends _Database {
  protected static override _icon = "rds-mariadb-instance.png";
}

export class RDSMysqlInstance extends _Database {
  protected static override _icon = "rds-mysql-instance.png";
}

export class RDSOnVmware extends _Database {
  protected static override _icon = "rds-on-vmware.png";
}

export class RDSOracleInstance extends _Database {
  protected static override _icon = "rds-oracle-instance.png";
}

export class RDSPostgresqlInstance extends _Database {
  protected static override _icon = "rds-postgresql-instance.png";
}

export class RDSSqlServerInstance extends _Database {
  protected static override _icon = "rds-sql-server-instance.png";
}

export class RDS extends _Database {
  protected static override _icon = "rds.png";
}

export class RedshiftDenseComputeNode extends _Database {
  protected static override _icon = "redshift-dense-compute-node.png";
}

export class RedshiftDenseStorageNode extends _Database {
  protected static override _icon = "redshift-dense-storage-node.png";
}

export class Redshift extends _Database {
  protected static override _icon = "redshift.png";
}

export class Timestream extends _Database {
  protected static override _icon = "timestream.png";
}

// Aliases
export const DMS = DatabaseMigrationService;
export const DocumentDB = DocumentdbMongodbCompatibility;
export const DAX = DynamodbDax;
export const DynamodbGSI = DynamodbGlobalSecondaryIndex;
export const DB = Database;
export const DDB = Dynamodb;
export const ElastiCache = Elasticache;
export const QLDB = QuantumLedgerDatabaseQldb;

