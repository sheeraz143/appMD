import "./MemberSignUp.css";
import appmdlogo from "../../../assests/app-md-logo.png";
import signupleftimg from "../../../assests/signup-left-logo.png";
// import firstnameicon from "../../../assests/firstname-icon.svg";
// import emailicon from "../../../assests/email-icon.svg";
// import mobilenumicon from "../../../assests/mobilenum-icon.svg";
// import passwordicon from "../../../assests/password-icon.svg";
// import { FaAngleDoubleRight } from "react-icons/fa";
import MemberSignUp from "./MemberSignUp";
import MemberSignIn from "./MemberSignIn";
import { useState } from "react";

export default function MemberHome() {
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
              {!signInSelected && <h1>Member</h1>}
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
              {signInSelected && <MemberSignIn />}
              {!signInSelected && <MemberSignUp />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
