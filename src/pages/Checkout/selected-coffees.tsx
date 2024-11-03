import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { SELECTED_COFFEES } from "../../constants/constants";

export function SelectedCoffees() {
  return (
    <>
      {SELECTED_COFFEES.length > 0 ? (
        SELECTED_COFFEES.map((coffee, index) => {
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
                      <button className="text-purple-dark ">
                        <Minus size={16} />
                      </button>
                      <span>{coffee.amount}</span>
                      <button className="text-purple-dark">
                        <Plus size={16} />
                      </button>
                    </div>

                    <button className="flex items-center gap-2 rounded-lg bg-base-button p-2 font-extralight">
                      <Trash size={16} color="#4b2995" weight="light" />
                      REMOVER
                    </button>
                  </div>
                </div>

                <div className="font-baloo font-medium text-xl text-base-text">
                  <span className="">R$ </span>
                  <span className="">{coffee.price}</span>
                </div>
              </div>
              <div className="flex w-full mt-6 mx-auto h-1px border-1px border-solid border-base-text opacity-10 mb-6" />
            </div>
          );
        })
      ) : (
        <div>
          Selecione um bom café na página anterior antes de prosseguir com a
          compra
        </div>
      )}
    </>
  );
}
