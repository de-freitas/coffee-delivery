import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

interface CoffeeCardProps {
  name: string;
  img: string;
  types: string[];
  desc: string;
  price: string;
}

export function CoffeeCard({ name, img, types, desc, price }: CoffeeCardProps) {
  return (
    <div className=" w-64 h-80 hover:p-[1px] bg-gradient-to-r from-yellow to-purple flex rounded-md rounded-tr-[3rem] rounded-bl-[3rem]">
      <div className="bg-base-card flex flex-col items-center text-center gap-6 rounded-md rounded-tr-[3rem] rounded-bl-[3rem] h-full">
        <div className="flex flex-col items-center gap-4">
          <div className="mt-[-1rem]">
            <img className=" w-[7.5rem] h-[7.5rem]" src={img} alt={name} />
          </div>
          <div className="flex flex-row gap-1">
            {types &&
              types.length > 0 &&
              types.map((type, index) => {
                return (
                  <div
                    key={index}
                    className="bg-yellow-light rounded-xl px-1.5 py-0.5 text-xs font-roboto font-semibold text-yellow-dark "
                  >
                    <span>{type}</span>
                  </div>
                );
              })}
            {/* <span>{types}</span> */}
          </div>
          <div className="font-baloo text-xl font-semibold">
            <span>{name}</span>
          </div>
          <div className="font-extralight text-base text-base-label leading-4">
            <p>{desc}</p>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <div>
            <span className="text-sm font-extralight">R$ </span>
            <span className="font-baloo text-2xl font-bold text-base-subtitle">
              {price}
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-base-button flex gap-3 items-center p-2 rounded-lg">
              <button className="text-purple-dark ">
                <Minus size={16} />
              </button>
              <span>1</span>
              <button className="text-purple-dark">
                <Plus size={16} />
              </button>
            </div>
            <div>
              <Link to="/checkout">
                <button className=" bg-purple-dark rounded-lg p-2 opacity-80 hover:opacity-100">
                  <ShoppingCartSimple size={22} color="white" weight="fill" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
