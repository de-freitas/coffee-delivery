import coffeeImage from "/src/assets/Imagem.png";

import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export function MainSection() {
  return (
    <>
      <section className="flex flex-row justify-between items-center h-[34rem]">
        <div className="w-1/2 flex flex-col justify-between h-[21rem]">
          <div className="flex flex-col gap-5">
            <h1 className="font-baloo font-semibold text-5xl">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="font-roboto font-light text-xl text-base-subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer momento
            </p>
          </div>
          <div className="grid grid-rows-2 grid-cols-2 gap-y-5 font-roboto">
            <div className="flex flex-row gap-2 text-sm font-extralight items-center">
              <div className="bg-yellow-dark h-8 w-8 rounded-full flex items-center justify-center">
                <ShoppingCart size={20} color="white" weight="fill" />
              </div>
              <div className="flex text-base-text">
                <p>Compras simples e segura</p>
              </div>
            </div>

            <div className="flex flex-row gap-2 text-sm font-extralight  items-center">
              <div className="bg-gray-600 h-8 w-8 rounded-full flex items-center justify-center">
                <Package size={20} color="white" weight="fill" />
              </div>
              <div className="flex text-base-text">
                <p>Embalagem mantém o café intacto</p>
              </div>
            </div>

            <div className="flex flex-row gap-2 text-sm font-extralight items-center">
              <div className="bg-yellow h-8 w-8 rounded-full flex items-center justify-center">
                <Timer size={20} color="white" weight="fill" />
              </div>
              <div className="flex text-base-text">
                <p>Entrega rápida e rastreada</p>
              </div>
            </div>

            <div className="flex flex-row gap-2 text-sm font-extralight items-center">
              <div className="bg-purple h-8 w-8 rounded-full flex items-center justify-center">
                <Coffee size={20} color="white" weight="fill" />
              </div>
              <div className="flex text-base-text">
                <p>O café chega fresquinho para você</p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <img src={coffeeImage} />
        </div>
      </section>
    </>
  );
}
