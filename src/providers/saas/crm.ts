import { _Saas } from "./index.js";

class _Crm extends _Saas {
  protected static override _type = "crm";
  protected static override _iconDir = "saas/crm";
}

export class Intercom extends _Crm {
  protected static override _icon = "intercom.png";
}

export class Zendesk extends _Crm {
  protected static override _icon = "zendesk.png";
}

