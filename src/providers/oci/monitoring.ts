import { _Oci } from "./index.js";

class _Monitoring extends _Oci {
  protected static override _type = "monitoring";
  protected static override _iconDir = "oci/monitoring";
}

export class AlarmWhite extends _Monitoring {
  protected static override _icon = "alarm-white.png";
}

export class Alarm extends _Monitoring {
  protected static override _icon = "alarm.png";
}

export class EmailWhite extends _Monitoring {
  protected static override _icon = "email-white.png";
}

export class Email extends _Monitoring {
  protected static override _icon = "email.png";
}

export class EventsWhite extends _Monitoring {
  protected static override _icon = "events-white.png";
}

export class Events extends _Monitoring {
  protected static override _icon = "events.png";
}

export class HealthCheckWhite extends _Monitoring {
  protected static override _icon = "health-check-white.png";
}

export class HealthCheck extends _Monitoring {
  protected static override _icon = "health-check.png";
}

export class NotificationsWhite extends _Monitoring {
  protected static override _icon = "notifications-white.png";
}

export class Notifications extends _Monitoring {
  protected static override _icon = "notifications.png";
}

export class QueueWhite extends _Monitoring {
  protected static override _icon = "queue-white.png";
}

export class Queue extends _Monitoring {
  protected static override _icon = "queue.png";
}

export class SearchWhite extends _Monitoring {
  protected static override _icon = "search-white.png";
}

export class Search extends _Monitoring {
  protected static override _icon = "search.png";
}

export class TelemetryWhite extends _Monitoring {
  protected static override _icon = "telemetry-white.png";
}

export class Telemetry extends _Monitoring {
  protected static override _icon = "telemetry.png";
}

export class WorkflowWhite extends _Monitoring {
  protected static override _icon = "workflow-white.png";
}

export class Workflow extends _Monitoring {
  protected static override _icon = "workflow.png";
}

