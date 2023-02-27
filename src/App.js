import "./App.css";
import "./fonts/index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import OurServices from "./Pages/ourservice/OurServices";
import Doctors from "./Pages/doctors/Doctors";
import AboutUs from "./Pages/about/AboutUs";
import ContactUs from "./Pages/contact/ContactUs";
import Signup from "./Pages/signup/Signup";
import MemberSignIn from "./Pages/loginpages/memberlogin/MemberSignIn";
import DoctorSignIn from "./Pages/loginpages/doctorlogin/DoctorSIgnIn";
import MemberHome from "./Pages/loginpages/memberlogin/MemberHome";
import DoctorHome from "./Pages/loginpages/doctorlogin/DoctorHome";
import OtpPage from "./Pages/loginpages/otp/Otp";
import ResetPassword from "./Pages/loginpages/resetpassword/ResetPassword";
import SuccessMessage from "./Pages/loginpages/successfulmessage/SuccessMessage";
import ForgotPassword from "./Pages/loginpages/forgotpassword/ForgotPassword";

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
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="otp" element={<OtpPage />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="sucessmessage" element={<SuccessMessage />} />
      </Routes>
    </div>
  );
}

export default App;
