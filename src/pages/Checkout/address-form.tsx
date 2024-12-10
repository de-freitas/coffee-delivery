import { MapPinLine } from "@phosphor-icons/react";
import { zipCodeMask } from "../../utils/zipCodeMask";
import { useContext, useState } from "react";
import { CoffeesContext } from "../../contexts/CoffeesContext";

export function AddressForm() {
  const { updateAddress } = useContext(CoffeesContext);

  const [address, setAddress] = useState({
    cep: "",
    street: "",
    neighborhood: "",
    number: "",
    complement: "",
    state: "",
    city: "",
  });

  async function getInformationByCep(cep: string) {
    cep = cep.replace("-", "");

    if (cep.length === 8) {
      try {
        const response = await fetch(
          `https://brasilapi.com.br/api/cep/v1/${cep}`
        );
        const data = await response.json();
        setAddress((state) => ({
          ...state,
          city: data.city,
          state: data.state,
          street: data.street,
          neighborhood: data.neighborhood,
        }));
        console.table(data);
      } catch (error) {
        throw new Error(`Error fetching brasilapi.com.br, ${error}`);
      }
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    const updatedAddress = {
      ...address,
      [name]: value,
    };
    setAddress(updatedAddress);
    updateAddress(updatedAddress);

    if (name === "cep") {
      const cep = zipCodeMask(value);
      if (cep.length === 9) {
        getInformationByCep(cep);
      }
    }
  }

  return (
    <>
      <section className="flex flex-col gap-3">
        <h2 className="font-baloo font-medium text-xl text-base-subtitle">
          Complete seu pedido
        </h2>

        <div className="flex flex-col font-roboto bg-background h-96 sm:p-8 p-2 rounded-md shadow-md">
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
            <form className="grid grid-cols-3 sm:gap-4 gap-y-4 gap-x-1 font-thin text-base-text text-sm justify-between ">
              <input
                className="bg-base-input row-span-3 h-11 p-2 rounded-md outline-yellow outline-input"
                type="text"
                name="cep"
                maxLength={9}
                placeholder="CEP"
                required
                value={address.cep}
                onChange={handleChange}
              />
              <input
                className="bg-base-input col-span-3 h-11 p-2 rounded-md outline-input"
                type="text"
                name="street"
                placeholder="Rua"
                required
                value={address.street}
                onChange={handleChange}
              />
              <input
                className="bg-base-input col-span-1 h-11 p-2 rounded-md outline-yellow outline-input"
                type="number"
                name="number"
                placeholder="Número"
                required
                value={address.number}
                onChange={handleChange}
              />
              <div className="bg-base-input col-span-2 rounded-md h-11 w-full">
                <input
                  className="bg-base-input p-2 h-11 outline-yellow rounded-md outline-input w-full pr-16"
                  type="text"
                  name="complement"
                  placeholder="Complemento"
                  value={address.complement}
                  onChange={handleChange}
                />
                <span className="font-thin text-base-text text-xs italic relative top-[-70%] sm:right-[-85%] right-[-75%] ">
                  Opcional
                </span>
              </div>
              <input
                className="bg-base-input h-11 p-2 rounded-md outline-yellow outline-input"
                type="text"
                name="neighborhood"
                placeholder="Bairro"
                required
                value={address.neighborhood}
                onChange={handleChange}
              />
              <input
                className="bg-base-input w-[165%] h-11 p-2 rounded-md outline-yellow outline-input"
                type="text"
                name="city"
                placeholder="Cidade"
                required
                value={address.city}
                onChange={handleChange}
              />
              <input
                className="bg-base-input w-[calc(35%)] ml-auto h-11 p-2 rounded-md outline-yellow outline-input"
                type="text"
                name="state"
                placeholder="UF"
                required
                value={address.state}
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
