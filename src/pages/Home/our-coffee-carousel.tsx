import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CoffeeCard } from "../../components/CoffeeCard";

export interface Coffee {
  name: string;
  img: string;
  types: string[];
  desc: string;
  price: number;
  quantity: number;
}

export function CoffeeCarousel(coffees: Coffee[]) {
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1} // Define a quantidade visível em telas pequenas
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          576: { slidesPerView: 2 }, // Duas cartas em telas >640px
          768: { slidesPerGroupAuto: true }, // Três cartas em telas >768px
          1024: { slidesPerView: 4 }, // Quatro cartas em telas >1024px
        }}
      >
        {coffees.map((coffee) => (
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
        ))}
      </Swiper>
    </div>
  );
}
