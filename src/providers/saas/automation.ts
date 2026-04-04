import { _Saas } from "./index.js";

class _Automation extends _Saas {
  protected static override _type = "automation";
  protected static override _iconDir = "saas/automation";
}

export class N8n extends _Automation {
  protected static override _icon = "n8n.png";
}

