import { _Alibabacloud } from "./index.js";

class _Application extends _Alibabacloud {
  protected static override _type = "application";
  protected static override _iconDir = "alibabacloud/application";
}

export class ApiGateway extends _Application {
  protected static override _icon = "api-gateway.png";
}

export class BeeBot extends _Application {
  protected static override _icon = "bee-bot.png";
}

export class BlockchainAsAService extends _Application {
  protected static override _icon = "blockchain-as-a-service.png";
}

export class CloudCallCenter extends _Application {
  protected static override _icon = "cloud-call-center.png";
}

export class CodePipeline extends _Application {
  protected static override _icon = "code-pipeline.png";
}

export class DirectMail extends _Application {
  protected static override _icon = "direct-mail.png";
}

export class LogService extends _Application {
  protected static override _icon = "log-service.png";
}

export class MessageNotificationService extends _Application {
  protected static override _icon = "message-notification-service.png";
}

export class NodeJsPerformancePlatform extends _Application {
  protected static override _icon = "node-js-performance-platform.png";
}

export class OpenSearch extends _Application {
  protected static override _icon = "open-search.png";
}

export class PerformanceTestingService extends _Application {
  protected static override _icon = "performance-testing-service.png";
}

export class RdCloud extends _Application {
  protected static override _icon = "rd-cloud.png";
}

export class SmartConversationAnalysis extends _Application {
  protected static override _icon = "smart-conversation-analysis.png";
}

export class Yida extends _Application {
  protected static override _icon = "yida.png";
}

// Aliases
export const SLS = LogService;
export const MNS = MessageNotificationService;
export const PTS = PerformanceTestingService;
export const SCA = SmartConversationAnalysis;

