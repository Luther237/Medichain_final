import React from 'react';
//import '../RegisterPatient.css';
import '../CSS/RegisterPatient.css';
import Dnav from '../Components/Dnav.js';

const PatientMedicalBooklet = () => {
  return (
    <>
    <Dnav/>
    <div className="patient-form-container">
       
      <div className="form-header">
        <h2>New Patient Enrollment</h2>
        <p>Dr. Name</p>
      </div>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Sex</label>
          <select>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Town</label>
          <input type="text" placeholder="Town" />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input type="number" placeholder="Age" />
        </div>
        <div className="form-group">
          <label>Weight</label>
          <input type="number" placeholder="Weight (kg)" />
        </div>
        <div className="form-group">
          <label>Record</label>
          <input type="" placeholder="Textarea" />
        </div>
        <button className="submit-btn">Submit</button>
      </form>
    </div>
    </>
  );
};

export default PatientMedicalBooklet;
