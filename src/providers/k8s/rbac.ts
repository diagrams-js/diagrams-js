import { _K8s } from "./index.js";

class _Rbac extends _K8s {
  protected static override _type = "rbac";
  protected static override _iconDir = "k8s/rbac";
}

export class CRole extends _Rbac {
  protected static override _icon = "c-role.png";
}

export class CRB extends _Rbac {
  protected static override _icon = "crb.png";
}

export class Group extends _Rbac {
  protected static override _icon = "group.png";
}

export class RB extends _Rbac {
  protected static override _icon = "rb.png";
}

export class Role extends _Rbac {
  protected static override _icon = "role.png";
}

export class SA extends _Rbac {
  protected static override _icon = "sa.png";
}

export class User extends _Rbac {
  protected static override _icon = "user.png";
}

// Aliases
export const ClusterRole = CRole;
export const ClusterRoleBinding = CRB;
export const RoleBinding = RB;
export const ServiceAccount = SA;

