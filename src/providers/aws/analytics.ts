import { _Aws } from "./index.js";

class _Analytics extends _Aws {
  protected static override _type = "analytics";
  protected static override _iconDir = "aws/analytics";
}

export class AmazonOpensearchService extends _Analytics {
  protected static override _icon = "amazon-opensearch-service.png";
}

export class Analytics extends _Analytics {
  protected static override _icon = "analytics.png";
}

export class Athena extends _Analytics {
  protected static override _icon = "athena.png";
}

export class CloudsearchSearchDocuments extends _Analytics {
  protected static override _icon = "cloudsearch-search-documents.png";
}

export class Cloudsearch extends _Analytics {
  protected static override _icon = "cloudsearch.png";
}

export class DataLakeResource extends _Analytics {
  protected static override _icon = "data-lake-resource.png";
}

export class DataPipeline extends _Analytics {
  protected static override _icon = "data-pipeline.png";
}

export class ElasticsearchService extends _Analytics {
  protected static override _icon = "elasticsearch-service.png";
}

export class EMRCluster extends _Analytics {
  protected static override _icon = "emr-cluster.png";
}

export class EMREngineMaprM3 extends _Analytics {
  protected static override _icon = "emr-engine-mapr-m3.png";
}

export class EMREngineMaprM5 extends _Analytics {
  protected static override _icon = "emr-engine-mapr-m5.png";
}

export class EMREngineMaprM7 extends _Analytics {
  protected static override _icon = "emr-engine-mapr-m7.png";
}

export class EMREngine extends _Analytics {
  protected static override _icon = "emr-engine.png";
}

export class EMRHdfsCluster extends _Analytics {
  protected static override _icon = "emr-hdfs-cluster.png";
}

export class EMR extends _Analytics {
  protected static override _icon = "emr.png";
}

export class GlueCrawlers extends _Analytics {
  protected static override _icon = "glue-crawlers.png";
}

export class GlueDataCatalog extends _Analytics {
  protected static override _icon = "glue-data-catalog.png";
}

export class Glue extends _Analytics {
  protected static override _icon = "glue.png";
}

export class KinesisDataAnalytics extends _Analytics {
  protected static override _icon = "kinesis-data-analytics.png";
}

export class KinesisDataFirehose extends _Analytics {
  protected static override _icon = "kinesis-data-firehose.png";
}

export class KinesisDataStreams extends _Analytics {
  protected static override _icon = "kinesis-data-streams.png";
}

export class KinesisVideoStreams extends _Analytics {
  protected static override _icon = "kinesis-video-streams.png";
}

export class Kinesis extends _Analytics {
  protected static override _icon = "kinesis.png";
}

export class LakeFormation extends _Analytics {
  protected static override _icon = "lake-formation.png";
}

export class ManagedStreamingForKafka extends _Analytics {
  protected static override _icon = "managed-streaming-for-kafka.png";
}

export class Quicksight extends _Analytics {
  protected static override _icon = "quicksight.png";
}

export class RedshiftDenseComputeNode extends _Analytics {
  protected static override _icon = "redshift-dense-compute-node.png";
}

export class RedshiftDenseStorageNode extends _Analytics {
  protected static override _icon = "redshift-dense-storage-node.png";
}

export class Redshift extends _Analytics {
  protected static override _icon = "redshift.png";
}

// Aliases
export const ES = ElasticsearchService;

