import React from "react";
import { Link, withRouter } from "react-router-dom";

import Lpgo from "../images/logo.png";
import Flag from "../images/singapore-flag-icon.jpg";

import "../styles/navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar sticky-top navbar-expand-sm navbar-light bg-white">
      <a className="navbar-brand" href="#">
        <img src={Lpgo} alt="logo" width="80" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto main-links-ul">
          <li className="nav-item">
            <Link
              className={
                props.history.location.pathname === "/"
                  ? "nav-link link-active"
                  : "nav-link"
              }
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                props.history.location.pathname === "/about-us"
                  ? "nav-link link-active"
                  : "nav-link"
              }
              to="/about-us"
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                props.history.location.pathname === "/our-services"
                  ? "nav-link link-active"
                  : "nav-link"
              }
              to="/our-services"
            >
              Our Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                props.history.location.pathname === "/contact-us"
                  ? "nav-link link-active"
                  : "nav-link"
              }
              to="/contact-us"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto country-ul">
          <li className="nav-item">
            <img src={Flag} alt="Singapore" width="25" />
            Singapore
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
