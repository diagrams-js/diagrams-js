import { _Saas } from "./index.js";

class _Payment extends _Saas {
  protected static override _type = "payment";
  protected static override _iconDir = "saas/payment";
}

export class Adyen extends _Payment {
  protected static override _icon = "adyen.png";
}

export class AmazonPay extends _Payment {
  protected static override _icon = "amazon-pay.png";
}

export class Paypal extends _Payment {
  protected static override _icon = "paypal.png";
}

export class Stripe extends _Payment {
  protected static override _icon = "stripe.png";
}

