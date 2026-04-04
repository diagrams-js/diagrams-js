import { _Gis } from "./index.js";

class _Geocoding extends _Gis {
  protected static override _type = "geocoding";
  protected static override _iconDir = "gis/geocoding";
}

export class Addok extends _Geocoding {
  protected static override _icon = "addok.png";
}

export class Gisgraphy extends _Geocoding {
  protected static override _icon = "gisgraphy.png";
}

export class Nominatim extends _Geocoding {
  protected static override _icon = "nominatim.png";
}

export class Pelias extends _Geocoding {
  protected static override _icon = "pelias.png";
}

