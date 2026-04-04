import { _Alibabacloud } from "./index.js";

class _Web extends _Alibabacloud {
  protected static override _type = "web";
  protected static override _iconDir = "alibabacloud/web";
}

export class Dns extends _Web {
  protected static override _icon = "dns.png";
}

export class Domain extends _Web {
  protected static override _icon = "domain.png";
}

