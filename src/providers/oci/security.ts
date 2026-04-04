import { _Oci } from "./index.js";

class _Security extends _Oci {
  protected static override _type = "security";
  protected static override _iconDir = "oci/security";
}

export class CloudGuardWhite extends _Security {
  protected static override _icon = "cloud-guard-white.png";
}

export class CloudGuard extends _Security {
  protected static override _icon = "cloud-guard.png";
}

export class DDOSWhite extends _Security {
  protected static override _icon = "ddos-white.png";
}

export class DDOS extends _Security {
  protected static override _icon = "ddos.png";
}

export class EncryptionWhite extends _Security {
  protected static override _icon = "encryption-white.png";
}

export class Encryption extends _Security {
  protected static override _icon = "encryption.png";
}

export class IDAccessWhite extends _Security {
  protected static override _icon = "id-access-white.png";
}

export class IDAccess extends _Security {
  protected static override _icon = "id-access.png";
}

export class KeyManagementWhite extends _Security {
  protected static override _icon = "key-management-white.png";
}

export class KeyManagement extends _Security {
  protected static override _icon = "key-management.png";
}

export class MaxSecurityZoneWhite extends _Security {
  protected static override _icon = "max-security-zone-white.png";
}

export class MaxSecurityZone extends _Security {
  protected static override _icon = "max-security-zone.png";
}

export class VaultWhite extends _Security {
  protected static override _icon = "vault-white.png";
}

export class Vault extends _Security {
  protected static override _icon = "vault.png";
}

export class WAFWhite extends _Security {
  protected static override _icon = "waf-white.png";
}

export class WAF extends _Security {
  protected static override _icon = "waf.png";
}

