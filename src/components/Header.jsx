import React from "react";

import Banner1 from "../images/new/banner1.jpg";
import Banner2 from "../images/new/banner2.jpg";
import Banner3 from "../images/new/banner3.jpg";
import "../styles/header.css";

function Header() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={Banner2} class="d-block w-100" alt="banner" />
          <div className="header-div">
            <p className="topic">Flying high with life-saving technology</p>
            <p className="sub-topic">
              Learn how GTel helps Singaporean companies to customize
              helicopters for complex missions.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={Banner3} class="d-block w-100" alt="banner" />
          <div className="header-div">
            <p className="topic">Flying high with life-saving technology</p>
            <p className="sub-topic">
              Learn how GTel helps Singaporean companies to customize
              helicopters for complex missions.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={Banner1} class="d-block w-100" alt="banner" />
          <div className="header-div">
            <p className="topic">Flying high with life-saving technology</p>
            <p className="sub-topic">
              Learn how GTel helps Singaporean companies to customize
              helicopters for complex missions.
            </p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Header;
