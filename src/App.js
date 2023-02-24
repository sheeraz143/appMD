import "./App.css";
import "./fonts/index.css";
// import NavBar from "./utils/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import OurServices from "./Pages/ourservice/OurServices";
import Doctors from "./Pages/doctors/Doctors";
import AboutUs from "./Pages/about/AboutUs";
import ContactUs from "./Pages/contact/ContactUs";
import Signup from "./Pages/signup/Signup";
// import MemberSignUp from "./Pages/loginpages/memberlogin/MemberSignUp";
import MemberSignIn from "./Pages/loginpages/memberlogin/MemberSignIn";
// import DoctorSignUp from "./Pages/loginpages/doctorlogin/DoctorSIgnUp";
import DoctorSignIn from "./Pages/loginpages/doctorlogin/DoctorSIgnIn";
import MemberHome from "./Pages/loginpages/memberlogin/MemberHome";
import DoctorHome from "./Pages/loginpages/doctorlogin/DoctorHome";

function App() {
  return (
    <div className="home_page">
      {/* <div>
        <NavBar />
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ourservices" element={<OurServices />} />
        <Route path="doctor" element={<Doctors />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="signup" element={<Signup />} />
        <Route path="membersignup" element={<MemberHome />} />
        <Route path="membersignin" element={<MemberSignIn />} />
        <Route path="doctorsignup" element={<DoctorHome />} />
        <Route path="doctorsignin" element={<DoctorSignIn />} />
      </Routes>
    </div>
  );
}

export default App;
