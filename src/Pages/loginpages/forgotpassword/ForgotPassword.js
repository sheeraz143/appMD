import appmdlogo from "../../../assests/app-md-logo.png";
import forgotlefticon from "../../../assests/forgot_img_icon.svg";
import backicon from "../../../assests/back_icon.svg";
import emailicon from "../../../assests/email-icon.svg";
import { FaAngleDoubleRight } from "react-icons/fa";
import "../forgotpassword/ForgotPassword.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  return (
    <div className="MemberSignUp_sec">
      <div className="container MemberSignUp_page">
        <div className="row">
          <div className="col-lg-6 membersignup_page_left_content">
            <img src={appmdlogo} alt="" className="img-fluid app_logo_width" />
            <img
              src={forgotlefticon}
              alt=""
              className="img-fluid sigup_left_img_width"
            />
          </div>
          <div className="col-lg-6 member_container_right">
            <div className="member_container_right_side">
              <div className="back_but">
                <img src={backicon} alt="" />
                <button className="back_button" onClick={() => navigate(-1)}>
                  Back
                </button>
              </div>
              <div style={{ paddingTop: "150px" }}>
                <div className="forgot_password_content">
                  <h1 className="pb-3">Forgot Password</h1>
                  <p className="pb-4">You will receive OTP</p>
                  <div className="login_input_signin pb-4">
                    <img
                      src={emailicon}
                      alt=""
                      className="img-fluid input_img"
                    />
                    <input placeholder="Email Id" type="text" />
                  </div>
                </div>
                <div className="create_but_parent">
                  {/* <a href="otp" className="create_but"> */}
                  <Link to="/otp" className="create_but">
                    Send OTP
                    <FaAngleDoubleRight style={{ marginLeft: "20px" }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
