import { _Onprem } from "./index.js";

class _Certificates extends _Onprem {
  protected static override _type = "certificates";
  protected static override _iconDir = "onprem/certificates";
}

export class CertManager extends _Certificates {
  protected static override _icon = "cert-manager.png";
}

export class LetsEncrypt extends _Certificates {
  protected static override _icon = "lets-encrypt.png";
}

