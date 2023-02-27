import appmdlogo from "../../../assests/app-md-logo.png";
import forgotlefticon from "../../../assests/forgot_img_icon.svg";
import { FaAngleDoubleRight } from "react-icons/fa";
// import passwordicon from "../../../assests/password-icon.svg";
import "../successfulmessage/successmessage.css";
import backicon from "../../../assests/back_icon.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SuccessMessage() {
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
                  <div className="success_msg">
                    <h1 className="pb-3">Password Reset</h1>
                    <p>
                      Your password has been successfully reset.
                      <br /> Click below to log in.
                    </p>
                  </div>
                  <div className="create_but_parent">
                    {/* <a href="#" className="create_but mt-4"> */}
                    <Link to="" className="create_but mt-4">
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
  );
}
