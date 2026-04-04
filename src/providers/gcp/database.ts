import { _Gcp } from "./index.js";

class _Database extends _Gcp {
  protected static override _type = "database";
  protected static override _iconDir = "gcp/database";
}

export class Bigtable extends _Database {
  protected static override _icon = "bigtable.png";
}

export class Datastore extends _Database {
  protected static override _icon = "datastore.png";
}

export class Firestore extends _Database {
  protected static override _icon = "firestore.png";
}

export class Memorystore extends _Database {
  protected static override _icon = "memorystore.png";
}

export class Spanner extends _Database {
  protected static override _icon = "spanner.png";
}

export class SQL extends _Database {
  protected static override _icon = "sql.png";
}

// Aliases
export const BigTable = Bigtable;

