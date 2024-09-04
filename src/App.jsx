import { Route, Routes } from "react-router";
import Home from "./pages/user/home";
import Login from "./pages/user/login";
import UserLayout from "./layout/user";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
