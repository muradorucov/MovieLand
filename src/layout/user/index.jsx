import { Outlet } from "react-router";
import Footer from "./footer";
import Header from "./header";

function UserLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default UserLayout;
