import { _Gcp } from "./index.js";

class _Management extends _Gcp {
  protected static override _type = "management";
  protected static override _iconDir = "gcp/management";
}

export class Billing extends _Management {
  protected static override _icon = "billing.png";
}

export class Project extends _Management {
  protected static override _icon = "project.png";
}

export class Quotas extends _Management {
  protected static override _icon = "quotas.png";
}

export class Support extends _Management {
  protected static override _icon = "support.png";
}

