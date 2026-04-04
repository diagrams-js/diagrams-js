import { _Aws } from "./index.js";

class _General extends _Aws {
  protected static override _type = "general";
  protected static override _iconDir = "aws/general";
}

export class Client extends _General {
  protected static override _icon = "client.png";
}

export class Disk extends _General {
  protected static override _icon = "disk.png";
}

export class Forums extends _General {
  protected static override _icon = "forums.png";
}

export class General extends _General {
  protected static override _icon = "general.png";
}

export class GenericDatabase extends _General {
  protected static override _icon = "generic-database.png";
}

export class GenericFirewall extends _General {
  protected static override _icon = "generic-firewall.png";
}

export class GenericOfficeBuilding extends _General {
  protected static override _icon = "generic-office-building.png";
}

export class GenericSamlToken extends _General {
  protected static override _icon = "generic-saml-token.png";
}

export class GenericSDK extends _General {
  protected static override _icon = "generic-sdk.png";
}

export class InternetAlt1 extends _General {
  protected static override _icon = "internet-alt1.png";
}

export class InternetAlt2 extends _General {
  protected static override _icon = "internet-alt2.png";
}

export class InternetGateway extends _General {
  protected static override _icon = "internet-gateway.png";
}

export class Marketplace extends _General {
  protected static override _icon = "marketplace.png";
}

export class MobileClient extends _General {
  protected static override _icon = "mobile-client.png";
}

export class Multimedia extends _General {
  protected static override _icon = "multimedia.png";
}

export class OfficeBuilding extends _General {
  protected static override _icon = "office-building.png";
}

export class SamlToken extends _General {
  protected static override _icon = "saml-token.png";
}

export class SDK extends _General {
  protected static override _icon = "sdk.png";
}

export class SslPadlock extends _General {
  protected static override _icon = "ssl-padlock.png";
}

export class TapeStorage extends _General {
  protected static override _icon = "tape-storage.png";
}

export class Toolkit extends _General {
  protected static override _icon = "toolkit.png";
}

export class TraditionalServer extends _General {
  protected static override _icon = "traditional-server.png";
}

export class User extends _General {
  protected static override _icon = "user.png";
}

export class Users extends _General {
  protected static override _icon = "users.png";
}

// Aliases
export const OfficeBuilding = GenericOfficeBuilding;

