import React from "react";
import { Link } from "react-router-dom";

import "../styles/footer.css";

import Logo from "../images/logo.png";
import LogoFooter from "../images/logo-footer.png";

function Footer() {
  return (
    <div className="container-fluid footer-sec">
      <div className="row footer">
        <div className="col-sm-6 col-md-3 pt-5  text-center">
          <p className="mb-4 footer-sub-heading">Quick links</p>
          <Link className="footer-link" to="/cars">
            Home
          </Link>
          <br />
          <Link className="footer-link" to="/about">
            About us
          </Link>
          <br />
          <Link className="footer-link" to="/about">
            Our Services
          </Link>
        </div>

        <div className="col-sm-6 col-md-3 pt-5 text-center">
          <p className="mb-4 footer-sub-heading">Support</p>
          <Link className="footer-link" to="/faq">
            FAQs
          </Link>
          <br />
          <Link className="footer-link" to="/contact">
            Contact us
          </Link>
        </div>

        <div className="col-sm-6 col-md-3 pt-5 text-center">
          <p className="mb-4 footer-sub-heading">Follow Us</p>
          <a
            href="https://www.facebook.com/Ransis-Arcade-1727332197501318/"
            target="_blank"
            className="follow-us mr-3"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://www.facebook.com/Ransis-Arcade-1727332197501318/"
            target="_blank"
            className="follow-us"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="col-md-3 pt-5">
          <table
            align="center"
            style={{ margin: "auto" }}
            style={{ fontWeight: 300 }}
          >
            <tbody>
              <tr>
                <td colSpan="2">
                  <img src={LogoFooter} className="footer-logo" alt="logo" />
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa fa-map-marker-alt mr-4" />
                </td>
                <td>1 Key Siang Road,</td>
              </tr>

              <tr>
                <td />
                <td>#04-02,</td>
              </tr>
              <tr>
                <td />
                <td>Singapore,</td>
              </tr>

              <tr>
                <td />
                <td>248922</td>
              </tr>

              <tr>
                <td>
                  <i className="fa fa-envelope" />
                </td>
                <td>
                  <Link to="mailto:ransisarcade@gmail.com">
                    info@gtelrongrui.com
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  <i className="fas fa-phone fa-rotate-90"></i>
                </td>
                <td>(+61) 8693 7268</td>
              </tr>
              <tr>
                <td></td>
                <td>(+61) 6735 1311</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row footer mb-0">
        <div className="col mt-3">
          <span
            style={{
              fontSize: "14px",
            }}
          >
            &copy; 2020 GTel Rongrui
          </span>
          <span
            style={{
              display: "block",
              float: "right",
              background: "#03738C",
              padding: "7px 12px",
              color: "#fff",
              fontSize: "30px",
              cursor: "pointer",
            }}
            // onClick={this.handleTopUp}
          >
            <i className="fas fa-angle-up"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
