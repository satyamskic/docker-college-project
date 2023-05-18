import React from "react";
import { NavLink } from "react-router-dom";
import './css/NavBar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <NavLink style={{  textDecoration: "none" }} className="link" to="/">
          <h1 style={{ color: "white" }}>Docker GUI Application</h1>
        </NavLink>
      </div>

      <ul className="nav ml-auto">
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/root">
            <h2 className="nav-menu-color">Dashboard</h2>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/service">
            <h2 className="nav-menu-color">Services</h2>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/about">
            <h2 className="nav-menu-color">About</h2>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/contact">
            <h2 className="nav-menu-color">Contact</h2>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
