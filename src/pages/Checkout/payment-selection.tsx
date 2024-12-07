import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { useState } from "react";

export function PaymentSection() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);

  function handlePaymentSelection(method: string) {
    setSelectedPaymentMethod(method);
  }

  const isActive = (method: string, object: string) => {
    if (object === "div") {
      return selectedPaymentMethod === method
        ? "bg-purple text-white"
        : "bg-base-button text-base-text";
    } else if (object === "icon") {
      return selectedPaymentMethod === method ? "white" : "#4b2995";
    }
  };

  return (
    <>
      <section className="flex flex-col font-roboto bg-background p-8 rounded-md shadow-md gap-7">
        <div className="flex gap-2 items-start">
          <div>
            <CurrencyDollar size={25} color="#4b2995" />{" "}
          </div>
          <div>
            <p className="font-light text-base-subtitle text-base">Pagamento</p>
            <p className="font-thin text-base-text text-sm">
              O Pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>
        <div className="font-thin text-xs flex justify-between gap-3 text-center">
          <div
            className={`flex gap-2 items-center w-1/3 rounded-md h-14 pl-4 cursor-pointer ${isActive(
              "creditCard",
              "div"
            )}`}
            onClick={() => handlePaymentSelection("creditCard")}
          >
            <CreditCard size={20} color={isActive("creditCard", "icon")} />
            <p>CARTÃO DE CRÉDITO</p>
          </div>
          <div
            className={`flex gap-2 items-center w-1/3 rounded-md h-14 pl-4 cursor-pointer ${isActive(
              "debitCard",
              "div"
            )}`}
            onClick={() => handlePaymentSelection("debitCard")}
          >
            <Bank size={20} color={isActive("debitCard", "icon")} />
            <p>CARTÃO DE DÉBITO</p>
          </div>
          <div
            className={`flex gap-2 items-center w-1/3 rounded-md h-14 pl-4 cursor-pointer ${isActive(
              "cash",
              "div"
            )}`}
            onClick={() => handlePaymentSelection("cash")}
          >
            <Money size={20} color={isActive("cash", "icon")} />
            <p>DINHEIRO</p>
          </div>
        </div>
      </section>
    </>
  );
}
