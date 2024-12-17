import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="nav-tag">
        <ul className="main-ul">
          <li>
            <NavLink to="/Home">
              <img
                className="flipcart-logo"
                src="./images/flipcartLogo.jpeg"
              ></img>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li className="category" to="/">
            <NavLink> Category</NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="/Fashion">Fashion</NavLink>
              </li>
              <li>
                <NavLink to="/Mobiles">Mobiles</NavLink>
              </li>
              <li>
                <NavLink to="/Electronics">Electronics</NavLink>
              </li>
              <li>
                <NavLink to="/Grocery">Grocery</NavLink>
              </li>
            </ul>
          </li>

          <li>
            <input className="search-input" placeholder="search for products" />
          </li>

          <li>
            <button className="search-btn">Search</button>
          </li>

          <li className="category">
            <NavLink> More</NavLink>
            <ul className="dropdown">
              <li>
                <NavLink to="/">Login</NavLink>
              </li>
              <li>
                <NavLink to="/Signup">Signup</NavLink>
              </li>
              <li>
                <NavLink to="/Logout">Logout</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/Cart">cart</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
