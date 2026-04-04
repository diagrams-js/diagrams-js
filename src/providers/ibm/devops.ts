import { _Ibm } from "./index.js";

class _Devops extends _Ibm {
  protected static override _type = "devops";
  protected static override _iconDir = "ibm/devops";
}

export class ArtifactManagement extends _Devops {
  protected static override _icon = "artifact-management.png";
}

export class BuildTest extends _Devops {
  protected static override _icon = "build-test.png";
}

export class CodeEditor extends _Devops {
  protected static override _icon = "code-editor.png";
}

export class CollaborativeDevelopment extends _Devops {
  protected static override _icon = "collaborative-development.png";
}

export class ConfigurationManagement extends _Devops {
  protected static override _icon = "configuration-management.png";
}

export class ContinuousDeploy extends _Devops {
  protected static override _icon = "continuous-deploy.png";
}

export class ContinuousTesting extends _Devops {
  protected static override _icon = "continuous-testing.png";
}

export class Devops extends _Devops {
  protected static override _icon = "devops.png";
}

export class Provision extends _Devops {
  protected static override _icon = "provision.png";
}

export class ReleaseManagement extends _Devops {
  protected static override _icon = "release-management.png";
}

