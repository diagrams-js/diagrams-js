import { _Alibabacloud } from "./index.js";

class _Analytics extends _Alibabacloud {
  protected static override _type = "analytics";
  protected static override _iconDir = "alibabacloud/analytics";
}

export class AnalyticDb extends _Analytics {
  protected static override _icon = "analytic-db.png";
}

export class ClickHouse extends _Analytics {
  protected static override _icon = "click-house.png";
}

export class DataLakeAnalytics extends _Analytics {
  protected static override _icon = "data-lake-analytics.png";
}

export class ElaticMapReduce extends _Analytics {
  protected static override _icon = "elatic-map-reduce.png";
}

export class OpenSearch extends _Analytics {
  protected static override _icon = "open-search.png";
}

