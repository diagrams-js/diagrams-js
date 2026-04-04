import { _Gis } from "./index.js";

class _Organization extends _Gis {
  protected static override _type = "organization";
  protected static override _iconDir = "gis/organization";
}

export class Osgeo extends _Organization {
  protected static override _icon = "osgeo.png";
}

