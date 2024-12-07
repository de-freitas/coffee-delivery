import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { useContext } from "react";
import { CoffeesContext } from "../../contexts/CoffeesContext";
import { Link } from "react-router-dom";
import { formatPriceToPtBR } from "../../utils/formatPriceToPtBR";

export function SelectedCoffees() {
  const {
    coffees,
    manageQuantity,
    OperationTypes,
    totalQuantityOfSelectedCoffees,
  } = useContext(CoffeesContext);

  return (
    <>
      {totalQuantityOfSelectedCoffees > 0 ? (
        coffees
          .filter((coffee) => coffee.quantity > 0)
          .map((coffee, index) => {
            return (
              <div key={index} className="flex flex-col">
                <div className="flex gap-5 ">
                  <div className="w-20 h-20">
                    <img src={coffee.img} alt="coffee" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex">
                      <span className="font-extralight text-base-title text-lg">
                        {coffee.name}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center font-extralight text-xs">
                      <div className="bg-base-button flex gap-3 items-center p-2 rounded-lg ">
                        <button
                          className="text-purple-dark"
                          onClick={() =>
                            manageQuantity(
                              coffee,
                              OperationTypes.DECREASE_QUANTITY
                            )
                          }
                        >
                          <Minus size={16} />
                        </button>
                        <span>{coffee.quantity}</span>
                        <button
                          className="text-purple-dark"
                          onClick={() =>
                            manageQuantity(
                              coffee,
                              OperationTypes.INCREASE_QUANTITY
                            )
                          }
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <button
                        className="flex items-center gap-2 rounded-lg bg-base-button p-2 font-extralight"
                        onClick={() =>
                          manageQuantity(
                            coffee,
                            OperationTypes.REMOVE_SELECTED_COFFEE
                          )
                        }
                      >
                        <Trash size={16} color="#4b2995" weight="light" />
                        REMOVER
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-1 font-baloo font-medium text-xl text-base-text">
                    <span className="">R$ </span>
                    <span className="">{formatPriceToPtBR(coffee.price)}</span>
                  </div>
                </div>
                <div className="flex w-full mt-6 mx-auto h-1px border-1px border-solid border-base-text opacity-10 mb-6" />
              </div>
            );
          })
      ) : (
        <div className="font-light font-roboto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100 border-purple-light outline-double p-2 rounded-lg bg-purple-light ">
          <Link to="/" className=" font-baloo text-lg ">
            Selecione um bom café na{" "}
            <strong className="text-purple">página anterior </strong>
            antes de prosseguir com a compra
          </Link>{" "}
        </div>
      )}
    </>
  );
}
