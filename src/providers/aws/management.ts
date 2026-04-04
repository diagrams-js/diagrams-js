import { _Aws } from "./index.js";

class _Management extends _Aws {
  protected static override _type = "management";
  protected static override _iconDir = "aws/management";
}

export class AmazonDevopsGuru extends _Management {
  protected static override _icon = "amazon-devops-guru.png";
}

export class AmazonManagedGrafana extends _Management {
  protected static override _icon = "amazon-managed-grafana.png";
}

export class AmazonManagedPrometheus extends _Management {
  protected static override _icon = "amazon-managed-prometheus.png";
}

export class AmazonManagedWorkflowsApacheAirflow extends _Management {
  protected static override _icon = "amazon-managed-workflows-apache-airflow.png";
}

export class AutoScaling extends _Management {
  protected static override _icon = "auto-scaling.png";
}

export class Chatbot extends _Management {
  protected static override _icon = "chatbot.png";
}

export class CloudformationChangeSet extends _Management {
  protected static override _icon = "cloudformation-change-set.png";
}

export class CloudformationStack extends _Management {
  protected static override _icon = "cloudformation-stack.png";
}

export class CloudformationTemplate extends _Management {
  protected static override _icon = "cloudformation-template.png";
}

export class Cloudformation extends _Management {
  protected static override _icon = "cloudformation.png";
}

export class Cloudtrail extends _Management {
  protected static override _icon = "cloudtrail.png";
}

export class CloudwatchAlarm extends _Management {
  protected static override _icon = "cloudwatch-alarm.png";
}

export class CloudwatchEventEventBased extends _Management {
  protected static override _icon = "cloudwatch-event-event-based.png";
}

export class CloudwatchEventTimeBased extends _Management {
  protected static override _icon = "cloudwatch-event-time-based.png";
}

export class CloudwatchLogs extends _Management {
  protected static override _icon = "cloudwatch-logs.png";
}

export class CloudwatchRule extends _Management {
  protected static override _icon = "cloudwatch-rule.png";
}

export class Cloudwatch extends _Management {
  protected static override _icon = "cloudwatch.png";
}

export class Codeguru extends _Management {
  protected static override _icon = "codeguru.png";
}

export class CommandLineInterface extends _Management {
  protected static override _icon = "command-line-interface.png";
}

export class Config extends _Management {
  protected static override _icon = "config.png";
}

export class ControlTower extends _Management {
  protected static override _icon = "control-tower.png";
}

export class LicenseManager extends _Management {
  protected static override _icon = "license-manager.png";
}

export class ManagedServices extends _Management {
  protected static override _icon = "managed-services.png";
}

export class ManagementAndGovernance extends _Management {
  protected static override _icon = "management-and-governance.png";
}

export class ManagementConsole extends _Management {
  protected static override _icon = "management-console.png";
}

export class OpsworksApps extends _Management {
  protected static override _icon = "opsworks-apps.png";
}

export class OpsworksDeployments extends _Management {
  protected static override _icon = "opsworks-deployments.png";
}

export class OpsworksInstances extends _Management {
  protected static override _icon = "opsworks-instances.png";
}

export class OpsworksLayers extends _Management {
  protected static override _icon = "opsworks-layers.png";
}

export class OpsworksMonitoring extends _Management {
  protected static override _icon = "opsworks-monitoring.png";
}

export class OpsworksPermissions extends _Management {
  protected static override _icon = "opsworks-permissions.png";
}

export class OpsworksResources extends _Management {
  protected static override _icon = "opsworks-resources.png";
}

export class OpsworksStack extends _Management {
  protected static override _icon = "opsworks-stack.png";
}

export class Opsworks extends _Management {
  protected static override _icon = "opsworks.png";
}

export class OrganizationsAccount extends _Management {
  protected static override _icon = "organizations-account.png";
}

export class OrganizationsOrganizationalUnit extends _Management {
  protected static override _icon = "organizations-organizational-unit.png";
}

export class Organizations extends _Management {
  protected static override _icon = "organizations.png";
}

export class PersonalHealthDashboard extends _Management {
  protected static override _icon = "personal-health-dashboard.png";
}

export class Proton extends _Management {
  protected static override _icon = "proton.png";
}

export class ServiceCatalog extends _Management {
  protected static override _icon = "service-catalog.png";
}

export class SystemsManagerAppConfig extends _Management {
  protected static override _icon = "systems-manager-app-config.png";
}

export class SystemsManagerAutomation extends _Management {
  protected static override _icon = "systems-manager-automation.png";
}

export class SystemsManagerDocuments extends _Management {
  protected static override _icon = "systems-manager-documents.png";
}

export class SystemsManagerInventory extends _Management {
  protected static override _icon = "systems-manager-inventory.png";
}

export class SystemsManagerMaintenanceWindows extends _Management {
  protected static override _icon = "systems-manager-maintenance-windows.png";
}

export class SystemsManagerOpscenter extends _Management {
  protected static override _icon = "systems-manager-opscenter.png";
}

export class SystemsManagerParameterStore extends _Management {
  protected static override _icon = "systems-manager-parameter-store.png";
}

export class SystemsManagerPatchManager extends _Management {
  protected static override _icon = "systems-manager-patch-manager.png";
}

export class SystemsManagerRunCommand extends _Management {
  protected static override _icon = "systems-manager-run-command.png";
}

export class SystemsManagerStateManager extends _Management {
  protected static override _icon = "systems-manager-state-manager.png";
}

export class SystemsManager extends _Management {
  protected static override _icon = "systems-manager.png";
}

export class TrustedAdvisorChecklistCost extends _Management {
  protected static override _icon = "trusted-advisor-checklist-cost.png";
}

export class TrustedAdvisorChecklistFaultTolerant extends _Management {
  protected static override _icon = "trusted-advisor-checklist-fault-tolerant.png";
}

export class TrustedAdvisorChecklistPerformance extends _Management {
  protected static override _icon = "trusted-advisor-checklist-performance.png";
}

export class TrustedAdvisorChecklistSecurity extends _Management {
  protected static override _icon = "trusted-advisor-checklist-security.png";
}

export class TrustedAdvisorChecklist extends _Management {
  protected static override _icon = "trusted-advisor-checklist.png";
}

export class TrustedAdvisor extends _Management {
  protected static override _icon = "trusted-advisor.png";
}

export class UserNotifications extends _Management {
  protected static override _icon = "user-notifications.png";
}

export class WellArchitectedTool extends _Management {
  protected static override _icon = "well-architected-tool.png";
}

// Aliases
export const SSM = SystemsManager;
export const ParameterStore = SystemsManagerParameterStore;

