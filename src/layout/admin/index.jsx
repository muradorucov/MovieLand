import Header from "./header";
import { Outlet } from "react-router";
import Footer from "./footer";

function AdminLayout() {
  return (
    <div id="admin">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AdminLayout;
