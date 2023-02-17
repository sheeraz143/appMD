import flipimg1 from "../../assests/flip-img1.png";
import flipbackimg from "../../assests/flip-back-img.png";
import "../../Pages/home/home.css";
import Righrarrow from "../../assests/button-right.svg";
import HomeLogo from "../../assests/homepage-logo.svg";
import consultationimage from "../../assests/group-image.png";
import Ourservicebig from "../../assests/ousrservice-big-img.png";
import Ourservice from "../../assests/ourservice-image.png";
import profilepic from "../../assests/profile-pic.png";
import patientsimage from "../../assests/patients-img.png";
import footerlogo from "../../assests/footer-logo.png";
import locationlogo from "../../assests/location-icon.png";
import mobilelogo from "../../assests/mobile-icon.png";
import maillogo from "../../assests/mail-icon.png";
import facebooklogo from "../../assests/facebook-icon.png";
import instalogo from "../../assests/insta-icon.png";
import youtubelogo from "../../assests/youtube-icon.png";

function Home() {
  return (
    <div>
      {/* banner section */}
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
      {/* OnlineConsultation section*/}
      <div className="OnlineConsultation sec">
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-6 d-flex flex-column justify-content-evenly">
              <h3 className="home_container_secondpage_content_heading">
                Online Medical Consultation
              </h3>
              <span className="bottom_gradient"></span>
              <p className="home_container_secondpage_content_para pt-3  ">
                Located in Columbus, GA, we are here to promote steady and
                marked improvements in your physical and mental wellbeing. We
                pride ourselves in offering a wide array of services to help you
                improve and maintain a healthy lifestyle. Explore our site to
                learn more about what we do here at appMD, and experience
                positive change.
              </p>
              <p className="home_container_secondpage_content_para pt-4">
                appMD is a virtual medical consultancy service provided by US
                trained physicians to various countries around the world.
              </p>
              <p className="home_container_secondpage_content_para pt-4">
                appMD’s goal is to provide treatment recommendations and medical
                opinion for your complex medical problems be it when you are in
                the hospital or at home.
              </p>
              <p className="home_container_secondpage_content_para pt-4">
                appMD's team of physicians have trained in US residency
                <br />
                programs and currently practicing in US hospitals.
              </p>
            </div>
            <div className="col-lg-6">
              <img src={consultationimage} alt="" className="img-responsive" />
            </div>
          </div>
        </div>
      </div>
      {/* OurServices Section */}
      <div className="ourservices_section">
        <div className="container pt-5">
          <div className="col-lg-12 d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
              <h2 className="our_services_header_content">Our Services</h2>
              <span className="bottom_gradient bg_white_bottom"></span>
            </div>
            <a className="view_more" href="#">
              VIEW MORE
            </a>
          </div>
        </div>
        <div className="container pt-1 ">
          <div className="row pt-5">
            <div className="col-lg-6  ">
              <div className="">
                <img src={Ourservicebig} alt="" className="img-fluid" />
              </div>
              <div className="">
                <div className="our_service_page_content">
                  <img src="" alt="" />
                  <div className="d-flex justify-content-between pt-2 align-items-center ">
                    <p className="our_sevices_content_premium">premium</p>
                    <button className="hour_button">
                      <img src="" alt="" className="img-fluid" />
                      <span>1 Hour</span>
                    </button>
                  </div>
                  <h1 className="pt-2">
                    Hospital & Outpatient Medicine <br />
                    (Premium)
                  </h1>
                  <p className="pt-2 our_sevices_content_premium_bottom">
                    This service that will engage specialist consultants for
                    complicated
                    <br /> health issues for ages 16+
                  </p>
                  <div className="pt-3">
                    <button className="booknow_button">
                      BOOK NOW
                      <img src={Righrarrow} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="">
                <div className="d-flex  align-items-center gap-3">
                  <img src={Ourservice} alt="" className="img-fluid" />
                  <p className="our_service_right_side_Para">
                    Hospital & Outpatient Medicine <br />
                    <span className="">(Premium)</span>
                  </p>
                </div>
                <div className="d-flex  align-items-center gap-3 pt-4">
                  <img src={Ourservice} alt="" className="img-fluid" />
                  <p className="our_service_right_side_Para">
                    Hospital & Outpatient Medicine <br />
                    <span className="">(Premium)</span>
                  </p>
                </div>
                <div className="d-flex  align-items-center gap-3 pt-4">
                  <img src={Ourservice} alt="" className="img-fluid" />
                  <p className="our_service_right_side_Para">
                    Hospital & Outpatient Medicine <br />
                    <span className="">(Premium)</span>
                  </p>
                </div>
                <div className="d-flex  align-items-center gap-3 pt-4">
                  <img src={Ourservice} alt="" className="img-fluid" />
                  <p className="our_service_right_side_Para">
                    Hospital & Outpatient Medicine <br />
                    <span className="">(Premium)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*flip_card_section  */}
      {/* flip card1 */}
      <div className="flip_card_section">
        <div className="container ">
          <div className="row d-flex ">
            <div className="col-lg-3 col-md-3 flip_card_height">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src={flipimg1}
                      alt="Avatar"
                      className="img-fluid flip_doctors_image"
                    />
                    <div className="flipcard_front_content">
                      <h3>Dr. Aadil Mohamed, MD</h3>
                      <p>CARDIOLOGIST</p>
                    </div>
                  </div>
                  <div class="flip-card-back">
                    <img src={flipbackimg} alt="" />
                    <h3>Dr. Merry Joy, MBBS</h3>
                    <h5>DERMATOLOGIST</h5>
                    <p>
                      Maecenas vestibulum felis eget dui porttitor, ut sodales
                      massa viverra. Curasd bitur sollicitudin a nibh placerat,
                      Proin elementum. urna vitae accumsan auou sollicitudin.
                      Nullam vitae leo feugiat, maximus purus se. consequat leo.
                      In ano dapibus ut erat. et elementum. Nam facilisis nibh
                      nec leo scelerisque. , sed tem pus lorem. vestibulum.
                    </p>
                    <span>language known</span>
                    <h4>English, Hindi & Urdu</h4>
                  </div>
                </div>
              </div>
            </div>
            {/*flip card2  */}
            <div className="col-lg-3 col-md-3 flip_card_height">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src={flipimg1}
                      alt="Avatar"
                      className="img-fluid flip_doctors_image"
                    />
                    <div className="flipcard_front_content">
                      <h3>Dr. Aadil Mohamed, MD</h3>
                      <p>CARDIOLOGIST</p>
                    </div>
                  </div>
                  <div class="flip-card-back">
                    <img src={flipbackimg} alt="" />
                    <h3>Dr. Merry Joy, MBBS</h3>
                    <h5>DERMATOLOGIST</h5>
                    <p>
                      Maecenas vestibulum felis eget dui porttitor, ut sodales
                      massa viverra. Curasd bitur sollicitudin a nibh placerat,
                      Proin elementum. urna vitae accumsan auou sollicitudin.
                      Nullam vitae leo feugiat, maximus purus se. consequat leo.
                      In ano dapibus ut erat. et elementum. Nam facilisis nibh
                      nec leo scelerisque. , sed tem pus lorem. vestibulum.
                    </p>
                    <span>language known</span>
                    <h4>English, Hindi & Urdu</h4>
                  </div>
                </div>
              </div>
            </div>
            {/*flip card3 */}
            <div className="col-lg-3 col-md-3 flip_card_height">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src={flipimg1}
                      alt="Avatar"
                      className="img-fluid flip_doctors_image"
                    />
                    <div className="flipcard_front_content">
                      <h3>Dr. Aadil Mohamed, MD</h3>
                      <p>CARDIOLOGIST</p>
                    </div>
                  </div>
                  <div class="flip-card-back">
                    <img src={flipbackimg} alt="" />
                    <h3>Dr. Merry Joy, MBBS</h3>
                    <h5>DERMATOLOGIST</h5>
                    <p>
                      Maecenas vestibulum felis eget dui porttitor, ut sodales
                      massa viverra. Curasd bitur sollicitudin a nibh placerat,
                      Proin elementum. urna vitae accumsan auou sollicitudin.
                      Nullam vitae leo feugiat, maximus purus se. consequat leo.
                      In ano dapibus ut erat. et elementum. Nam facilisis nibh
                      nec leo scelerisque. , sed tem pus lorem. vestibulum.
                    </p>
                    <span>language known</span>
                    <h4>English, Hindi & Urdu</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 flip_card_height">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src={flipimg1}
                      alt="Avatar"
                      className="img-fluid flip_doctors_image"
                    />
                    <div className="flipcard_front_content">
                      <h3>Dr. Aadil Mohamed, MD</h3>
                      <p>CARDIOLOGIST</p>
                    </div>
                  </div>
                  <div class="flip-card-back">
                    <img src={flipbackimg} alt="" />
                    <h3>Dr. Merry Joy, MBBS</h3>
                    <h5>DERMATOLOGIST</h5>
                    <p>
                      Maecenas vestibulum felis eget dui porttitor, ut sodales
                      massa viverra. Curasd bitur sollicitudin a nibh placerat,
                      Proin elementum. urna vitae accumsan auou sollicitudin.
                      Nullam vitae leo feugiat, maximus purus se. consequat leo.
                      In ano dapibus ut erat. et elementum. Nam facilisis nibh
                      nec leo scelerisque. , sed tem pus lorem. vestibulum.
                    </p>
                    <span>language known</span>
                    <h4>English, Hindi & Urdu</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* patients_say_section */}
      <div className="patients_say_section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-8">
              <div className="patients_card_header d-flex flex-column">
                <h1>What our patients say</h1>
                <span className="bottom_gradient"></span>
              </div>
              <div className="patients_cards mt-5">
                <div className="card_top_section">
                  <div className="profile_details d-flex align-items-center gap-2">
                    <img src={profilepic} alt="" />
                    <div className="profile_details_name">
                      <h5>Siddartha Joshi</h5>
                      <p>New York</p>
                    </div>
                  </div>
                  <div className="next_card_select">
                    <img src="" alt="" />
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="card_bottom_section">
                  <p>
                    Maecenas vestibulum felis eget dui porttitor, ut sodales
                    massa viverra. Curasd bitur sollicitudin a nibh placerat.
                    Proin elementum urna vitae accumsan auou sollicitudin.
                    Nullam vitae leo feugiat, maximus purus sed, consequat leo.
                    In ano dapibus ut erat et elementum. Nam facilisis nibh nec
                    leo scelerisque. , sed tem pus lorem. vestibulum.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pt-5">
              <img src={patientsimage} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      {/* footer section */}
      <div className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer_section_part1">
                <img src={footerlogo} alt="logo" className="img-fluid" />
                <p>Advanced Medicine. Closer than before.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer_section_part2">
                <a href="#" className="d-flex gap-3 pb-3 img-fluid">
                  <img src={locationlogo} alt="" />
                  <p>Columbus, GA, USA</p>
                </a>
                <a href="#" className="d-flex gap-3 pb-3 img-fluid">
                  <img src={mobilelogo} alt="" />
                  <p>USA : +1 706 610 0080 (EST)</p>
                </a>
                <a href="#" className="d-flex gap-3 pb-3 img-fluid">
                  <img src={mobilelogo} alt="" />
                  <p>INDIA : +91 96772 07309 (IST)</p>
                </a>
                <a href="#" className="d-flex gap-3 pb-3 img-fluid">
                  <img src={maillogo} alt="" />
                  <p>info@mariatech.co www.mariatech.co</p>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer_section_part3">
                <div className="footer_section_part3_header">
                  <h1 className="pt-3">Subscribe to our NEWSLETTER</h1>
                  <div className="d-flex pt-2">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="left_input"
                    />
                    <input
                      type="text"
                      placeholder="SUBSCRIBE NOW"
                      className="right_input"
                    />
                  </div>
                  <div className="social_links d-flex pt-4">
                    <p>Follow us on</p>
                    <a
                      href="#"
                      className="d-flex align-items-center gap-2 img-fluid"
                    >
                      <img src={facebooklogo} alt="" />
                      <p>Facebook</p>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center gap-2 img-fluid"
                    >
                      <img src={youtubelogo} alt="" />
                      <p>Youtube</p>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center gap-2 img-fluid"
                    >
                      <img src={instalogo} alt="" />
                      <p>Instagram</p>
                    </a>
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

export default Home;
