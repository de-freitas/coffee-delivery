import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Home/home-page";
import { CheckoutPage } from "../pages/Checkout/checkout-page";
import { ErrorPage } from "../pages/Error/error-page";
import { SuccessPage } from "../pages/Success/success-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "success",
    element: <SuccessPage />,
    errorElement: <ErrorPage />,
  },
]);
