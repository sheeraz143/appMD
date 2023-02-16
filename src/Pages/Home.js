import flipimg1 from "../assests/flip-img1.png";
import flipbackimg from "../assests/flip-back-img.png";
import "../utils/navbar/navbar.css";
import BannerSection from "../home/BannerSection";
import OnlineConsultation from "../home/OnlineConsultation";
import OurServicesSection from "../home/OurServicesSection";

function Home() {
  return (
    <div>
      <BannerSection />
      <OnlineConsultation />
      <OurServicesSection />
      {/*flip_card_section  */}
      {/* flip card1 */}
      <div className="flip_card_section">
        <div className="container">
          <div className="row d-flex flex-wrap">
            <div className="col-lg-3 flip_card_height">
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
            <div className="col-lg-3 flip_card_height">
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
            <div className="col-lg-3 flip_card_height">
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
            <div className="col-lg-3 flip_card_height">
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
    </div>
  );
}

export default Home;
