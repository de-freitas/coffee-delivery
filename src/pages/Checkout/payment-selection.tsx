import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";

export function PaymentSection() {
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
          <div className="flex gap-2 items-center bg-base-button w-1/3 rounded-md h-14 pl-4">
            <CreditCard size={20} color="#4b2995" />
            <p>CARTÃO DE CRÉDITO</p>
          </div>
          <div className="flex gap-2 items-center bg-base-button w-1/3 rounded-md h-14 pl-4">
            <Bank size={20} color="#4b2995" />
            <p>CARTÃO DE DÉBITO</p>
          </div>
          <div className="flex gap-2 items-center bg-base-button w-1/3 rounded-md h-14 pl-4">
            <Money size={20} color="#4b2995" />
            <p>DINHEIRO</p>
          </div>
        </div>
      </section>
    </>
  );
}
