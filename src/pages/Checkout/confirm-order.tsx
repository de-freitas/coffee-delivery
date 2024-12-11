import { SelectedCoffees } from "./selected-coffees";
import { useContext } from "react";
import { CoffeesContext } from "../../contexts/CoffeesContext";
import { formatPriceToPtBR } from "../../utils/formatPriceToPtBR";

import { useNavigate } from "react-router-dom"; // Importe o hook useNavigate

export function ConfirmOrder() {
  const {
    coffees,
    paymentData,
    manageQuantity,
    OperationTypes,
    updatePaymentMethod,
    updateAddress,
  } = useContext(CoffeesContext);

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

  const navigate = useNavigate();

  function handleConfirmOrder() {
    if (
      !paymentData.paymentMethod.paymentMethod ||
      !paymentData.address.cep ||
      !paymentData.address.city ||
      !paymentData.address.number ||
      !paymentData.address.street
    ) {
      alert(
        "Por favor, preencha corretamente os dados de endereço e forma de pagamento!"
      );
      return;
    }

    const selectedCoffees = localStorage.getItem(
      "@coffee-delivery:selectedCoffees"
    );
    const parsedSelectedCoffees = selectedCoffees
      ? JSON.parse(selectedCoffees)
      : [];

    manageQuantity(parsedSelectedCoffees, OperationTypes.CLEAR);

    navigate(`/success`);

    updatePaymentMethod({ paymentMethod: null });
    updateAddress({
      cep: null,
      complement: null,
      neighborhood: null,
      number: null,
      street: null,
    });
  }

  return (
    <>
      <aside className="pt-10 w-full">
        <div className=" bg-background sm:p-8 p-2 rounded-md shadow-md">
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

              <button
                onClick={() => handleConfirmOrder()}
                className="bg-yellow text-white text-center p-4 rounded-lg font-bold w-full opacity-90 hover:opacity-100"
              >
                CONFIRMAR PEDIDO
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
