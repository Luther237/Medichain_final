import React, { useState } from 'react';
import '../CSS/Consultation.css';
import Dnav from '../Components/Dnav.js';

const Home = ({ patientRecord }) => {
  const [activeTab, setActiveTab] = useState('diagnostic');
  const [forms, setForms] = useState([0]); // Start with one form

  const addForm = () => {
    setForms([forms.length, ...forms]); // Add a new form at the beginning
  };

  const renderActiveTab = (formIndex) => {
    switch (activeTab) {
      case 'diagnostic':
        return (
          <div className="form-section">
            <label>Diagnostique</label>
            <textarea placeholder="Enter diagnostic details" rows="4"></textarea>
            <button onClick={addForm} className="add-button">Add</button>
          </div>
        );
      case 'medications':
        return (
          <div className="form-section">
            <label>Medications</label>
            <textarea placeholder="Medications to be taken" rows="4"></textarea>
          </div>
        );
      case 'follow-up':
        return (
          <div className="form-section">
            <label>Follow-Up</label>
            <textarea placeholder="Follow-up of parameters" rows="4"></textarea>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="left-section">
        <div className="header">
          <div className="image-container">
            <img src="mediA.svg" alt="Doctor" />
          </div>
          <div className="title">
            <h1>Patient Consultation</h1>
            <p>{patientRecord.name}</p>
          </div>
        </div>
        <div className="form-container">
          <div className="registration-form">
            <div className="input-group">
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" placeholder="First Name" />
            </div>
            <div className="input-group">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" placeholder="Last Name" />
            </div>
            <div className="input-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="text" id="dob" placeholder="MM-DD-YYYY" />
            </div>
            <div className="input-group">
              <label htmlFor="sex">Sex</label>
              <select id="sex">
                <option value="" disabled selected>Please Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="height">Height</label>
              <input type="text" id="height" placeholder="Height" />
            </div>
            <div className="input-group">
              <label htmlFor="weight">Weight</label>
              <input type="text" id="weight" placeholder="Weight" />
            </div>
            <div className="input-group">
              <label htmlFor="marital-status">Marital Status</label>
              <select id="marital-status">
                <option value="married">Married</option>
                <option value="single">Single</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="religion">Religion</label>
              <input type="text" id="religion" placeholder="Religion" />
            </div>
            <div className="input-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" placeholder="Address" />
            </div>
            <div className="input-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" placeholder="City" />
            </div>
            <div className="input-group">
              <label htmlFor="contact">Contact</label>
              <input type="text" id="contact" placeholder="Contact" />
            </div>
            <div className="input-group">
              <label htmlFor="emergency-contact">Emergency Contact</label>
              <input type="text" id="emergency-contact" placeholder="Emergency Contact" />
            </div>
            <div className="input-group">
              <label htmlFor="emergency-name">Name</label>
              <input type="text" id="emergency-name" placeholder="Emergency Name" />
            </div>
            <div className="input-group">
              <label htmlFor="relationship">Relationship</label>
              <input type="text" id="relationship" placeholder="Relationship" />
            </div>
          </div>
        </div>
      </div>

      <div className="right-section">
        {forms.map((formIndex) => (
          <div key={formIndex} className="diagnostic-form">
            <div className="form-header">
              <input type="text" className="parameter-input" placeholder="Weight (Kg)" />
              <input type="text" className="parameter-input" placeholder="Temperature (°C)" />
              <input type="text" className="parameter-input" placeholder="Blood Pressure (Bp)" />
              <input type="text" className="parameter-input" placeholder="Pulse (Pie)" />
              <input type="text" className="date-input" placeholder="MM-DD-YYYY" />
            </div>
            <div className="tabs">
              <button
                className={`tab-button ${activeTab === 'diagnostic' ? 'active' : ''}`}
                onClick={() => setActiveTab('diagnostic')}
              >
                Diagnostic
              </button>
              <button
                className={`tab-button ${activeTab === 'medications' ? 'active' : ''}`}
                onClick={() => setActiveTab('medications')}
              >
                Medications
              </button>
              <button
                className={`tab-button ${activeTab === 'follow-up' ? 'active' : ''}`}
                onClick={() => setActiveTab('follow-up')}
              >
                Follow-Up
              </button>
            </div>
            {renderActiveTab(formIndex)}
          </div>
        ))}
      </div>
    </div>
  );
};

const Consultation = () => {
  const [patientID, setPatientID] = useState('');
  const [patientRecord, setPatientRecord] = useState(null);

  const handleInputChange = (e) => {
    setPatientID(e.target.value);
  };

  const handleSearch = () => {
    // This is just a placeholder function
    const mockRecords = {
      '123': { name: 'John Doe', age: 30, town: 'Springfield', weight: '75kg', conditions: 'Hypertension' },
      '456': { name: 'Jane Smith', age: 25, town: 'Shelbyville', weight: '60kg', conditions: 'Diabetes' },
    };

    const record = mockRecords[patientID];
    setPatientRecord(record || { name: 'Not Found', age: '-', town: '-', weight: '-', conditions: '-' });
  };

  return (
    <>
      <Dnav />
      <div className="consultation-container">
        {!patientRecord ? (
          <>
            <h1>Consultation</h1>
            <div className="consultation-form">
              <input
                type="text"
                placeholder="Enter Patient ID"
                value={patientID}
                onChange={handleInputChange}
                className="input-patient-id"
              />
              <button onClick={handleSearch} className="search-btn">Enter</button>
            </div>
          </>
        ) : (
          <Home patientRecord={patientRecord} />
        )}
      </div>
    </>
  );
};

export default Consultation;
