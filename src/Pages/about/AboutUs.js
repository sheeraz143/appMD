import React from "react";
import NavBar from "../../utils/navbar/NavBar";
import "../about/about.css";
import { Link } from "react-router-dom";
import Footer from "../../utils/navbar/footer/Footer";

function AboutUs() {
  return (
    <>
      <div className="about_header-section">
        <NavBar />
      </div>
      <div className="aboutus_sec">
        <div className="container pt-4 pb-2">
          <div className="row">
            <div className="col-lg-4 pt-5" style={{ marginTop: "20px" }}>
              <Link to="" className="left_content mb-3">
                <img src="" alt="" />
                <p>What we do?</p>
              </Link>
              <Link to="" className="left_content mb-3">
                <img src="" alt="" />
                <p>Uniqueness</p>
              </Link>
              <Link to="" className="left_content mb-3">
                <img src="" alt="" />
                <p>Premium Services</p>
              </Link>
              <Link to="" className="left_content mb-3">
                <img src="" alt="" />
                <p>Hosted Services</p>
              </Link>
            </div>
            <div className="col-lg-8 ">
              <div className="aboutus_top_section d-flex align-items-center flex-column pb-4 gap-2">
                <h1>About Us</h1>
                <span className="bottom_gradient"></span>
              </div>
              <div className="aboutus_right">
                <h1 className="pb-3">What we do?</h1>
                <p className="pb-3">
                  appMD is a virtual medical consultancy service provided by US
                  trained physicians to various countries around the world.
                  appMD’s goal is to provide treatment recommendations and
                  medical opinion for your complex medical problems be it when
                  you are in the hospital or at home. appMD's team of physicians
                  have trained in US residency programs and currently practicing
                  in US hospitals.
                </p>
                <p className="pb-3">
                  appMD physicians will give recommendations for all non
                  surgical problems including heart failure, heart COPD(Chronic
                  obstructive pulmonary disease), pneumonia and other lung
                  problems, covid complications, blood disorders, stomach and
                  intestine problems, cancer diagnosis, muscle and joint
                  problems, infections, critically ill patients in ICU and more.
                </p>
                <p className="pb-3">
                  appMD provides these services at an affordable cost compared
                  to other services which caters from US across the globe
                  currently in the market. We will not be able to prescribe any
                  medications at this time.
                </p>
                <p className="pb-3">
                  Currently we offer Hospital & Outpatient Medicine consulting
                  services for non US residents and ages 16+ only.
                </p>
                <p className="pb-3">
                  Maternal & Child Nutrition services are available for anyone
                  including US residents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
