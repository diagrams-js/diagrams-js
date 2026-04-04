import { _Alibabacloud } from "./index.js";

class _Compute extends _Alibabacloud {
  protected static override _type = "compute";
  protected static override _iconDir = "alibabacloud/compute";
}

export class AutoScaling extends _Compute {
  protected static override _icon = "auto-scaling.png";
}

export class BatchCompute extends _Compute {
  protected static override _icon = "batch-compute.png";
}

export class ContainerRegistry extends _Compute {
  protected static override _icon = "container-registry.png";
}

export class ContainerService extends _Compute {
  protected static override _icon = "container-service.png";
}

export class ElasticComputeService extends _Compute {
  protected static override _icon = "elastic-compute-service.png";
}

export class ElasticContainerInstance extends _Compute {
  protected static override _icon = "elastic-container-instance.png";
}

export class ElasticHighPerformanceComputing extends _Compute {
  protected static override _icon = "elastic-high-performance-computing.png";
}

export class ElasticSearch extends _Compute {
  protected static override _icon = "elastic-search.png";
}

export class FunctionCompute extends _Compute {
  protected static override _icon = "function-compute.png";
}

export class OperationOrchestrationService extends _Compute {
  protected static override _icon = "operation-orchestration-service.png";
}

export class ResourceOrchestrationService extends _Compute {
  protected static override _icon = "resource-orchestration-service.png";
}

export class ServerLoadBalancer extends _Compute {
  protected static override _icon = "server-load-balancer.png";
}

export class ServerlessAppEngine extends _Compute {
  protected static override _icon = "serverless-app-engine.png";
}

export class SimpleApplicationServer extends _Compute {
  protected static override _icon = "simple-application-server.png";
}

export class WebAppService extends _Compute {
  protected static override _icon = "web-app-service.png";
}

// Aliases
export const ESS = AutoScaling;
export const ECS = ElasticComputeService;
export const ECI = ElasticContainerInstance;
export const EHPC = ElasticHighPerformanceComputing;
export const FC = FunctionCompute;
export const OOS = OperationOrchestrationService;
export const ROS = ResourceOrchestrationService;
export const SLB = ServerLoadBalancer;
export const SAE = ServerlessAppEngine;
export const SAS = SimpleApplicationServer;
export const WAS = WebAppService;

