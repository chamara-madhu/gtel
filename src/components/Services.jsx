import React from "react";

import Banner1 from "../images/banner1.jpg";
import Banner2 from "../images/banner2.jpg";
import Service from "../images/service.jpg";
import "../styles/header.css";

function Services() {
  return (
    <div
      id="services"
      class="carousel slide carousel-fade"
      data-interval="false"
      data-ride="carousel"
    >
      {/* <ol class="carousel-indicators">
        <li data-target="#services" data-slide-to="0" class="active"></li>
        <li data-target="#services" data-slide-to="1"></li>
      </ol> */}
      <div class="carousel-inner text-light">
        <div class="carousel-item active">
          <div className="row m-0">
            <div className="col-6 p-0 img-content">
              <img src={Service} class="d-block" alt="banner" />
            </div>
            <div
              className="col-6 content-col"
              style={{ background: "#03738C" }}
            >
              <h1 className="heading">Asset Managment Consulting</h1>
              <p className="desc">
                wholly intent on taking care of a client's investments, wealth
                managers take a broader look at their entire financial
                circumstances in order to optimise their money in a way that
                achieves individual goals and ambitions.
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div className="row m-0">
            <div
              className="col-6 content-col"
              style={{ background: "#03738C" }}
            >
              <h1 className="heading">Asset Managment Consulting</h1>
              <p className="desc">
                wholly intent on taking care of a client's investments, wealth
                managers take a broader look at their entire financial
                circumstances in order to optimise their money in a way that
                achieves individual goals and ambitions.
              </p>
            </div>
            <div className="col-6 p-0 img-content">
              <img src={Service} class="d-block" alt="banner" />
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#services"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#services"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Services;
