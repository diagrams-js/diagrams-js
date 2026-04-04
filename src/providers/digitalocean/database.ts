import { _Digitalocean } from "./index.js";

class _Database extends _Digitalocean {
  protected static override _type = "database";
  protected static override _iconDir = "digitalocean/database";
}

export class DbaasPrimaryStandbyMore extends _Database {
  protected static override _icon = "dbaas-primary-standby-more.png";
}

export class DbaasPrimary extends _Database {
  protected static override _icon = "dbaas-primary.png";
}

export class DbaasReadOnly extends _Database {
  protected static override _icon = "dbaas-read-only.png";
}

export class DbaasStandby extends _Database {
  protected static override _icon = "dbaas-standby.png";
}

