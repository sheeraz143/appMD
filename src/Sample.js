import Carousel from "react-bootstrap/Carousel";
import Ourservice from "../src/assests/ourservice-image.png";

function UncontrolledExample() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Carousel>
            <Carousel.Item >
              <div className="patients_cards mt-5">
                <div className="card_top_section">
                  <div className="profile_details d-flex align-items-center gap-2">
                    {/* <img src={profilepic} alt="" /> */}
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
                    massa viverra. Curasd bitur sollicitudin a nibh placerat.
                    Proin elementum urna vitae accumsan auou sollicitudin.
                    Nullam vitae leo feugiat, maximus purus sed, consequat leo.
                    In ano dapibus ut erat et elementum. Nam facilisis nibh nec
                    leo scelerisque. , sed tem pus lorem. vestibulum.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="patients_cards mt-5">
                <div className="card_top_section">
                  <div className="profile_details d-flex align-items-center gap-2">
                    {/* <img src={profilepic} alt="" /> */}
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
                    aabid vestibulum felis eget dui porttitor, ut sodales
                    massa viverra. Curasd bitur sollicitudin a nibh placerat.
                    Proin elementum urna vitae accumsan auou sollicitudin.
                    Nullam vitae leo feugiat, maximus purus sed, consequat leo.
                    In ano dapibus ut erat et elementum. Nam facilisis nibh nec
                    leo scelerisque. , sed tem pus lorem. vestibulum.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="patients_cards mt-5">
                <div className="card_top_section">
                  <div className="profile_details d-flex align-items-center gap-2">
                    {/* <img src={profilepic} alt="" /> */}
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
                    shariq vestibulum felis eget dui porttitor, ut sodales
                    massa viverra. Curasd bitur sollicitudin a nibh placerat.
                    Proin elementum urna vitae accumsan auou sollicitudin.
                    Nullam vitae leo feugiat, maximus purus sed, consequat leo.
                    In ano dapibus ut erat et elementum. Nam facilisis nibh nec
                    leo scelerisque. , sed tem pus lorem. vestibulum.
                  </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default UncontrolledExample;
