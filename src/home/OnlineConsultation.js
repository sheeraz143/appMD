import "../utils/navbar/navbar.css";
import consultationimage from "../assests/group-image.png";

export default function OnlineConsultation() {
  return (
    <div>
      <div className="container">
        <div className="row pt-5">
          <div className="col-lg-6 d-flex flex-column justify-content-evenly">
            <h3 className="home_container_secondpage_content_heading">
              Online Medical Consultation
            </h3>
            <span className="bottom_gradient"></span>
            <p className="home_container_secondpage_content_para pt-3  ">
              Located in Columbus, GA, we are here to promote steady and marked
              improvements in your physical and mental wellbeing. We pride
              ourselves in offering a wide array of services to help you improve
              and maintain a healthy lifestyle. Explore our site to learn more
              about what we do here at appMD, and experience positive change.
            </p>
            <p className="home_container_secondpage_content_para pt-4">
              appMD is a virtual medical consultancy service provided by US
              trained physicians to various countries around the world.
            </p>
            <p className="home_container_secondpage_content_para pt-4">
              appMD’s goal is to provide treatment recommendations and medical
              opinion for your complex medical problems be it when you are in
              the hospital or at home.
            </p>
            <p className="home_container_secondpage_content_para pt-4">
              appMD's team of physicians have trained in US residency
              <br />
              programs and currently practicing in US hospitals.
            </p>
          </div>
          <div className="col-lg-6">
            <img src={consultationimage} alt="" className="img-responsive" />
          </div>
        </div>
      </div>
    </div>
  );
}
