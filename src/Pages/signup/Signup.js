import appmdlogo from "../../assests/app-md-logo.png";
import signupleftimg from "../../assests/signup-left-logo.png";
import memberimg from "../../assests/member-img.png";
import doctorimg from "../../assests/doctor-img.png";
import bussinessimg from "../../assests/bussiness-img.png";
import "../../Pages/signup/Signup.css";

export default function Signup() {
  return (
    <div className="signup_sec">
      <div className="container signup_page">
        <div className="row">
          <div className="col-lg-6 signup_page_left_content">
            <img
              src={appmdlogo}
              alt=""
              className="img-fluid app_logo_responsive"
            />
            <img src={signupleftimg} alt="" className="img-fluid left_img" />
          </div>
          <div className="col-lg-6 signup_page_right_content">
            <div className="right_side">
              <h1 className="signup_page_right_content_header pt-5">Sign Up</h1>
              <h3 className="signup_page_right_content_para pt-5">
                Are you an appMD
              </h3>
              <div>
                <div className="signup_type">
                  <a href="membersignup">
                    <img src={memberimg} alt="" className="img-fluid" />
                  </a>
                  <a href="doctorsignup">
                    <img src={doctorimg} alt="" className="img-fluid" />
                  </a>
                </div>
                <a href="">
                  <img src={bussinessimg} alt="" className="img-fluid" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
