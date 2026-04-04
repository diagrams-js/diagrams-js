import { _Onprem } from "./index.js";

class _Groupware extends _Onprem {
  protected static override _type = "groupware";
  protected static override _iconDir = "onprem/groupware";
}

export class Nextcloud extends _Groupware {
  protected static override _icon = "nextcloud.png";
}

