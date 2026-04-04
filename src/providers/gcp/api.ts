import { _Gcp } from "./index.js";

class _Api extends _Gcp {
  protected static override _type = "api";
  protected static override _iconDir = "gcp/api";
}

export class APIGateway extends _Api {
  protected static override _icon = "api-gateway.png";
}

export class Apigee extends _Api {
  protected static override _icon = "apigee.png";
}

export class Endpoints extends _Api {
  protected static override _icon = "endpoints.png";
}

