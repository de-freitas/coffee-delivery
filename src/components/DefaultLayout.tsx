import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function DefaultLayout() {
  return (
    <>
      <div className="w-full">
        <div className="max-w-1440 mx-auto px-40">
          <Header />
        </div>
      </div>
      <Outlet />
    </>
  );
}
