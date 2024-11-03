import { COFFEES_IMAGES } from "../../constants/constants";
import { CoffeeCard } from "../../components/CoffeeCard";

export function OurCoffees() {
  return (
    <section className=" flex flex-col">
      <div className="pb-12">
        <h2 className="font-baloo text-base-title text-3xl font-semibold">
          Nossos cafés
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-y-10 gap-x-8 mx-auto ">
        {COFFEES_IMAGES &&
          COFFEES_IMAGES.length > 0 &&
          COFFEES_IMAGES.map((coffee) => {
            return (
              <div key={coffee.name}>
                <CoffeeCard
                  img={coffee.img}
                  name={coffee.name}
                  types={coffee.types}
                  desc={coffee.desc}
                  price={coffee.price}
                />
              </div>
            );
          })}
      </div>
    </section>
  );
}
