import Ourservicebig from "../assests/ousrservice-big-img.png";
import Ourservice from "../assests/ourservice-image.png";
import Righrarrow from "../assests/button-right.svg";
import "../navbar/navbar.css"

export default function OurServicesSection() {
  return (
    <div className="home_container_thirdpage">
    <div className="container pt-5 ">
      <div className="row pt-5">
        <div className="col-lg-6  ">
          <div className="">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="our_services_header_content">Our Services</h2>
              <p>VIEW MORE</p>
            </div>
            <img src={Ourservicebig} alt="" className="img-fluid" />
          </div>
          <div className="">
            <div className="our_service_page_content">
              <img src="" alt="" />
              <div className="d-flex justify-content-between pt-2 align-items-center ">
                <p className="our_sevices_content_premium">premium</p>
                <button className="hour_button">
                  <img src="" alt="" className="img-fluid" />
                  <span>1 Hour</span>
                </button>
              </div>
              <h1 className="pt-2">
                Hospital & Outpatient Medicine <br />
                (Premium)
              </h1>
              <p className="pt-2 our_sevices_content_premium_bottom">
                This service that will engage specialist consultants for
                complicated
                <br /> health issues for ages 16+
              </p>
              <div className="pt-3">
                <button className="booknow_button">
                  BOOK NOW
                  <img src={Righrarrow} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 pt-5">
          <div className="">
            <div className="d-flex  align-items-center gap-3">
              <img src={Ourservice} alt="" className="img-fluid" />
              <p className="our_service_right_side_Para">
                Hospital & Outpatient Medicine <br />
                <span className="">(Premium)</span>
              </p>
            </div>
            <div className="d-flex  align-items-center gap-3 pt-4">
              <img src={Ourservice} alt="" className="img-fluid" />
              <p className="our_service_right_side_Para">
                Hospital & Outpatient Medicine <br />
                <span className="">(Premium)</span>
              </p>
            </div>
            <div className="d-flex  align-items-center gap-3 pt-4">
              <img src={Ourservice} alt="" className="img-fluid" />
              <p className="our_service_right_side_Para">
                Hospital & Outpatient Medicine <br />
                <span className="">(Premium)</span>
              </p>
            </div>
            <div className="d-flex  align-items-center gap-3 pt-4">
              <img src={Ourservice} alt="" className="img-fluid" />
              <p className="our_service_right_side_Para">
                Hospital & Outpatient Medicine <br />
                <span className="">(Premium)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
