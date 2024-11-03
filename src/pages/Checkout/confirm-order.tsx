import { SelectedCoffees } from "./selected-coffees";

export function ConfirmOrder() {
  return (
    <>
      <aside className="pt-10">
        <div className=" bg-background p-8 rounded-md shadow-md">
          <div>
            <SelectedCoffees />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <div>Total de itens</div>
                <div>R$ 29,70</div>
              </div>

              <div className="flex justify-between">
                <div>Entrega</div>
                <div>R$ 3,50</div>
              </div>

              <div className="flex justify-between">
                <div>Total</div>
                <div>R$ 33,20</div>
              </div>
            </div>

            <button className="bg-yellow text-white text-center p-4 rounded-lg font-bold w-full opacity-90 hover:opacity-100">
              CONFIRMAR PEDIDO
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
