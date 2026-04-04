import { _Firebase } from "./index.js";

class _Grow extends _Firebase {
  protected static override _type = "grow";
  protected static override _iconDir = "firebase/grow";
}

export class ABTesting extends _Grow {
  protected static override _icon = "ab-testing.png";
}

export class AppIndexing extends _Grow {
  protected static override _icon = "app-indexing.png";
}

export class DynamicLinks extends _Grow {
  protected static override _icon = "dynamic-links.png";
}

export class InAppMessaging extends _Grow {
  protected static override _icon = "in-app-messaging.png";
}

export class Invites extends _Grow {
  protected static override _icon = "invites.png";
}

export class Messaging extends _Grow {
  protected static override _icon = "messaging.png";
}

export class Predictions extends _Grow {
  protected static override _icon = "predictions.png";
}

export class RemoteConfig extends _Grow {
  protected static override _icon = "remote-config.png";
}

// Aliases
export const FCM = Messaging;

