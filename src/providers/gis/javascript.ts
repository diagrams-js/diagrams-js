import { _Gis } from "./index.js";

class _Javascript extends _Gis {
  protected static override _type = "javascript";
  protected static override _iconDir = "gis/javascript";
}

export class Cesium extends _Javascript {
  protected static override _icon = "cesium.png";
}

export class Geostyler extends _Javascript {
  protected static override _icon = "geostyler.png";
}

export class Keplerjs extends _Javascript {
  protected static override _icon = "keplerjs.png";
}

export class Leaflet extends _Javascript {
  protected static override _icon = "leaflet.png";
}

export class Maplibre extends _Javascript {
  protected static override _icon = "maplibre.png";
}

export class OlExt extends _Javascript {
  protected static override _icon = "ol-ext.png";
}

export class Openlayers extends _Javascript {
  protected static override _icon = "openlayers.png";
}

export class Turfjs extends _Javascript {
  protected static override _icon = "turfjs.png";
}

