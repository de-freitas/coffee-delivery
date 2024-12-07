import { MapPinLine } from "@phosphor-icons/react";
import { zipCodeMask } from "../../utils/zipCodeMask";
import { useContext, useEffect, useState } from "react";
import { CoffeesContext } from "../../contexts/CoffeesContext";

export function AddressForm() {
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [number, setNumber] = useState("");
  const [complement, SetComplement] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  //let form = { street, neighborhood, number, complement, state, city };

  const { updateLocation } = useContext(CoffeesContext);

  async function getInformationByCep(cep: string) {
    cep = cep.replace("-", "");

    if (cep.length === 8) {
      try {
        const response = await fetch(
          `https://brasilapi.com.br/api/cep/v1/${cep}`
        );
        const data = await response.json();
        setStreet(data.street);
        setState(data.state);
        setCity(data.city);
        updateLocation(`${data.city}, ${data.state}`);
      } catch (error) {
        throw new Error(`Error fetching brasilapi.com.br, ${error}`);
      }
    }
  }

  function handleZipCode(value: string) {
    const typedValue = zipCodeMask(value);
    setCep(typedValue);
  }

  useEffect(() => {
    console.log(cep);
    if (cep.length === 9) {
      const data = getInformationByCep(cep);

      console.log(data);
    }
  }, [cep]);

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
                maxLength={9}
                placeholder="CEP"
                value={cep}
                onChange={(event) => handleZipCode(event.target.value)}
              />
              <input
                className="bg-base-input col-span-3 h-11 p-2 rounded-md outline-input"
                type="text"
                name="rua"
                placeholder="Rua"
                value={street}
                onChange={(event) => setStreet(event.target.value)}
              />
              <input
                className="bg-base-input col-span-1 h-11 p-2 rounded-md outline-yellow outline-input"
                type="number"
                name="numero"
                placeholder="Número"
                value={number}
                onChange={(event) => setNumber(event.target.value)}
              />
              <div className="bg-base-input col-span-2 rounded-md h-11 w-full">
                <input
                  className="bg-base-input p-2 h-11 outline-yellow rounded-md outline-input w-full pr-16"
                  type="text"
                  name="complemento"
                  placeholder="Complemento"
                  value={complement}
                  onChange={(event) => SetComplement(event.target.value)}
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
                value={neighborhood}
                onChange={(event) => setNeighborhood(event.target.value)}
              />
              <input
                className="bg-base-input w-[165%] h-11 p-2 rounded-md outline-yellow outline-input"
                type="text"
                name="cidade"
                placeholder="Cidade"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
              <input
                className="bg-base-input w-[calc(35%)] ml-auto h-11 p-2 rounded-md outline-yellow outline-input"
                type="text"
                name="uf"
                placeholder="UF"
                value={state}
                onChange={(event) => setState(event.target.value)}
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
