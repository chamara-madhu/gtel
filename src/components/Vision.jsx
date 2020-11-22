import React from "react";

import Banner1 from "../images/banner1.jpg";
import Banner2 from "../images/banner2.jpg";
import VisionIcon from "../images/vision.gif";

import "../styles/vision.css";

function Vision() {
  return (
    <div
      id="vision-mission"
      class="carousel slide carousel-fade"
      data-interval="false"
      data-ride="carousel"
    >
      {/* <ol class="carousel-indicators">
        <li data-target="#vision-mission" data-slide-to="0" class="active"></li>
        <li data-target="#vision-mission" data-slide-to="1"></li>
      </ol> */}
      <div class="carousel-inner text-light">
        <div class="carousel-item active">
          <div className="row m-0">
            <div className="col-6 p-0">
              <img src={VisionIcon} class="d-block w-100" alt="banner" />
            </div>
            <div
              className="col-6 content-col"
              style={{ background: "#F26E22" }}
            >
              <h1 className="heading">Vision</h1>
              <p className="desc">
                Making long lasting relationships with the world market place,
                making it our trading village.
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div className="row m-0">
            <div
              className="col-6  content-col"
              style={{ background: "#F26E22" }}
            >
              <h1 className="heading">Mission</h1>
              <p className="desc">
                Sustainable resource allocation and distribution with trustee
                partners worldwide providing world class consultation for all
                trading aspects.
              </p>
            </div>
            <div className="col-6 p-0">
              <img src={VisionIcon} class="d-block w-100" alt="banner" />
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#vision-mission"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#vision-mission"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Vision;
