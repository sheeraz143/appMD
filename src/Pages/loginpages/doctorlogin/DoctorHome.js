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
          <div className="col-lg-7 membersignup_page_left_content">
            <img src={appmdlogo} alt="" className="img-fluid " />
            <img src={signupleftimg} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-5 member_container_right">
            <div className="member_container_right_side">
              {!signInSelected && <h1>Doctor</h1>}
              <div>
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
