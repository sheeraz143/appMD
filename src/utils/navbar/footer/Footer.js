import footerlogo from "../../../assests/footer-logo.png";
import locationlogo from "../../../assests/location-icon.png";
import mobilelogo from "../../../assests/mobile-icon.png";
import maillogo from "../../../assests/mail-icon.png";
import facebooklogo from "../../../assests/facebook-icon.png";
import instalogo from "../../../assests/insta-icon.png";
import youtubelogo from "../../../assests/youtube-icon.png";
import sendicon from "../../../assests/send-icon.png";
import "../footer/footer.css";
// import ReactFlagsSelect from "react-flags-select";
// import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";

export default function Footer() {
  // const [select, setSelect] = useState("US");
  // const onSelect = code => setSelect(code);
  return (
    <div className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 footer_sec_responsive">
            <div className="footer_section_part1">
              <img src={footerlogo} alt="logo" className="img-fluid pb-3" />
              <p>Advanced Medicine. Closer than before.</p>
              {/* <ReactFlagsSelect
                selected={select}
                onSelect={onSelect}
                countries={["IN", "US"]}
              /> */}
              <select class="selectpicker" data-live-search="true">
                <option data-content="<span class='flag-icon flag-icon-us'></span> US">
                  US
                </option>
                <option data-content="<span class='flag-icon flag-icon-gb'></span> UK">
                  UK
                </option>
                <option data-content="<span class='flag-icon flag-icon-ca'></span> CD">
                  CN
                </option>
                <option data-content="<span class='flag-icon flag-icon-au'></span> AS">
                  As
                </option>
              </select>
            </div>
          </div>
          <div className="col-lg-3 pt-5 footer_sec_responsive">
            <div className="footer_section_part2">
              <a href="#" className="d-flex gap-3 pb-3 img-fluid">
                <img src={locationlogo} alt="" />
                <p>
                  Columbus, GA, USA
                  <br /> Coimbatore, TN, India{" "}
                </p>
              </a>
              <a href="#" className="d-flex gap-3 pb-3 img-fluid">
                <img src={mobilelogo} alt="" />
                <p>
                  USA : +1 706 610 0080 (EST)
                  <br /> INDIA : +91 96772 07309 (IST)
                </p>
              </a>
              <a href="#" className="d-flex gap-3 pb-3 img-fluid">
                <img src={maillogo} alt="" />
                <p>info@mariatech.co</p>
              </a>
              <a href="#" className="d-flex gap-3 pb-3 img-fluid">
                <FaGlobe style={{ height: "20px", width: "20px" }} />
                <p>www.mariatech.co</p>
              </a>
            </div>
          </div>
          <div className="col-lg-5 pt-5 footer_sec_responsive">
            <div className="footer_section_part3">
              <div className="footer_section_part3_header">
                <h1 className="pt-3">Subscribe to our NEWSLETTER</h1>
                <div className="d-flex pt-2">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="left_input"
                  />
                  <div className="d-flex footer_inputs">
                    <a className="right_input" href="#">
                      SUBSCRIBE NOW
                    </a>
                    <img
                      src={sendicon}
                      alt=""
                      className="img-fluid send_icon_footer img-fluid"
                    />
                  </div>
                </div>
                <div className="social_links d-flex align-items-center pt-4">
                  <span>Follow us on</span>
                  <a href="#" className="d-flex align-items-center gap-2 ">
                    <img
                      src={facebooklogo}
                      alt=""
                      className=" social_img_response img-fluid"
                    />
                    <p>Facebook</p>
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center gap-2 img-fluid"
                  >
                    <img
                      src={youtubelogo}
                      alt=""
                      className=" social_img_response img-fluid"
                    />
                    <p>Youtube</p>
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center gap-2 img-fluid"
                  >
                    <img
                      src={instalogo}
                      alt=""
                      className=" social_img_response img-fluid"
                    />
                    <p>Instagram</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-3">
        <div className="row">
          <div className="col-lg-12">
            <span className="footer_line"></span>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="row align-items-center justify-content-between">
          <div className="col-lg-7 col-md-12 footer_bottom_content_left pt-3 pb-3 footer_sec_responsive">
            <p>© 2022 BY MARIA TECHNOLOGIES</p>
          </div>
          <div className="col-lg-5 col-md-12 footer_bottom_content_right pt-3 pb-3 footer_sec_responsive">
            Powered by
            <a
              className=""
              href="https://www.cortexmarketing.in/"
              style={{ textDecoration: "unset", color: "#fff" }}
            >
              Cortex Media Marketing Pvt Ltd
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
