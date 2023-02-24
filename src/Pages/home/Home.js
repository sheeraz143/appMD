import cropimg from "../../assests/cropimg.png";
import flipbackimg from "../../assests/flip-back-img.png";
import "../../Pages/home/home.css";
import Righrarrow from "../../assests/button-right.svg";
import HomeLogo from "../../assests/homepage-logo.svg";
import consultationimage from "../../assests/group-image.png";
import Ourservicebig from "../../assests/ousrservice-big-img.png";
import Ourservice from "../../assests/ourservice-image.png";
import profilepic from "../../assests/profile-pic.png";
import patientsimage from "../../assests/patients-img.png";
import Carousel from "react-bootstrap/Carousel";
import { FaClock } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import Footer from "../../utils/navbar/footer/Footer";
import NavBar from "../../utils/navbar/NavBar";

function Home() {
  return (
    <div>
      <NavBar />
      {/* banner section */}
      <div className="banner-sec bg_gradiant">
        <div className="container pt-4 ">
          <div className="row pt-5 ">
            <div className="col-lg-6 header_content home_content home_section">
              {/* <div className="home_content"> */}
              <h1>Find a DOCTOR</h1>
              <span>& Book ONLINE</span>
              <h3 className="header_text text-left pt-1">
                Fusce efficitur lacus a tellus sodales, sed efficitur purus
                <br /> fermentum. Aenean rhoncus porttitor consequat. Aliqan
                <br /> uam vehicula, justo nec feugiat facilisis.
              </h3>
              <div className="text-center pt-3">
                <button className="but_get_started ">
                  GET STARTED
                  <img src={Righrarrow} className="img-fluid" alt="" />
                </button>
              </div>
              {/* </div> */}
            </div>
            <div className="col-lg-6 pt-4 home_section">
              <img
                src={HomeLogo}
                className="img-fluid home_img_response"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* OnlineConsultation section*/}
      <div className="OnlineConsultation sec intersection_bg ">
        <div className="container  ">
          <div className="row pt-5">
            <div className="col-lg-6 d-flex flex-column justify-content-evenly online_section_top">
              <div>
                <h3 className="home_container_secondpage_content_heading">
                  Online Medical Consultation
                </h3>
                <span className="bottom_gradient"></span>
              </div>
              <p className="home_container_secondpage_content_para pt-2">
                Located in Columbus, GA, we are here to promote steady and
                marked improvements in your physical and mental wellbeing. We
                pride ourselves in offering a wide array of services to help you
                improve and maintain a healthy lifestyle. Explore our site to
                learn more about what we do here at appMD, and experience
                positive change.
              </p>
              <p className="home_container_secondpage_content_para">
                appMD is a virtual medical consultancy service provided by US
                trained physicians to various countries around the world.
              </p>
              <p className="home_container_secondpage_content_para">
                appMD’s goal is to provide treatment recommendations and medical
                opinion for your complex medical problems be it when you are in
                the hospital or at home.
              </p>
              <p className="home_container_secondpage_content_para ">
                appMD's team of physicians have trained in US residency programs
                and currently practicing in US hospitals.
              </p>
            </div>
            <div className="col-lg-6 online_section">
              <img
                src={consultationimage}
                alt=""
                className="img-fluid online_img_response"
              />
            </div>
          </div>
        </div>
      </div>
      {/* OurServices Section */}
      <div className="ourservices_section">
        <div className="container pt-5 our_service_right_bg our_service_section">
          <div className="col-lg-12 d-flex justify-content-between align-items-center view_more_color our_service_section_header">
            <div className="d-flex flex-column ">
              <h2 className="our_services_header_content">Our Services</h2>
              <span className="bottom_gradient bg_white_bottom"></span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <a className="view_more" href="#">
                VIEW MORE
              </a>
              <FaAngleDoubleRight />
            </div>
            <select class="selectpicker" data-live-search="true">
              <option data-content="<span class='flag-icon flag-icon-us'></span> US">
                US
              </option>
              <option data-content="<span class='flag-icon flag-icon-gb'></span> UK">
                UK
              </option>
              <option data-content="<span class='flag-icon flag-icon-ca'></span> CD">
                CN
              </option>
              <option data-content="<span class='flag-icon flag-icon-au'></span> AS">
                As
              </option>
            </select>
          </div>
        </div>
        <div className="container pt-1 ">
          <div className="row pt-5 ">
            <div className="col-lg-6 md-2 our_service_section_bottom">
              <div className="">
                <img src={Ourservicebig} alt="" className="img-fluid" />
              </div>
              <div className="">
                <div className="our_service_page_content">
                  <img src="" alt="" />
                  <div className="d-flex justify-content-between pt-2 align-items-center ">
                    <p className="our_sevices_content_premium">Premium</p>
                    <button className="hour_button">
                      <FaClock />
                      <span>1 Hour</span>
                    </button>
                  </div>
                  <h1 className="pt-4">
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
            <div className="col-lg-6 our_service_section_bottom">
              <div className="">
                <div className="d-flex  align-items-center gap-3">
                  <img src={Ourservice} alt="" className="img-fluid" />
                  <p className="our_service_right_side_Para">
                    Hospital & Outpatient Medicine <br />
                    <span className="">(Premium)</span>
                  </p>
                </div>
                <div className="d-flex  align-items-center gap-3 pt-3">
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
      <div className="flip_card_section pb-5 grid_bg">
        <div className="container">
          <div className="cards_wrap">
            {/* flip card1 */}
            <div className="cards_wrap_content  ">
              <div class="card">
                <div class="card-flip">
                  <div class="card-front">
                    <img src={cropimg} alt="" className="img-fluid" />
                    <div className="flipcard_front_content">
                      <h3>Dr. Aadil Mohamed, MD</h3>
                      <p>CARDIOLOGIST</p>
                    </div>
                  </div>
                  <div class="card-back bg_back_flip">
                    <img src={flipbackimg} alt="" />
                    <h3>Dr. Merry Joy, MBBS</h3>
                    <h5>DERMATOLOGIST</h5>
                    <p>
                      Maecenas vestibulum felis eget dui porttitor, ut sodales
                      massa viverra. Curasd bitur sollicitudin a nibh placerat,
                      Proin elementum. urna vitae accumsan auou sollicitudin.
                      Nullam vitae leo feugiat, maximus purus se. consequat leo.
                    </p>
                    <span>language known</span>
                    <h4>English, Hindi & Urdu</h4>{" "}
                  </div>
                </div>
              </div>
            </div>
            {/*flip card2  */}
            <div className="cards_wrap_content ">
              <div class="card">
                <div class="card-flip">
                  <div class="card-front">
                    <img src={cropimg} alt="" className="img-fluid" />
                    <div className="flipcard_front_content">
                      <h3>Dr. Aadil Mohamed, MD</h3>
                      <p>CARDIOLOGIST</p>
                    </div>
                  </div>
                  <div class="card-back bg_back_flip">
                    <img src={flipbackimg} alt="" />
                    <h3>Dr. Merry Joy, MBBS</h3>
                    <h5>DERMATOLOGIST</h5>
                    <p>
                      Maecenas vestibulum felis eget dui porttitor, ut sodales
                      massa viverra. Curasd bitur sollicitudin a nibh placerat,
                      Proin elementum. urna vitae accumsan auou sollicitudin.
                      Nullam vitae leo feugiat, maximus purus se. consequat leo.
                    </p>
                    <span>language known</span>
                    <h4>English, Hindi & Urdu</h4>{" "}
                  </div>
                </div>
              </div>
            </div>
            {/*flip card3 */}
            <div className="cards_wrap_content ">
              <div class="card">
                <div class="card-flip">
                  <div class="card-front">
                    <img src={cropimg} alt="" className="img-fluid" />
                    <div className="flipcard_front_content">
                      <h3>Dr. Aadil Mohamed, MD</h3>
                      <p>CARDIOLOGIST</p>
                    </div>
                  </div>
                  <div class="card-back bg_back_flip">
                    <img src={flipbackimg} alt="" />
                    <h3>Dr. Merry Joy, MBBS</h3>
                    <h5>DERMATOLOGIST</h5>
                    <p>
                      Maecenas vestibulum felis eget dui porttitor, ut sodales
                      massa viverra. Curasd bitur sollicitudin a nibh placerat,
                      Proin elementum. urna vitae accumsan auou sollicitudin.
                      Nullam vitae leo feugiat, maximus purus se. consequat leo.
                    </p>
                    <span>language known</span>
                    <h4>English, Hindi & Urdu</h4>{" "}
                  </div>
                </div>
              </div>
            </div>
            {/*flip card4 */}
            <div className="cards_wrap_content ">
              <div class="card">
                <div class="card-flip">
                  <div class="card-front">
                    <img src={cropimg} alt="" className="img-fluid" />
                    <div className="flipcard_front_content">
                      <h3>Dr. Aadil Mohamed, MD</h3>
                      <p>CARDIOLOGIST</p>
                    </div>
                  </div>
                  <div class="card-back bg_back_flip">
                    <img src={flipbackimg} alt="" />
                    <h3>Dr. Merry Joy, MBBS</h3>
                    <h5>DERMATOLOGIST</h5>
                    <p>
                      Maecenas vestibulum felis eget dui porttitor, ut sodales
                      massa viverra. Curasd bitur sollicitudin a nibh placerat,
                      Proin elementum. urna vitae accumsan auou sollicitudin.
                      Nullam vitae leo feugiat, maximus purus se. consequat leo.
                    </p>
                    <span>language known</span>
                    <h4>English, Hindi & Urdu</h4>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* patients_say_section */}
      <div className="patients_say_section pt-5 grid_pink_bg">
        <div className="container patient_sec_bottom">
          <div className="row position-relative">
            <div className="col-lg-12 patients_sec_responsive">
              <div className="patients_card_header d-flex flex-column">
                <h1>What our patients say</h1>
                <span className="bottom_gradient"></span>
              </div>
              {/* <div className="patients_cards mt-5">
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
              </div> */}
              <Carousel
                style={{ position: "relative" }}
                slide={false}
                interval={null}
              >
                <Carousel.Item>
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
                        sheeraz vestibulum felis eget dui porttitor, ut sodales
                        <br />
                        massa viverra. Curasd bitur sollicitudin a nibh
                        placerat.
                        <br /> Proin elementum urna vitae accumsan auou
                        sollicitudin.
                        <br /> vitae leo feugiat, maximus purus sed, consequat
                        leo.
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="patients_cards mt-5">
                    <div className="card_top_section">
                      <div className="profile_details d-flex align-items-center gap-2">
                        <img src={profilepic} alt="" />
                        <div className="profile_details_name">
                          <h5>Siddartha Joshi</h5>
                          <p>New York</p>
                        </div>
                      </div>
                    </div>
                    <div className="card_bottom_section">
                      <p>
                        fahad vestibulum felis eget dui porttitor, ut sodales
                        <br />
                        massa viverra. Curasd bitur sollicitudin a nibh
                        placerat.
                        <br /> Proin elementum urna vitae accumsan auou
                        sollicitudin.
                        <br /> vitae leo feugiat, maximus purus sed, consequat
                        leo.
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
              <img
                src={patientsimage}
                alt=""
                className="img-fluid patients_card_right_image patients_right_img_size"
              />
            </div>
            {/* <div className="col-lg-4 pt-2">
            </div> */}
          </div>
        </div>
      </div>
      {/* footer section */}
      <Footer />
    </div>
  );
}

export default Home;
