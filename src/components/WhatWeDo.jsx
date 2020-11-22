import React from "react";

import Do1 from "../images/two-way-communication2.png";
import Do2 from "../images/parchment.png";
import Do3 from "../images/two-way-communication.png";
import Do4 from "../images/desktop-computer.png";

import "../styles/what-we-do.css";

function WhatWeDo() {
  return (
    <>
      <div className="row m-0" style={{ height: "50%" }}>
        <div className="col what-we-do-div m-3">
          <img src={Do1} alt="service" />
          <p className="title">TRADE WITH</p>
          <p className="sub-title">CONFIDENCE</p>
        </div>
        <div className="col what-we-do-div my-3 mr-3">
          <img src={Do2} alt="service" />
          <p className="title">FREE QUOTES FROM</p>
          <p className="sub-title">SELLERS</p>
        </div>
      </div>

      <div className="row m-0" style={{ height: "50%" }}>
        <div className="col what-we-do-div mx-3 mb-3">
          <img src={Do3} alt="service" />
          <p className="title">VERIFIED CONNECTED</p>
          <p className="sub-title">BUYERS</p>
        </div>
        <div className="col what-we-do-div mb-3 mr-3">
          <img src={Do4} alt="service" />
          <p className="title">24/7</p>
          <p className="sub-title">HELP CENTER</p>
        </div>
      </div>
    </>
  );
}

export default WhatWeDo;
