import appmdlogo from "../../../assests/app-md-logo.png";
import forgotlefticon from "../../../assests/forgot_img_icon.svg";
import { FaAngleDoubleRight } from "react-icons/fa";
import backicon from "../../../assests/back_icon.svg";
import passwordicon from "../../../assests/password-icon.svg";
import { Link } from "react-router-dom";
import "../resetpassword/resetpassword.css";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
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
                <div className="d-flex flex-column align-items-center">
                  <div className="d-flex flex-column gap-3 resetpassword_content">
                    <h1 className="align-self-center pb-3">
                      Reset My Password
                    </h1>
                    <div className="login_input_signin">
                      <img
                        src={passwordicon}
                        alt=""
                        className="img-fluid input_img"
                      />
                      <input placeholder="Enter New Password" type="password" />
                    </div>
                    <div className="login_input_signin">
                      <img
                        src={passwordicon}
                        alt=""
                        className="img-fluid input_img"
                      />
                      <input
                        placeholder="Confirm New Password"
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="create_but_parent">
                    {/* <a href="sucessmessage" className="create_but mt-4"> */}
                    <Link to="/sucessmessage" className="create_but mt-4">
                      Continue
                      <FaAngleDoubleRight style={{ marginLeft: "20px" }} />
                    </Link>
                    {/* </a> */}
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
