import { MapPinLine } from "@phosphor-icons/react";

export function AddressForm() {
  return (
    <>
      <section className="flex flex-col gap-3">
        <h2 className="font-baloo font-medium text-xl text-base-subtitle">
          Complete seu pedido
        </h2>

        <div className="flex flex-col font-roboto bg-background h-96 p-8 rounded-md shadow-md">
          <div className="flex gap-2 items-start">
            <div>
              <MapPinLine size={25} color="#c47f17" />
            </div>
            <div>
              <p className="font-light text-base-subtitle text-base">
                Endereço de Entrega
              </p>
              <p className="font-thin text-base-text text-sm">
                Informe o endereço de onde deseja receber seu pedido
              </p>
            </div>
          </div>

          <div className="my-auto">
            <form className="grid grid-cols-3 gap-4 font-thin text-base-text text-sm justify-between ">
              <input
                className="bg-base-input row-span-3 h-11 p-2 rounded-md outline-yellow outline-input"
                type="text"
                name="cep"
                placeholder="CEP"
              />
              <input
                className="bg-base-input col-span-3 h-11 p-2 rounded-md outline-yellow outline-input"
                type="text"
                name="rua"
                placeholder="Rua"
              />
              <input
                className="bg-base-input col-span-1 h-11 p-2 rounded-md outline-yellow outline-input"
                type="number"
                name="numero"
                placeholder="Número"
              />
              <div className="bg-base-input col-span-2 rounded-md h-11 w-full">
                <input
                  className="bg-base-input p-2 h-11 outline-yellow outline-input w-full pr-16"
                  type="text"
                  name="complemento"
                  placeholder="Complemento"
                />
                <span className="font-thin text-base-text text-xs italic relative top-[-70%] right-[-85%] ">
                  Opcional
                </span>
              </div>
              <input
                className="bg-base-input h-11 p-2 rounded-md outline-yellow outline-input"
                type="text"
                name="bairro"
                placeholder="Bairro"
              />
              <input
                className="bg-base-input w-[165%] h-11 p-2 rounded-md outline-yellow outline-input"
                type="text"
                name="cidade"
                placeholder="Cidade"
              />
              <input
                className="bg-base-input w-[calc(35%)] ml-auto h-11 p-2 rounded-md outline-yellow outline-input"
                type="text"
                name="uf"
                placeholder="UF"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
