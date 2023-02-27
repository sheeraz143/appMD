import "../memberlogin/MemberSignUp.css";
import appmdlogo from "../../../assests/app-md-logo.png";
import signupleftimg from "../../../assests/signup-left-logo.png";
import { useState } from "react";
import DoctorSignIn from "./DoctorSIgnIn";
import DoctorSignUp from "./DoctorSIgnUp";

export default function DoctorHome() {
  const [signInSelected, setSignInSelected] = useState(false);
  return (
    <div className="MemberSignUp_sec">
      <div className="container MemberSignUp_page">
        <div className="row">
          <div className="col-lg-6 membersignup_page_left_content">
            <img src={appmdlogo} alt="" className="img-fluid app_logo_width" />
            <img
              src={signupleftimg}
              alt=""
              className="img-fluid sigup_left_img_width"
            />
          </div>
          <div className="col-lg-6 member_container_right">
            <div className="member_container_right_side">
              {!signInSelected && <h1 className="pt-3">Doctor</h1>}
              <div className="button_headers d-flex gap-2">
                <button
                  className={
                    !signInSelected
                      ? `login_headers_selected`
                      : `login_headers_unselected`
                  }
                  onClick={() => {
                    setSignInSelected(false);
                  }}
                >
                  Sign Up
                </button>
                <button
                  className={
                    !signInSelected
                      ? `login_headers_unselected`
                      : `login_headers_selected`
                  }
                  onClick={() => {
                    setSignInSelected(true);
                  }}
                >
                  Sign In
                </button>
              </div>
              {signInSelected && <DoctorSignIn />}
              {!signInSelected && <DoctorSignUp />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
