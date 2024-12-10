import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { CoffeesContext } from "../../contexts/CoffeesContext";

export function PaymentSection() {
  const { updatePaymentMethod } = useContext(CoffeesContext);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);

  function handlePaymentSelection(method: string) {
    setSelectedPaymentMethod(method);
    updatePaymentMethod({ paymentMethod: method });
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
      <section className="flex flex-col font-roboto bg-background sm:p-8 p-2 rounded-md shadow-md gap-7">
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
        <div className="font-thin text-xs flex justify-between sm:gap-3 gap-1 text-center">
          <div
            className={`flex sm:flex-row sm:gap-2 flex-col gap-0.5 justify-center items-center w-1/3 rounded-md h-14 sm:pl-4 cursor-pointer ${isActive(
              "Cartão de Crédito",
              "div"
            )}`}
            onClick={() => handlePaymentSelection("Cartão de Crédito")}
          >
            <CreditCard
              size={20}
              color={isActive("Cartão de Crédito", "icon")}
            />
            <p>CARTÃO DE CRÉDITO</p>
          </div>
          <div
            className={`flex sm:flex-row sm:gap-2 flex-col gap-0.5 justify-center items-center w-1/3 rounded-md h-14 sm:pl-4 cursor-pointer ${isActive(
              "Cartão de Débito",
              "div"
            )}`}
            onClick={() => handlePaymentSelection("Cartão de Débito")}
          >
            <Bank size={20} color={isActive("Cartão de Débito", "icon")} />
            <p>CARTÃO DE DÉBITO</p>
          </div>
          <div
            className={`flex sm:flex-row sm:gap-2 flex-col gap-0.5 justify-center items-center w-1/3 rounded-md h-14 sm:pl-4 cursor-pointer ${isActive(
              "Dinheiro",
              "div"
            )}`}
            onClick={() => handlePaymentSelection("Dinheiro")}
          >
            <Money size={20} color={isActive("Dinheiro", "icon")} />
            <p>DINHEIRO</p>
          </div>
        </div>
      </section>
    </>
  );
}
