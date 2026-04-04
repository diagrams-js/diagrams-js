import { _Aws } from "./index.js";

class _Media extends _Aws {
  protected static override _type = "media";
  protected static override _iconDir = "aws/media";
}

export class ElasticTranscoder extends _Media {
  protected static override _icon = "elastic-transcoder.png";
}

export class ElementalConductor extends _Media {
  protected static override _icon = "elemental-conductor.png";
}

export class ElementalDelta extends _Media {
  protected static override _icon = "elemental-delta.png";
}

export class ElementalLive extends _Media {
  protected static override _icon = "elemental-live.png";
}

export class ElementalMediaconnect extends _Media {
  protected static override _icon = "elemental-mediaconnect.png";
}

export class ElementalMediaconvert extends _Media {
  protected static override _icon = "elemental-mediaconvert.png";
}

export class ElementalMedialive extends _Media {
  protected static override _icon = "elemental-medialive.png";
}

export class ElementalMediapackage extends _Media {
  protected static override _icon = "elemental-mediapackage.png";
}

export class ElementalMediastore extends _Media {
  protected static override _icon = "elemental-mediastore.png";
}

export class ElementalMediatailor extends _Media {
  protected static override _icon = "elemental-mediatailor.png";
}

export class ElementalServer extends _Media {
  protected static override _icon = "elemental-server.png";
}

export class KinesisVideoStreams extends _Media {
  protected static override _icon = "kinesis-video-streams.png";
}

export class MediaServices extends _Media {
  protected static override _icon = "media-services.png";
}

