import { _Aws } from "./index.js";

class _Engagement extends _Aws {
  protected static override _type = "engagement";
  protected static override _iconDir = "aws/engagement";
}

export class Connect extends _Engagement {
  protected static override _icon = "connect.png";
}

export class CustomerEngagement extends _Engagement {
  protected static override _icon = "customer-engagement.png";
}

export class Pinpoint extends _Engagement {
  protected static override _icon = "pinpoint.png";
}

export class SimpleEmailServiceSesEmail extends _Engagement {
  protected static override _icon = "simple-email-service-ses-email.png";
}

export class SimpleEmailServiceSes extends _Engagement {
  protected static override _icon = "simple-email-service-ses.png";
}

// Aliases
export const SES = SimpleEmailServiceSes;

