import { useContext } from "react";
import delivery from "../../assets/delivery.png";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { CoffeesContext } from "../../contexts/CoffeesContext";

export function SuccessPage() {
  const { paymentData } = useContext(CoffeesContext);

  return (
    <>
      <div className="sm:max-w-1440 mx-auto sm:px-40 px-2">
        <div className="pt-24 flex flex-col items-center">
          <div className="flex flex-col pb-10">
            <h1 className="font-baloo font-bold text-3xl text-yellow-dark">
              Uhul! Pedido confirmado
            </h1>
            <h2 className="text-xl font-extralight">
              Agora é só aguardar que logo seu café chegará até você
            </h2>
          </div>

          <div className="flex">
            <img src={delivery} alt="imagem ilustrativa delivery" />
          </div>

          <div className="flex sm:justify-between">
            <div className="flex p-[1px] bg-gradient-to-r from-yellow to-purple rounded-md rounded-tr-3rem rounded-bl-3rem sm:w-[48%]">
              <div className="flex flex-col justify-around px-10 py-10 gap-5 bg-white rounded-md rounded-tr-3rem rounded-bl-3rem border-none w-[100%]">
                <div className="flex gap-2 items-center">
                  <div className="w-8 h-8 rounded-full bg-purple flex items-center justify-center">
                    <MapPin size={16} color="white" weight="fill" />
                  </div>
                  <div className="flex flex-col text-sm font-light">
                    <p>
                      Entrega em{" "}
                      <strong>
                        {" "}
                        {paymentData.address.street},{" "}
                        {paymentData.address.number}{" "}
                      </strong>
                    </p>
                    <p>
                      {paymentData.address.city} - {paymentData.address.state}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow flex items-center justify-center">
                    <Timer size={16} color="white" weight="fill" />
                  </div>
                  <div className="flex flex-col text-sm font-light">
                    <p>Previsão de entrega</p>
                    <p>
                      <strong>20 min - 30 min</strong>
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-8 h-8 rounded-full bg-purple flex items-center justify-center">
                    <CurrencyDollar size={16} color="white" />
                  </div>
                  <div className="flex flex-col text-sm font-light">
                    <p>Pagamento na entrega</p>
                    <p>
                      <strong>{paymentData.paymentMethod.paymentMethod}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden sm: flex">
              <img src={delivery} alt="imagem ilustrativa delivery" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
