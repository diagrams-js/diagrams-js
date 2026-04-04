import { _Alibabacloud } from "./index.js";

class _Iot extends _Alibabacloud {
  protected static override _type = "iot";
  protected static override _iconDir = "alibabacloud/iot";
}

export class IotInternetDeviceId extends _Iot {
  protected static override _icon = "iot-internet-device-id.png";
}

export class IotLinkWan extends _Iot {
  protected static override _icon = "iot-link-wan.png";
}

export class IotMobileConnectionPackage extends _Iot {
  protected static override _icon = "iot-mobile-connection-package.png";
}

export class IotPlatform extends _Iot {
  protected static override _icon = "iot-platform.png";
}

