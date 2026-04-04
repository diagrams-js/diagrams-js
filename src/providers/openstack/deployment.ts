import { _Openstack } from "./index.js";

class _Deployment extends _Openstack {
  protected static override _type = "deployment";
  protected static override _iconDir = "openstack/deployment";
}

export class Ansible extends _Deployment {
  protected static override _icon = "ansible.png";
}

export class Charms extends _Deployment {
  protected static override _icon = "charms.png";
}

export class Chef extends _Deployment {
  protected static override _icon = "chef.png";
}

export class Helm extends _Deployment {
  protected static override _icon = "helm.png";
}

export class Kolla extends _Deployment {
  protected static override _icon = "kolla.png";
}

export class Tripleo extends _Deployment {
  protected static override _icon = "tripleo.png";
}

// Aliases
export const KollaAnsible = Kolla;
export const TripleO = Tripleo;

