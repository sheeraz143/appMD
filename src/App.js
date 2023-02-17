import "./App.css";
import "./fonts/index.css";
import NavBar from "./utils/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import OurServices from "./Pages/ourservice/OurServices";
import Doctors from "./Pages/doctors/Doctors";
import AboutUs from "./Pages/about/AboutUs";
import ContactUs from "./Pages/contact/ContactUs";

function App() {
  return (
    <div className="home_page">
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ourservices" element={<OurServices />} />
        <Route path="doctor" element={<Doctors />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
