import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useContext } from "react";
import { CoffeesContext } from "../contexts/CoffeesContext";

export function Header() {
  const { totalQuantityOfSelectedCoffees, location } =
    useContext(CoffeesContext);

  return (
    <>
      <div className="flex flex-row justify-between items-center h-[6.5rem] pt-8">
        <Link to="/">
          <div>
            <img src={logo} alt="logo coffee delivery company" />
          </div>
        </Link>
        <div className="flex w-[12.0265rem] items-center h-[2.375rem] justify-between gap-3">
          <div className="flex items-center justify-evenly rounded-md h-full w-full p bg-purple-light px-1 ">
            <div className="text-purple">
              <MapPin size={22} />
            </div>
            <div className="text-sm font-normal text-purple-dark">
              {location}
            </div>
          </div>
          <div className="bg-yellow-light w-14 h-full flex rounded-md hover:bg-yellow">
            <Link to="/checkout" className="flex m-auto">
              <ShoppingCart
                size={22}
                weight="fill"
                color="#c47f17"
                className="m-auto"
              />
            </Link>
            {totalQuantityOfSelectedCoffees > 0 ? (
              <div className="bg-red-400">
                <div className="absolute ml-[-12px] mt-[-10px] bg-yellow-dark font-medium rounded-full w-6 h-6 text-center">
                  {totalQuantityOfSelectedCoffees}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
