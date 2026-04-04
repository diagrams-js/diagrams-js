import { _Firebase } from "./index.js";

class _Develop extends _Firebase {
  protected static override _type = "develop";
  protected static override _iconDir = "firebase/develop";
}

export class Authentication extends _Develop {
  protected static override _icon = "authentication.png";
}

export class Firestore extends _Develop {
  protected static override _icon = "firestore.png";
}

export class Functions extends _Develop {
  protected static override _icon = "functions.png";
}

export class Hosting extends _Develop {
  protected static override _icon = "hosting.png";
}

export class MLKit extends _Develop {
  protected static override _icon = "ml-kit.png";
}

export class RealtimeDatabase extends _Develop {
  protected static override _icon = "realtime-database.png";
}

export class Storage extends _Develop {
  protected static override _icon = "storage.png";
}

