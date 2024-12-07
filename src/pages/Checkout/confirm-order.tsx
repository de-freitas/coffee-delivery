import { Link } from "react-router-dom";
import { SelectedCoffees } from "./selected-coffees";
import { useContext } from "react";
import { CoffeesContext } from "../../contexts/CoffeesContext";
import { formatPriceToPtBR } from "../../utils/formatPriceToPtBR";

export function ConfirmOrder() {
  const { coffees } = useContext(CoffeesContext);

  const totalCoffeesPrice = coffees.reduce((total, coffee) => {
    return total + coffee.price * coffee.quantity;
  }, 0);
  const taxes = 3.5;
  const totalCoffeesPlusTaxes = totalCoffeesPrice + taxes;

  const formatedTaxes = formatPriceToPtBR(taxes);
  const formatedTotalCoffeesPrice = formatPriceToPtBR(totalCoffeesPrice);
  const formatedTotalCoffeesPricePlusTaxes = formatPriceToPtBR(
    totalCoffeesPlusTaxes
  );

  return (
    <>
      <aside className="pt-10">
        <div className=" bg-background p-8 rounded-md shadow-md">
          <div>
            <SelectedCoffees />
          </div>
          {totalCoffeesPrice > 0 && (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <div>Total de itens</div>
                  <div>R$ {formatedTotalCoffeesPrice}</div>
                </div>

                <div className="flex justify-between">
                  <div>Entrega</div>
                  <div>R$ {formatedTaxes}</div>
                </div>

                <div className="flex justify-between">
                  <div>Total</div>
                  <div>R$ {formatedTotalCoffeesPricePlusTaxes}</div>
                </div>
              </div>

              <Link to="/success">
                <button className="bg-yellow text-white text-center p-4 rounded-lg font-bold w-full opacity-90 hover:opacity-100">
                  CONFIRMAR PEDIDO
                </button>
              </Link>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
