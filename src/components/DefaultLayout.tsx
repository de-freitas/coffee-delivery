import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function DefaultLayout() {
  return (
    <>
      <div className=" w-screen overflow-x-hidden lg:max-w-1440 px-6 sm:px-10 md:px-12 lg:px-40 mx-auto">
        {/* <div className="max-w-1440 mx-auto px-40"> */}
        <Header />
        <Outlet />
      </div>
    </>
  );
}
