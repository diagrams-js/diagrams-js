import { _Gis } from "./index.js";

class _Python extends _Gis {
  protected static override _type = "python";
  protected static override _iconDir = "gis/python";
}

export class Geopandas extends _Python {
  protected static override _icon = "geopandas.png";
}

export class Pysal extends _Python {
  protected static override _icon = "pysal.png";
}

