import { _Aws } from "./index.js";

class _Cost extends _Aws {
  protected static override _type = "cost";
  protected static override _iconDir = "aws/cost";
}

export class Budgets extends _Cost {
  protected static override _icon = "budgets.png";
}

export class CostAndUsageReport extends _Cost {
  protected static override _icon = "cost-and-usage-report.png";
}

export class CostExplorer extends _Cost {
  protected static override _icon = "cost-explorer.png";
}

export class CostManagement extends _Cost {
  protected static override _icon = "cost-management.png";
}

export class ReservedInstanceReporting extends _Cost {
  protected static override _icon = "reserved-instance-reporting.png";
}

export class SavingsPlans extends _Cost {
  protected static override _icon = "savings-plans.png";
}

