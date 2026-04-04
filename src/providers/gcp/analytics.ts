import { _Gcp } from "./index.js";

class _Analytics extends _Gcp {
  protected static override _type = "analytics";
  protected static override _iconDir = "gcp/analytics";
}

export class Bigquery extends _Analytics {
  protected static override _icon = "bigquery.png";
}

export class Composer extends _Analytics {
  protected static override _icon = "composer.png";
}

export class DataCatalog extends _Analytics {
  protected static override _icon = "data-catalog.png";
}

export class DataFusion extends _Analytics {
  protected static override _icon = "data-fusion.png";
}

export class Dataflow extends _Analytics {
  protected static override _icon = "dataflow.png";
}

export class Datalab extends _Analytics {
  protected static override _icon = "datalab.png";
}

export class Dataprep extends _Analytics {
  protected static override _icon = "dataprep.png";
}

export class Dataproc extends _Analytics {
  protected static override _icon = "dataproc.png";
}

export class Genomics extends _Analytics {
  protected static override _icon = "genomics.png";
}

export class Looker extends _Analytics {
  protected static override _icon = "looker.png";
}

export class Pubsub extends _Analytics {
  protected static override _icon = "pubsub.png";
}

// Aliases
export const BigQuery = Bigquery;
export const PubSub = Pubsub;

