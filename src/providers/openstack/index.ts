import { Node } from "../../core/Node.js";

export class _Openstack extends Node {
  protected static override _provider = "openstack";
  protected static override _iconDir = "openstack";
}

export class Openstack extends _Openstack {
  protected static override _icon = "openstack.png";
}
