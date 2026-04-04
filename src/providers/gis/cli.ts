import { _Gis } from "./index.js";

class _Cli extends _Gis {
  protected static override _type = "cli";
  protected static override _iconDir = "gis/cli";
}

export class Gdal extends _Cli {
  protected static override _icon = "gdal.png";
}

export class Imposm extends _Cli {
  protected static override _icon = "imposm.png";
}

export class Lastools extends _Cli {
  protected static override _icon = "lastools.png";
}

export class Mapnik extends _Cli {
  protected static override _icon = "mapnik.png";
}

export class Mdal extends _Cli {
  protected static override _icon = "mdal.png";
}

export class Pdal extends _Cli {
  protected static override _icon = "pdal.png";
}

