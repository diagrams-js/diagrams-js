import { _Gis } from "./index.js";

class _Desktop extends _Gis {
  protected static override _type = "desktop";
  protected static override _iconDir = "gis/desktop";
}

export class Maptunik extends _Desktop {
  protected static override _icon = "maptunik.png";
}

export class QGIS extends _Desktop {
  protected static override _icon = "qgis.png";
}

