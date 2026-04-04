import { _Saas } from "./index.js";

class _Media extends _Saas {
  protected static override _type = "media";
  protected static override _iconDir = "saas/media";
}

export class Cloudinary extends _Media {
  protected static override _icon = "cloudinary.png";
}

