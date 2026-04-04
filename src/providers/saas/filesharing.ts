import { _Saas } from "./index.js";

class _Filesharing extends _Saas {
  protected static override _type = "filesharing";
  protected static override _iconDir = "saas/filesharing";
}

export class Nextcloud extends _Filesharing {
  protected static override _icon = "nextcloud.png";
}

