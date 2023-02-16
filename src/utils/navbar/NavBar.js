import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "../../Pages/Home";
import AboutUs from "../../Pages/AboutUs";
import ContactUs from "../../Pages/ContactUs";
import Doctors from "../../Pages/Doctors";
import OurServices from "../../Pages/OurServices";
import Logo from "../../assests/appmd-logo.svg";
import "./navbar.css";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <div>
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
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ourservices" element={<OurServices />} />
        <Route path="doctor" element={<Doctors />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default NavBar;
