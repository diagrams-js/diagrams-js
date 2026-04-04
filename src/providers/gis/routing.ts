import { _Gis } from "./index.js";

class _Routing extends _Gis {
  protected static override _type = "routing";
  protected static override _iconDir = "gis/routing";
}

export class Graphhopper extends _Routing {
  protected static override _icon = "graphhopper.png";
}

export class Osrm extends _Routing {
  protected static override _icon = "osrm.png";
}

export class Pgrouting extends _Routing {
  protected static override _icon = "pgrouting.png";
}

export class Valhalla extends _Routing {
  protected static override _icon = "valhalla.png";
}

