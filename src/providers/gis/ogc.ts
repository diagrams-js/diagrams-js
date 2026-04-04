import { _Gis } from "./index.js";

class _Ogc extends _Gis {
  protected static override _type = "ogc";
  protected static override _iconDir = "gis/ogc";
}

export class OGC extends _Ogc {
  protected static override _icon = "ogc.png";
}

export class WFS extends _Ogc {
  protected static override _icon = "wfs.png";
}

export class WMS extends _Ogc {
  protected static override _icon = "wms.png";
}

