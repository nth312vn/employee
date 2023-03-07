import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar
        color="light"
        fixed="top"
        container={true}
        expand="md"
        dark={false}
        light={true}
      >
        <NavbarBrand to="/" tag={Link}>
          Home
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to="/leaderboard" tag={Link}>
                Leaderboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/new" tag={Link}>
                New
              </NavLink>
            </NavItem>
          </Nav>
          <Nav>
            <NavItem>
              <NavLink to="/user" tag={Link}>
                <img
                  src="https://www.w3schools.com/howto/img_avatar2.png"
                  style={{ borderRadius: "50%", width: "30px", height: "30px" }}
                  alt="avatar"
                />
                <span>hihi</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login" tag={Link}>
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
