import { Route, Routes } from "react-router";
import Home from "./pages/user/home";
import Login from "./pages/user/login";
import UserLayout from "./layout/user";
import Favorite from "./pages/user/favorite";
import SavePage from "./pages/user/saveList";
import Search from "./pages/user/search";
import SingleMovie from "./pages/user/singleMovie";
import SingleList from "./pages/user/singleList";
import AdminLayout from "./layout/admin";
import Dashboard from "./pages/admin/dashboard";
import Users from "./pages/admin/users";
import Movies from "./pages/admin/movies";
import CreateMovie from "./pages/admin/createmovie";
import Register from "./pages/user/register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="fav" element={<Favorite />} />
          <Route path="save" element={<SavePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="save/:list" element={<SingleList />} />
          <Route path="search/:param" element={<Search />} />
          <Route path="movie/:id" element={<SingleMovie />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="movies" element={<Movies />} />
          <Route path="createmovie" element={<CreateMovie />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
