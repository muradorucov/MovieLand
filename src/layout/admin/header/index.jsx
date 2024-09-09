import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/admin"}>Dashboard</Link>
        </li>
        <li>
          <Link to={"users"}>Users</Link>
        </li>
        <li>
          <Link to={"movies"}>Movies</Link>
        </li>
        <li>
          <Link to={"createmovie"}>Create Movie</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
