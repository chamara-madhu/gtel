import React from "react";

import WhatWeDo from "./WhatWeDo";

import "../styles/enquery.css";

function Enquery() {
  return (
    <div className="row m-0">
      <div className="col p-0">
        <WhatWeDo />
      </div>
      <div className="col p-0">
        <div className="enquery-div">
          <p className="heading">Tell us what you need</p>
          <form>
            <div class="form-row">
              <div class="form-group col">
                <label for="req">Requrements</label>
                <input
                  type="email"
                  class="form-control"
                  id="req"
                  placeholder="Enter product/service name"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Full Name"
                />
              </div>
              <div class="form-group col">
                <label for="email">Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="name@company.com"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col">
                <label for="company">Company</label>
                <input
                  type="text"
                  class="form-control"
                  id="company"
                  placeholder="Company Name"
                />
              </div>
              <div class="form-group col">
                <label for="email">Phone Number</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col">
                <label for="who">I am a</label>
                <select id="who" class="form-control">
                  <option selected>Choose...</option>
                  <option>Seller</option>
                </select>
              </div>
            </div>
            <button type="submit" class="btn submit-btn">
              Submit
            </button>
            <p>* To achive</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Enquery;
