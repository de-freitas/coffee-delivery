import "./App.css";
import { Header } from "./components/Header";
import { MainSection } from "./pages/main-section";

function App() {
  return (
    <>
      <body className="max-w-1440 mx-auto px-40 bg-background">
        <Header />
        <MainSection />
      </body>
    </>
  );
}

export default App;
