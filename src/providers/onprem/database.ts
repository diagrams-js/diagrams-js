import { _Onprem } from "./index.js";

class _Database extends _Onprem {
  protected static override _type = "database";
  protected static override _iconDir = "onprem/database";
}

export class Cassandra extends _Database {
  protected static override _icon = "cassandra.png";
}

export class Clickhouse extends _Database {
  protected static override _icon = "clickhouse.png";
}

export class Cockroachdb extends _Database {
  protected static override _icon = "cockroachdb.png";
}

export class Couchbase extends _Database {
  protected static override _icon = "couchbase.png";
}

export class Couchdb extends _Database {
  protected static override _icon = "couchdb.png";
}

export class Dgraph extends _Database {
  protected static override _icon = "dgraph.png";
}

export class Druid extends _Database {
  protected static override _icon = "druid.png";
}

export class Duckdb extends _Database {
  protected static override _icon = "duckdb.png";
}

export class Hbase extends _Database {
  protected static override _icon = "hbase.png";
}

export class Influxdb extends _Database {
  protected static override _icon = "influxdb.png";
}

export class Janusgraph extends _Database {
  protected static override _icon = "janusgraph.png";
}

export class Mariadb extends _Database {
  protected static override _icon = "mariadb.png";
}

export class Mongodb extends _Database {
  protected static override _icon = "mongodb.png";
}

export class Mssql extends _Database {
  protected static override _icon = "mssql.png";
}

export class Mysql extends _Database {
  protected static override _icon = "mysql.png";
}

export class Neo4j extends _Database {
  protected static override _icon = "neo4j.png";
}

export class Oracle extends _Database {
  protected static override _icon = "oracle.png";
}

export class Postgresql extends _Database {
  protected static override _icon = "postgresql.png";
}

export class Qdrant extends _Database {
  protected static override _icon = "qdrant.png";
}

export class Scylla extends _Database {
  protected static override _icon = "scylla.png";
}

// Aliases
export const ClickHouse = Clickhouse;
export const CockroachDB = Cockroachdb;
export const CouchDB = Couchdb;
export const HBase = Hbase;
export const InfluxDB = Influxdb;
export const JanusGraph = Janusgraph;
export const MariaDB = Mariadb;
export const MongoDB = Mongodb;
export const MSSQL = Mssql;
export const MySQL = Mysql;
export const PostgreSQL = Postgresql;

