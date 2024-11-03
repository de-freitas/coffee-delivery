import { Header } from "../../components/Header";
import { AdressForm } from "./adress-form";
import { ConfirmOrder } from "./confirm-order";
import { PaymentSection } from "./payment-selection";

export function CheckoutPage() {
  return (
    <>
      <div className="w-ful pb-40">
        <div className="max-w-1440 mx-auto px-40">
          <Header />
          <div className="flex justify-between gap-6">
            <div className="flex flex-col gap-6 w-full">
              <AdressForm />
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
