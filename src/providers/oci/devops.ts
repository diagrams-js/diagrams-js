import { _Oci } from "./index.js";

class _Devops extends _Oci {
  protected static override _type = "devops";
  protected static override _iconDir = "oci/devops";
}

export class APIGatewayWhite extends _Devops {
  protected static override _icon = "api-gateway-white.png";
}

export class APIGateway extends _Devops {
  protected static override _icon = "api-gateway.png";
}

export class APIServiceWhite extends _Devops {
  protected static override _icon = "api-service-white.png";
}

export class APIService extends _Devops {
  protected static override _icon = "api-service.png";
}

export class ResourceMgmtWhite extends _Devops {
  protected static override _icon = "resource-mgmt-white.png";
}

export class ResourceMgmt extends _Devops {
  protected static override _icon = "resource-mgmt.png";
}

