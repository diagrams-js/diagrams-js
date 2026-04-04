import { _Aws } from "./index.js";

class _Devtools extends _Aws {
  protected static override _type = "devtools";
  protected static override _iconDir = "aws/devtools";
}

export class CloudDevelopmentKit extends _Devtools {
  protected static override _icon = "cloud-development-kit.png";
}

export class Cloud9Resource extends _Devtools {
  protected static override _icon = "cloud9-resource.png";
}

export class Cloud9 extends _Devtools {
  protected static override _icon = "cloud9.png";
}

export class Cloudshell extends _Devtools {
  protected static override _icon = "cloudshell.png";
}

export class Codeartifact extends _Devtools {
  protected static override _icon = "codeartifact.png";
}

export class Codebuild extends _Devtools {
  protected static override _icon = "codebuild.png";
}

export class Codecommit extends _Devtools {
  protected static override _icon = "codecommit.png";
}

export class Codedeploy extends _Devtools {
  protected static override _icon = "codedeploy.png";
}

export class Codepipeline extends _Devtools {
  protected static override _icon = "codepipeline.png";
}

export class Codestar extends _Devtools {
  protected static override _icon = "codestar.png";
}

export class CommandLineInterface extends _Devtools {
  protected static override _icon = "command-line-interface.png";
}

export class DeveloperTools extends _Devtools {
  protected static override _icon = "developer-tools.png";
}

export class ToolsAndSdks extends _Devtools {
  protected static override _icon = "tools-and-sdks.png";
}

export class XRay extends _Devtools {
  protected static override _icon = "x-ray.png";
}

// Aliases
export const CLI = CommandLineInterface;
export const DevTools = DeveloperTools;

