import OTPInput from "otp-input-react";
import backicon from "../../../assests/back_icon.svg";
import forgotlefticon from "../../../assests/forgot_img_icon.svg";
import { useState } from "react";
import appmdlogo from "../../../assests/app-md-logo.png";
import { FaAngleDoubleRight } from "react-icons/fa";
import "../otp/otp.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function OtpPage() {
  const navigate = useNavigate();
  const [OTP, setOTP] = useState("");
  return (
    <div>
      <div className="MemberSignUp_sec">
        <div className="container MemberSignUp_page">
          <div className="row">
            <div className="col-lg-6 membersignup_page_left_content">
              <img
                src={appmdlogo}
                alt=""
                className="img-fluid app_logo_width"
              />
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
                  <div className="d-flex flex-column align-items-center">
                    <h1 className="pb-4">Enter Your OTP</h1>
                    <div className="otp_inputs">
                      <OTPInput
                        value={OTP}
                        onChange={setOTP}
                        autoFocus
                        OTPLength={6}
                        otpType="number"
                        disabled={false}
                        // secure
                      />
                    </div>
                    <span className="d-flex gap-2 otp_expires">
                      OTP Expires in - 02 : 24 <p>Resend OTP</p>
                    </span>
                    <div className="create_but_parent">
                      {/* <a href="resetpassword" className="create_but"> */}
                      <Link to="/resetpassword" className="create_but">
                        Continue
                        <FaAngleDoubleRight style={{ marginLeft: "20px" }} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
