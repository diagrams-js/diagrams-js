import { _Aws } from "./index.js";

class _Mobile extends _Aws {
  protected static override _type = "mobile";
  protected static override _iconDir = "aws/mobile";
}

export class Amplify extends _Mobile {
  protected static override _icon = "amplify.png";
}

export class APIGatewayEndpoint extends _Mobile {
  protected static override _icon = "api-gateway-endpoint.png";
}

export class APIGateway extends _Mobile {
  protected static override _icon = "api-gateway.png";
}

export class Appsync extends _Mobile {
  protected static override _icon = "appsync.png";
}

export class DeviceFarm extends _Mobile {
  protected static override _icon = "device-farm.png";
}

export class Mobile extends _Mobile {
  protected static override _icon = "mobile.png";
}

export class Pinpoint extends _Mobile {
  protected static override _icon = "pinpoint.png";
}

