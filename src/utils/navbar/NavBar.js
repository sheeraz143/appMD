// import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assests/appmd-logo.svg";
import "./navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

function NavBar() {
  const [select, setSelect] = useState("IN");
  const onSelect = code => setSelect(code);
  return (
    <div className="header-sec">
      <div className="container navbar_bg">
        <div className="row-lg-12">
          <Navbar expand="lg" className="navbar_wrap ">
            <img src={Logo} alt="logo" className="img-fluid" height="80" />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="flex-grow-1 justify-content-end">
                <Nav.Item>
                  <NavLink as={Link} to="/">
                    Home
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink as={Link} to="ourservices">
                    Our Services
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink as={Link} to="doctor">
                    DOCTORS
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink as={Link} to="about">
                    ABOUT US
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink as={Link} to="contact">
                    CONTACT US
                  </NavLink>
                </Nav.Item>
                {/* <Nav.Item className="react_flag">
                    <NavLink>
                      <ReactFlagsSelect
                        selected={select}
                        onSelect={onSelect}
                        countries={["IN", "US"]}
                        className="raect_flag"
                      />
                    </NavLink>
                  </Nav.Item> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
