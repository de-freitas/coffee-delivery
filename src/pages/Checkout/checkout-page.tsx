import { AddressForm } from "./address-form";
import { ConfirmOrder } from "./confirm-order";
import { PaymentSection } from "./payment-selection";

export function CheckoutPage() {
  return (
    <>
      <div className="w-full pb-40">
        <div className="lg:max-w-1440 mx-auto ">
          <div className="md:flex md:justify-between md:gap-6 md:pt-10">
            <div className="flex flex-col gap-6 w-full">
              <AddressForm />
              <PaymentSection />
            </div>
            <div>
              <ConfirmOrder />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
