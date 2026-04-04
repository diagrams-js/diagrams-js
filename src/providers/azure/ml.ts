import { _Azure } from "./index.js";

class _Ml extends _Azure {
  protected static override _type = "ml";
  protected static override _iconDir = "azure/ml";
}

export class AzureOpenAI extends _Ml {
  protected static override _icon = "azure-open-ai.png";
}

export class AzureSpeechService extends _Ml {
  protected static override _icon = "azure-speech-service.png";
}

export class BatchAI extends _Ml {
  protected static override _icon = "batch-ai.png";
}

export class BotServices extends _Ml {
  protected static override _icon = "bot-services.png";
}

export class CognitiveServices extends _Ml {
  protected static override _icon = "cognitive-services.png";
}

export class GenomicsAccounts extends _Ml {
  protected static override _icon = "genomics-accounts.png";
}

export class MachineLearningServiceWorkspaces extends _Ml {
  protected static override _icon = "machine-learning-service-workspaces.png";
}

export class MachineLearningStudioWebServicePlans extends _Ml {
  protected static override _icon = "machine-learning-studio-web-service-plans.png";
}

export class MachineLearningStudioWebServices extends _Ml {
  protected static override _icon = "machine-learning-studio-web-services.png";
}

export class MachineLearningStudioWorkspaces extends _Ml {
  protected static override _icon = "machine-learning-studio-workspaces.png";
}

