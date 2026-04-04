import { _Aws } from "./index.js";

class _Business extends _Aws {
  protected static override _type = "business";
  protected static override _iconDir = "aws/business";
}

export class AlexaForBusiness extends _Business {
  protected static override _icon = "alexa-for-business.png";
}

export class BusinessApplications extends _Business {
  protected static override _icon = "business-applications.png";
}

export class Chime extends _Business {
  protected static override _icon = "chime.png";
}

export class Workmail extends _Business {
  protected static override _icon = "workmail.png";
}

// Aliases
export const A4B = AlexaForBusiness;

