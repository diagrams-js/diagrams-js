import { _Ibm } from "./index.js";

class _User extends _Ibm {
  protected static override _type = "user";
  protected static override _iconDir = "ibm/user";
}

export class Browser extends _User {
  protected static override _icon = "browser.png";
}

export class Device extends _User {
  protected static override _icon = "device.png";
}

export class IntegratedDigitalExperiences extends _User {
  protected static override _icon = "integrated-digital-experiences.png";
}

export class PhysicalEntity extends _User {
  protected static override _icon = "physical-entity.png";
}

export class Sensor extends _User {
  protected static override _icon = "sensor.png";
}

export class User extends _User {
  protected static override _icon = "user.png";
}

