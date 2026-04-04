import { _Saas } from "./index.js";

class _Communication extends _Saas {
  protected static override _type = "communication";
  protected static override _iconDir = "saas/communication";
}

export class Twilio extends _Communication {
  protected static override _icon = "twilio.png";
}

