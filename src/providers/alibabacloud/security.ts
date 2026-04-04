import { _Alibabacloud } from "./index.js";

class _Security extends _Alibabacloud {
  protected static override _type = "security";
  protected static override _iconDir = "alibabacloud/security";
}

export class AntiBotService extends _Security {
  protected static override _icon = "anti-bot-service.png";
}

export class AntiDdosBasic extends _Security {
  protected static override _icon = "anti-ddos-basic.png";
}

export class AntiDdosPro extends _Security {
  protected static override _icon = "anti-ddos-pro.png";
}

export class AntifraudService extends _Security {
  protected static override _icon = "antifraud-service.png";
}

export class BastionHost extends _Security {
  protected static override _icon = "bastion-host.png";
}

export class CloudFirewall extends _Security {
  protected static override _icon = "cloud-firewall.png";
}

export class CloudSecurityScanner extends _Security {
  protected static override _icon = "cloud-security-scanner.png";
}

export class ContentModeration extends _Security {
  protected static override _icon = "content-moderation.png";
}

export class CrowdsourcedSecurityTesting extends _Security {
  protected static override _icon = "crowdsourced-security-testing.png";
}

export class DataEncryptionService extends _Security {
  protected static override _icon = "data-encryption-service.png";
}

export class DbAudit extends _Security {
  protected static override _icon = "db-audit.png";
}

export class GameShield extends _Security {
  protected static override _icon = "game-shield.png";
}

export class IdVerification extends _Security {
  protected static override _icon = "id-verification.png";
}

export class ManagedSecurityService extends _Security {
  protected static override _icon = "managed-security-service.png";
}

export class SecurityCenter extends _Security {
  protected static override _icon = "security-center.png";
}

export class ServerGuard extends _Security {
  protected static override _icon = "server-guard.png";
}

export class SslCertificates extends _Security {
  protected static override _icon = "ssl-certificates.png";
}

export class WebApplicationFirewall extends _Security {
  protected static override _icon = "web-application-firewall.png";
}

// Aliases
export const ABS = AntiBotService;
export const AS = AntifraudService;
export const CFW = CloudFirewall;
export const CM = ContentModeration;
export const DES = DataEncryptionService;
export const WAF = WebApplicationFirewall;

