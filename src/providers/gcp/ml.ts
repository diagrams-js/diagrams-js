import { _Gcp } from "./index.js";

class _Ml extends _Gcp {
  protected static override _type = "ml";
  protected static override _iconDir = "gcp/ml";
}

export class AdvancedSolutionsLab extends _Ml {
  protected static override _icon = "advanced-solutions-lab.png";
}

export class AIHub extends _Ml {
  protected static override _icon = "ai-hub.png";
}

export class AIPlatformDataLabelingService extends _Ml {
  protected static override _icon = "ai-platform-data-labeling-service.png";
}

export class AIPlatform extends _Ml {
  protected static override _icon = "ai-platform.png";
}

export class AutomlNaturalLanguage extends _Ml {
  protected static override _icon = "automl-natural-language.png";
}

export class AutomlTables extends _Ml {
  protected static override _icon = "automl-tables.png";
}

export class AutomlTranslation extends _Ml {
  protected static override _icon = "automl-translation.png";
}

export class AutomlVideoIntelligence extends _Ml {
  protected static override _icon = "automl-video-intelligence.png";
}

export class AutomlVision extends _Ml {
  protected static override _icon = "automl-vision.png";
}

export class Automl extends _Ml {
  protected static override _icon = "automl.png";
}

export class DialogFlowEnterpriseEdition extends _Ml {
  protected static override _icon = "dialog-flow-enterprise-edition.png";
}

export class InferenceAPI extends _Ml {
  protected static override _icon = "inference-api.png";
}

export class JobsAPI extends _Ml {
  protected static override _icon = "jobs-api.png";
}

export class NaturalLanguageAPI extends _Ml {
  protected static override _icon = "natural-language-api.png";
}

export class RecommendationsAI extends _Ml {
  protected static override _icon = "recommendations-ai.png";
}

export class SpeechToText extends _Ml {
  protected static override _icon = "speech-to-text.png";
}

export class TextToSpeech extends _Ml {
  protected static override _icon = "text-to-speech.png";
}

export class TPU extends _Ml {
  protected static override _icon = "tpu.png";
}

export class TranslationAPI extends _Ml {
  protected static override _icon = "translation-api.png";
}

export class VertexAI extends _Ml {
  protected static override _icon = "vertex-ai.png";
}

export class VideoIntelligenceAPI extends _Ml {
  protected static override _icon = "video-intelligence-api.png";
}

export class VisionAPI extends _Ml {
  protected static override _icon = "vision-api.png";
}

// Aliases
export const AutoML = Automl;
export const NLAPI = NaturalLanguageAPI;
export const STT = SpeechToText;
export const TTS = TextToSpeech;

