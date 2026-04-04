import { _Aws } from "./index.js";

class _Robotics extends _Aws {
  protected static override _type = "robotics";
  protected static override _iconDir = "aws/robotics";
}

export class RobomakerCloudExtensionRos extends _Robotics {
  protected static override _icon = "robomaker-cloud-extension-ros.png";
}

export class RobomakerDevelopmentEnvironment extends _Robotics {
  protected static override _icon = "robomaker-development-environment.png";
}

export class RobomakerFleetManagement extends _Robotics {
  protected static override _icon = "robomaker-fleet-management.png";
}

export class RobomakerSimulator extends _Robotics {
  protected static override _icon = "robomaker-simulator.png";
}

export class Robomaker extends _Robotics {
  protected static override _icon = "robomaker.png";
}

export class Robotics extends _Robotics {
  protected static override _icon = "robotics.png";
}

