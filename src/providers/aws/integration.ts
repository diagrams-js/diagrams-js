import { _Aws } from "./index.js";

class _Integration extends _Aws {
  protected static override _type = "integration";
  protected static override _iconDir = "aws/integration";
}

export class ApplicationIntegration extends _Integration {
  protected static override _icon = "application-integration.png";
}

export class Appsync extends _Integration {
  protected static override _icon = "appsync.png";
}

export class ConsoleMobileApplication extends _Integration {
  protected static override _icon = "console-mobile-application.png";
}

export class EventResource extends _Integration {
  protected static override _icon = "event-resource.png";
}

export class EventbridgeCustomEventBusResource extends _Integration {
  protected static override _icon = "eventbridge-custom-event-bus-resource.png";
}

export class EventbridgeDefaultEventBusResource extends _Integration {
  protected static override _icon = "eventbridge-default-event-bus-resource.png";
}

export class EventbridgeEvent extends _Integration {
  protected static override _icon = "eventbridge-event.png";
}

export class EventbridgePipes extends _Integration {
  protected static override _icon = "eventbridge-pipes.png";
}

export class EventbridgeRule extends _Integration {
  protected static override _icon = "eventbridge-rule.png";
}

export class EventbridgeSaasPartnerEventBusResource extends _Integration {
  protected static override _icon = "eventbridge-saas-partner-event-bus-resource.png";
}

export class EventbridgeScheduler extends _Integration {
  protected static override _icon = "eventbridge-scheduler.png";
}

export class EventbridgeSchema extends _Integration {
  protected static override _icon = "eventbridge-schema.png";
}

export class Eventbridge extends _Integration {
  protected static override _icon = "eventbridge.png";
}

export class ExpressWorkflows extends _Integration {
  protected static override _icon = "express-workflows.png";
}

export class MQ extends _Integration {
  protected static override _icon = "mq.png";
}

export class SimpleNotificationServiceSnsEmailNotification extends _Integration {
  protected static override _icon = "simple-notification-service-sns-email-notification.png";
}

export class SimpleNotificationServiceSnsHttpNotification extends _Integration {
  protected static override _icon = "simple-notification-service-sns-http-notification.png";
}

export class SimpleNotificationServiceSnsTopic extends _Integration {
  protected static override _icon = "simple-notification-service-sns-topic.png";
}

export class SimpleNotificationServiceSns extends _Integration {
  protected static override _icon = "simple-notification-service-sns.png";
}

export class SimpleQueueServiceSqsMessage extends _Integration {
  protected static override _icon = "simple-queue-service-sqs-message.png";
}

export class SimpleQueueServiceSqsQueue extends _Integration {
  protected static override _icon = "simple-queue-service-sqs-queue.png";
}

export class SimpleQueueServiceSqs extends _Integration {
  protected static override _icon = "simple-queue-service-sqs.png";
}

export class StepFunctions extends _Integration {
  protected static override _icon = "step-functions.png";
}

// Aliases
export const SNS = SimpleNotificationServiceSns;
export const SQS = SimpleQueueServiceSqs;
export const SF = StepFunctions;

