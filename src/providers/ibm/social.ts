import { _Ibm } from "./index.js";

class _Social extends _Ibm {
  protected static override _type = "social";
  protected static override _iconDir = "ibm/social";
}

export class Communities extends _Social {
  protected static override _icon = "communities.png";
}

export class FileSync extends _Social {
  protected static override _icon = "file-sync.png";
}

export class LiveCollaboration extends _Social {
  protected static override _icon = "live-collaboration.png";
}

export class Messaging extends _Social {
  protected static override _icon = "messaging.png";
}

export class Networking extends _Social {
  protected static override _icon = "networking.png";
}

