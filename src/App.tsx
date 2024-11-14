import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./components/Router";
import { CoffeesContexProvider } from "./contexts/CoffeesContext";

function App() {
  return (
    <CoffeesContexProvider>
      <RouterProvider router={router} />
    </CoffeesContexProvider>
  );
}

export default App;
