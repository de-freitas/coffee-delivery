import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { HomePage } from "../pages/Home/home-page";
import { CheckoutPage } from "../pages/Checkout/checkout-page";
import { ErrorPage } from "../pages/Error/error-page";
import { SuccessPage } from "../pages/Success/success-page";
import { DefaultLayout } from "./DefaultLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<HomePage />} errorElement={<ErrorPage />} />
      <Route
        path="/checkout"
        element={<CheckoutPage />}
        errorElement={<ErrorPage />}
      />

      <Route
        path="/success"
        element={<SuccessPage />}
        errorElement={<ErrorPage />}
      />
    </Route>
  )
);
