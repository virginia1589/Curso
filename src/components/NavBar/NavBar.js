import React from "react";
import Icart from "../Icons/CartIcon";

function NavBar() {
  return (
    <div>
      <nav>
        <div className="logo">Virgilandia</div>
        <ul className="nav-links">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Product</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>

          <Icart />
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
