import { _Onprem } from "./index.js";

class _Client extends _Onprem {
  protected static override _type = "client";
  protected static override _iconDir = "onprem/client";
}

export class Client extends _Client {
  protected static override _icon = "client.png";
}

export class User extends _Client {
  protected static override _icon = "user.png";
}

export class Users extends _Client {
  protected static override _icon = "users.png";
}

