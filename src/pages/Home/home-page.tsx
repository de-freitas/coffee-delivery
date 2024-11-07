import { MainSection } from "./main-section";
import { OurCoffees } from "./our-coffees";

export function HomePage() {
  return (
    <>
      <div className="w-full pb-40">
        <div className="max-w-1440 mx-auto px-40">
          <MainSection />
          <OurCoffees />
        </div>
      </div>
    </>
  );
}
