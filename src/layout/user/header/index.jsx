import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import SearchModal from "../../../components/user/search";
import { useRef } from "react";

function Header() {
  const elem = useRef(null);

  const showSearchModal = () => {
    elem.current.style.bottom = 0;
    elem.current.style.top = 0;
  };
  return (
    <header>
      <div className="d-flex justify-content-space-between align-items-center">
        <h2 className="logo">
          <Link to={"/"}>MovieLand</Link>
        </h2>
        <ul className="menu d-flex align-items-center">
          <li>
            <Link to={"/"}>Ana Səhifə</Link>
          </li>
          <li>
            <Link to={"/fav"}>Favorilər</Link>
          </li>
          <li>
            <Link to={"/save"}>Kitabxana</Link>
          </li>
        </ul>
        <div className="d-flex align-items-center">
          <CiSearch onClick={showSearchModal} />
          <div className="profile">
            {/* {isLogin ? (
            <div>
              <img src="" alt="" />
            </div>
          ) : ( */}
            <Link to={"/login"}>
              <button className="loginbtn">Login</button>
            </Link>
            {/* )} */}
          </div>
        </div>

        <SearchModal elem={elem} />
      </div>
    </header>
  );
}

export default Header;
