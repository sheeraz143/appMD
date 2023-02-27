import React from "react";
import NavBar from "../../utils/navbar/NavBar";
import "../doctors/doctor.css";

function Doctors() {
  return (
    <div>
      <NavBar />
      <div className="doctor_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
