import HomeLogo from "../assests/homepage-logo.svg";
import Righrarrow from "../assests/button-right.svg";
export default function BannerSection() {
  return (
    <div className="banner-sec bg_gradiant">
      <div className="container pt-4 ">
        <div className="row pt-5">
          <div className="col-lg-6 md-4 pt-4 header_content home_content ">
            <div className="home_content">
              <h1>
                Find a DOCTOR
                <br />
                <span>& Book ONLINE</span>
              </h1>
              <h3 className="header_text text-left pt-3">
                Fusce efficitur lacus a tellus sodales, sed efficitur purus
                <br /> fermentum. Aenean rhoncus porttitor consequat. Aliqan
                <br /> uam vehicula, justo nec feugiat facilisis.
              </h3>
              <div className="text-center pt-3">
                <button className="col-md-4 col-lg-2 but_get_started ">
                  GET STARTED
                  <img src={Righrarrow} className="img-fluid" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={HomeLogo} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
