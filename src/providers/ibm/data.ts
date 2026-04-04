import { _Ibm } from "./index.js";

class _Data extends _Ibm {
  protected static override _type = "data";
  protected static override _iconDir = "ibm/data";
}

export class Caches extends _Data {
  protected static override _icon = "caches.png";
}

export class Cloud extends _Data {
  protected static override _icon = "cloud.png";
}

export class ConversationTrainedDeployed extends _Data {
  protected static override _icon = "conversation-trained-deployed.png";
}

export class DataServices extends _Data {
  protected static override _icon = "data-services.png";
}

export class DataSources extends _Data {
  protected static override _icon = "data-sources.png";
}

export class DeviceIdentityService extends _Data {
  protected static override _icon = "device-identity-service.png";
}

export class DeviceRegistry extends _Data {
  protected static override _icon = "device-registry.png";
}

export class EnterpriseData extends _Data {
  protected static override _icon = "enterprise-data.png";
}

export class EnterpriseUserDirectory extends _Data {
  protected static override _icon = "enterprise-user-directory.png";
}

export class FileRepository extends _Data {
  protected static override _icon = "file-repository.png";
}

export class GroundTruth extends _Data {
  protected static override _icon = "ground-truth.png";
}

export class Model extends _Data {
  protected static override _icon = "model.png";
}

export class TmsDataInterface extends _Data {
  protected static override _icon = "tms-data-interface.png";
}

