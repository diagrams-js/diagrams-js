import { _Aws } from "./index.js";

class _Compute extends _Aws {
  protected static override _type = "compute";
  protected static override _iconDir = "aws/compute";
}

export class AppRunner extends _Compute {
  protected static override _icon = "app-runner.png";
}

export class ApplicationAutoScaling extends _Compute {
  protected static override _icon = "application-auto-scaling.png";
}

export class Batch extends _Compute {
  protected static override _icon = "batch.png";
}

export class ComputeOptimizer extends _Compute {
  protected static override _icon = "compute-optimizer.png";
}

export class Compute extends _Compute {
  protected static override _icon = "compute.png";
}

export class EC2Ami extends _Compute {
  protected static override _icon = "ec2-ami.png";
}

export class EC2AutoScaling extends _Compute {
  protected static override _icon = "ec2-auto-scaling.png";
}

export class EC2ContainerRegistryImage extends _Compute {
  protected static override _icon = "ec2-container-registry-image.png";
}

export class EC2ContainerRegistryRegistry extends _Compute {
  protected static override _icon = "ec2-container-registry-registry.png";
}

export class EC2ContainerRegistry extends _Compute {
  protected static override _icon = "ec2-container-registry.png";
}

export class EC2ElasticIpAddress extends _Compute {
  protected static override _icon = "ec2-elastic-ip-address.png";
}

export class EC2ImageBuilder extends _Compute {
  protected static override _icon = "ec2-image-builder.png";
}

export class EC2Instance extends _Compute {
  protected static override _icon = "ec2-instance.png";
}

export class EC2Instances extends _Compute {
  protected static override _icon = "ec2-instances.png";
}

export class EC2Rescue extends _Compute {
  protected static override _icon = "ec2-rescue.png";
}

export class EC2SpotInstance extends _Compute {
  protected static override _icon = "ec2-spot-instance.png";
}

export class EC2 extends _Compute {
  protected static override _icon = "ec2.png";
}

export class ElasticBeanstalkApplication extends _Compute {
  protected static override _icon = "elastic-beanstalk-application.png";
}

export class ElasticBeanstalkDeployment extends _Compute {
  protected static override _icon = "elastic-beanstalk-deployment.png";
}

export class ElasticBeanstalk extends _Compute {
  protected static override _icon = "elastic-beanstalk.png";
}

export class ElasticContainerServiceContainer extends _Compute {
  protected static override _icon = "elastic-container-service-container.png";
}

export class ElasticContainerServiceServiceConnect extends _Compute {
  protected static override _icon = "elastic-container-service-service-connect.png";
}

export class ElasticContainerServiceService extends _Compute {
  protected static override _icon = "elastic-container-service-service.png";
}

export class ElasticContainerServiceTask extends _Compute {
  protected static override _icon = "elastic-container-service-task.png";
}

export class ElasticContainerService extends _Compute {
  protected static override _icon = "elastic-container-service.png";
}

export class ElasticKubernetesService extends _Compute {
  protected static override _icon = "elastic-kubernetes-service.png";
}

export class Fargate extends _Compute {
  protected static override _icon = "fargate.png";
}

export class LambdaFunction extends _Compute {
  protected static override _icon = "lambda-function.png";
}

export class Lambda extends _Compute {
  protected static override _icon = "lambda.png";
}

export class Lightsail extends _Compute {
  protected static override _icon = "lightsail.png";
}

export class LocalZones extends _Compute {
  protected static override _icon = "local-zones.png";
}

export class Outposts extends _Compute {
  protected static override _icon = "outposts.png";
}

export class ServerlessApplicationRepository extends _Compute {
  protected static override _icon = "serverless-application-repository.png";
}

export class ThinkboxDeadline extends _Compute {
  protected static override _icon = "thinkbox-deadline.png";
}

export class ThinkboxDraft extends _Compute {
  protected static override _icon = "thinkbox-draft.png";
}

export class ThinkboxFrost extends _Compute {
  protected static override _icon = "thinkbox-frost.png";
}

export class ThinkboxKrakatoa extends _Compute {
  protected static override _icon = "thinkbox-krakatoa.png";
}

export class ThinkboxSequoia extends _Compute {
  protected static override _icon = "thinkbox-sequoia.png";
}

export class ThinkboxStoke extends _Compute {
  protected static override _icon = "thinkbox-stoke.png";
}

export class ThinkboxXmesh extends _Compute {
  protected static override _icon = "thinkbox-xmesh.png";
}

export class VmwareCloudOnAWS extends _Compute {
  protected static override _icon = "vmware-cloud-on-aws.png";
}

export class Wavelength extends _Compute {
  protected static override _icon = "wavelength.png";
}

// Aliases
export const AutoScaling = ApplicationAutoScaling;
export const AMI = EC2Ami;
export const ECR = EC2ContainerRegistry;
export const EB = ElasticBeanstalk;
export const ECS = ElasticContainerService;
export const EKS = ElasticKubernetesService;
export const SAR = ServerlessApplicationRepository;

