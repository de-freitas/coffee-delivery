import { Header } from "../../components/Header";
import { MainSection } from "./main-section";
import { OurCoffees } from "./our-coffees";

export function HomePage() {
  return (
    <>
      <div className="w-full bg-background pb-40">
        <div className="max-w-1440 mx-auto px-40">
          <Header />
          <MainSection />
          <OurCoffees />
        </div>
      </div>
    </>
  );
}
