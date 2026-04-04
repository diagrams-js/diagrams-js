import { _Elastic } from "./index.js";

class _Elasticsearch extends _Elastic {
  protected static override _type = "elasticsearch";
  protected static override _iconDir = "elastic/elasticsearch";
}

export class Alerting extends _Elasticsearch {
  protected static override _icon = "alerting.png";
}

export class Beats extends _Elasticsearch {
  protected static override _icon = "beats.png";
}

export class Elasticsearch extends _Elasticsearch {
  protected static override _icon = "elasticsearch.png";
}

export class Kibana extends _Elasticsearch {
  protected static override _icon = "kibana.png";
}

export class LogstashPipeline extends _Elasticsearch {
  protected static override _icon = "logstash-pipeline.png";
}

export class Logstash extends _Elasticsearch {
  protected static override _icon = "logstash.png";
}

export class MachineLearning extends _Elasticsearch {
  protected static override _icon = "machine-learning.png";
}

export class MapServices extends _Elasticsearch {
  protected static override _icon = "map-services.png";
}

export class Maps extends _Elasticsearch {
  protected static override _icon = "maps.png";
}

export class Monitoring extends _Elasticsearch {
  protected static override _icon = "monitoring.png";
}

export class SearchableSnapshots extends _Elasticsearch {
  protected static override _icon = "searchable-snapshots.png";
}

export class SecuritySettings extends _Elasticsearch {
  protected static override _icon = "security-settings.png";
}

export class SQL extends _Elasticsearch {
  protected static override _icon = "sql.png";
}

export class Stack extends _Elasticsearch {
  protected static override _icon = "stack.png";
}

// Aliases
export const ElasticSearch = Elasticsearch;
export const LogStash = Logstash;
export const ML = MachineLearning;

