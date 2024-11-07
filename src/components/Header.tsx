import { Link } from "react-router-dom";
import logo from "/src/assets/logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
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
              Porto Alegre, RS
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
          </div>
        </div>
      </div>
    </>
  );
}
