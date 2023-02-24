import "./DoctorSIgnUp.css";
import appmdlogo from "../../../assests/app-md-logo.png";
import signupleftimg from "../../../assests/signup-left-logo.png";
import firstnameicon from "../../../assests/firstname-icon.svg";
import emailicon from "../../../assests/email-icon.svg";
import mobilenumicon from "../../../assests/mobilenum-icon.svg";
import passwordicon from "../../../assests/password-icon.svg";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function DoctorSignUp() {
  // return (
  //   <div className="MemberSignUp_sec">
  //     <div className="container MemberSignUp_page">
  //       <div className="row">
  //         <div className="col-lg-7 membersignup_page_left_content">
  //           <img src={appmdlogo} alt="" className="img-fluid " />
  //           <img src={signupleftimg} alt="" className="img-fluid left_img" />
  //         </div>
  //         <div className="col-lg-5 member_container_right">
  //           <div className="member_container_right_side">
  //             <h1>Doctor</h1>
  //             <div className="login_headers d-flex gap-3">
  //               <a href="#">Sign Up</a>
  //               <a href="/membersignin">Sign In</a>
  //             </div>
           
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="login_inputs">
      <div className="login_input">
        <img src={firstnameicon} alt="" className="img-fluid input_img" />
        <input placeholder="First Name" type="text" />
      </div>
      <div className="login_input ">
        <img src={firstnameicon} alt="" className="img-fluid input_img" />
        <input placeholder="Last Name" type="text" />
      </div>
      <div className="login_input">
        <img src={emailicon} alt="" className="img-fluid input_img" />
        <input placeholder="Email Id" type="text" />
      </div>
      <div className="login_input">
        <img src={mobilenumicon} alt="" className="img-fluid input_img" />
        <input placeholder="Mobile Number" type="number" />
      </div>
      <div className="login_input">
        <img src={passwordicon} alt="" className="img-fluid input_img" />
        <input placeholder="Password" type="password" />
      </div>
      <div class="form-check checkbox_line">
        <input class="form-check-input" type="checkbox" value="" />
        <label>I read and agree to the</label>
        <a href="#">Terms and Conditions</a>
      </div>
      <div className="create_but_parent">
        <a href="#" className="create_but">
          CREATE ACCOUNT
          <FaAngleDoubleRight style={{ marginLeft: "20px" }} />
        </a>
      </div>
      <div className="d-flex align-items-center align-self-center">
        <p className="already_have_account">Already have an account?</p>
        <a href="#" className="signin_link">
          {" "}
          SIGN IN
        </a>
      </div>
    </div>
  );
}
