import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/snacks">Snacks</NavLink>
          </NavItem>

          {/* Added drinks NavLink */}
          <NavItem> 
            <NavLink to="/drinks">Drinks</NavLink> 
          </NavItem>
          {/* End of added code */}

        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;

