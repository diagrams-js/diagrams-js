import { _Onprem } from "./index.js";

class _Analytics extends _Onprem {
  protected static override _type = "analytics";
  protected static override _iconDir = "onprem/analytics";
}

export class Beam extends _Analytics {
  protected static override _icon = "beam.png";
}

export class Databricks extends _Analytics {
  protected static override _icon = "databricks.png";
}

export class Dbt extends _Analytics {
  protected static override _icon = "dbt.png";
}

export class Dremio extends _Analytics {
  protected static override _icon = "dremio.png";
}

export class Flink extends _Analytics {
  protected static override _icon = "flink.png";
}

export class Hadoop extends _Analytics {
  protected static override _icon = "hadoop.png";
}

export class Hive extends _Analytics {
  protected static override _icon = "hive.png";
}

export class Metabase extends _Analytics {
  protected static override _icon = "metabase.png";
}

export class Norikra extends _Analytics {
  protected static override _icon = "norikra.png";
}

export class Powerbi extends _Analytics {
  protected static override _icon = "powerbi.png";
}

export class Presto extends _Analytics {
  protected static override _icon = "presto.png";
}

export class Singer extends _Analytics {
  protected static override _icon = "singer.png";
}

export class Spark extends _Analytics {
  protected static override _icon = "spark.png";
}

export class Storm extends _Analytics {
  protected static override _icon = "storm.png";
}

export class Superset extends _Analytics {
  protected static override _icon = "superset.png";
}

export class Tableau extends _Analytics {
  protected static override _icon = "tableau.png";
}

export class Trino extends _Analytics {
  protected static override _icon = "trino.png";
}

// Aliases
export const PowerBI = Powerbi;

