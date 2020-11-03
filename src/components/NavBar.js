import React from "react";

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
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
