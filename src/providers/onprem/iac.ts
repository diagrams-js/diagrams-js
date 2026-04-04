import { _Onprem } from "./index.js";

class _Iac extends _Onprem {
  protected static override _type = "iac";
  protected static override _iconDir = "onprem/iac";
}

export class Ansible extends _Iac {
  protected static override _icon = "ansible.png";
}

export class Atlantis extends _Iac {
  protected static override _icon = "atlantis.png";
}

export class Awx extends _Iac {
  protected static override _icon = "awx.png";
}

export class Pulumi extends _Iac {
  protected static override _icon = "pulumi.png";
}

export class Puppet extends _Iac {
  protected static override _icon = "puppet.png";
}

export class Terraform extends _Iac {
  protected static override _icon = "terraform.png";
}

