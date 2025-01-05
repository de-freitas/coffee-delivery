import { CoffeeCard } from "../../components/CoffeeCard";
import { useContext } from "react";
import { CoffeesContext } from "../../contexts/CoffeesContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function OurCoffees() {
  const { coffees } = useContext(CoffeesContext);

  return (
    <section className=" flex flex-col pb-32 ">
      <div className="pb-12 text-center pt-6">
        <h2 className="font-baloo text-base-title text-3xl font-semibold">
          Nossos cafés
        </h2>
      </div>

      {/* <div className="hidden md:grid md:grid-cols-4 md:gap-y-10 md:gap-x-8 md:mx-auto">
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
      </div> */}

      <div className="sm:hidden rounded-sm ">
        <Swiper
          slidesPerView={1.3}
          spaceBetween={1}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {coffees.map((coffee) => (
            <div key={coffee.name} className="bg-lime-200">
              <SwiperSlide key={coffee.name}>
                <CoffeeCard
                  img={coffee.img}
                  name={coffee.name}
                  types={coffee.types}
                  desc={coffee.desc}
                  price={coffee.price}
                  quantity={coffee.quantity}
                />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>

      <div className="hidden sm:flex rounded-sm sm:mx-15">
        <Swiper
          slidesPerView={2.5}
          spaceBetween={33}
          centeredSlides={false}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            1024: { slidesPerView: 4 },
          }}
        >
          {coffees.map((coffee) => (
            <div key={coffee.name} className="bg-lime-200">
              <SwiperSlide key={coffee.name}>
                <CoffeeCard
                  img={coffee.img}
                  name={coffee.name}
                  types={coffee.types}
                  desc={coffee.desc}
                  price={coffee.price}
                  quantity={coffee.quantity}
                />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
