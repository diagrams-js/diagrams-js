import { _Openstack } from "./index.js";

class _User extends _Openstack {
  protected static override _type = "user";
  protected static override _iconDir = "openstack/user";
}

export class Openstackclient extends _User {
  protected static override _icon = "openstackclient.png";
}

// Aliases
export const OpenStackClient = Openstackclient;

