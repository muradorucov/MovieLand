import { Outlet } from "react-router";
import Footer from "./footer";
import Header from "./header";

function UserLayout() {
  return (
    <div id="user">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default UserLayout;
