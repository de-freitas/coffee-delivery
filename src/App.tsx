import "./App.css";
import { Header } from "./components/Header";
import { MainSection } from "./pages/main-section";
import { OurCoffees } from "./pages/our-coffees";

function App() {
  return (
    <body className="bg-background">
      <section className="max-w-1440 mx-auto px-40">
        <Header />
        <MainSection />
        <OurCoffees />
      </section>
    </body>
  );
}

export default App;
