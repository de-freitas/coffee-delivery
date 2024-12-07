import { CoffeeCard } from "../../components/CoffeeCard";
import { useContext } from "react";
import { CoffeesContext } from "../../contexts/CoffeesContext";

export function OurCoffees() {
  const { coffees } = useContext(CoffeesContext);

  return (
    <section className=" flex flex-col">
      <div className="pb-12">
        <h2 className="font-baloo text-base-title text-3xl font-semibold">
          Nossos cafés
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-y-10 gap-x-8 mx-auto">
        {coffees.length > 0 &&
          coffees.map((coffee) => {
            return (
              <div key={coffee.name}>
                <CoffeeCard
                  img={coffee.img}
                  name={coffee.name}
                  types={coffee.types}
                  desc={coffee.desc}
                  price={coffee.price}
                  quantity={coffee.quantity}
                />
              </div>
            );
          })}
      </div>
    </section>
  );
}
