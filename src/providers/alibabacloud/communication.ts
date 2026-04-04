import { _Alibabacloud } from "./index.js";

class _Communication extends _Alibabacloud {
  protected static override _type = "communication";
  protected static override _iconDir = "alibabacloud/communication";
}

export class DirectMail extends _Communication {
  protected static override _icon = "direct-mail.png";
}

export class MobilePush extends _Communication {
  protected static override _icon = "mobile-push.png";
}

