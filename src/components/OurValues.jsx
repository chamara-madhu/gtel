import React from "react";
import { Parallax } from "react-parallax";

import Value from "../images/banner3.jpg";

import "../styles/value.css";

function OurValues() {
  return (
    <div className="row m-0">
      <div className="col p-0">
        <Parallax blur={1} bgImage={Value} bgImageAlt="the cat" strength={500}>
          <div style={{ height: 500 }}>
            <div className="expertise-div">
              <p>
                Rely on our <b style={{ color: "#fbba00" }}>expertise</b> and{" "}
                <b style={{ color: "#fbba00" }}>our business network</b> to meet
                your needs
              </p>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default OurValues;
