import passwordicon from "../../../assests/password-icon.svg";
import emailicon from "../../../assests/email-icon.svg";
import { FaAngleDoubleRight } from "react-icons/fa";
import fbicon from "../../../assests/form-fb-icon.svg";
import googleicon from "../../../assests/form-google-icon.svg";
import "../memberlogin/MemberSignIn.css";
import { Link } from "react-router-dom";

export default function DoctorSignIn() {
  // return (
  //   <div className="signin_sec">
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-lg-7 membersignup_page_left_content">
  //           <img src={appmdlogo} alt="" className="img-fluid " />
  //           <img src={signupleftimg} alt="" className="img-fluid left_img" />
  //         </div>
  //         <div className="col-lg-5 member_container_right pt-5">
  //           <div className="membersign_container_right_side">
  //             <div className="login_headers d-flex gap-3">
  //               <a href="#">Sign Up</a>
  //               <a href="#">Sign In</a>
  //             </div>

  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="member_container_sigin_right_side">
      <div className="login_inputs_signin">
        <div className="login_input_signin">
          <img src={emailicon} alt="" className="img-fluid input_img" />
          <input placeholder="Email Id" type="text" />
        </div>
        <div className="login_input_signin">
          <img src={passwordicon} alt="" className="img-fluid input_img" />
          <input placeholder="Password" type="password" />
        </div>

        <div class="form-check checkbox_line check_box_signin">
          <input class="form-check-input" type="checkbox" value="" />
          <label>Remember Me</label>
          <div>
            {/* <a href="#">Forgot Password?</a> */}
            <Link to="/forgotpassword">Forgot Password?</Link>
          </div>
        </div>
        <div className="create_but_parent">
          <a href="#" className="create_but">
            SIGN IN
            <FaAngleDoubleRight style={{ marginLeft: "63px" }} />
          </a>
        </div>
        <p className="or">or</p>
        <div className="social_links">
          <span className="social_left_content">or sign in with</span>
          <a href="#">
            <img src={fbicon} alt="" />
            <img src={googleicon} alt="" />
          </a>
          <a href="#"></a>
        </div>
        <div className="d-flex align-items-center align-self-center gap-1">
          <p className="already_have_account">Don't have an account?</p>
          <a href="#" className="signin_link">
            SIGN UP
          </a>
        </div>
      </div>
    </div>
  );
}
