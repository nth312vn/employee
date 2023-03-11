import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { deleteAuthUser } from "../../actions/usersAction";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.users.authUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggle = () => setIsOpen(!isOpen);
  const handleLogOut = () => {
    dispatch(deleteAuthUser());
    navigate("/login");
  };
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
              <NavLink to="/add" tag={Link}>
                New
              </NavLink>
            </NavItem>
          </Nav>
          <Nav>
            <NavItem>
              <NavLink>
                <img
                  src={user?.avatarURL}
                  style={{ borderRadius: "50%", width: "30px", height: "30px" }}
                  alt="avatar"
                />
                <span>{user?.name}</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={handleLogOut} to="/login" tag={Link}>
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
