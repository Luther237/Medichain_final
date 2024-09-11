import React from 'react';
import jsPDF from 'jspdf';
import Pnav from '../Components/Pnav';

import '../CSS/Patient.css';

const Patient = () => {
    const generatePDF = () => {
        const doc = new jsPDF();
        const form = document.getElementById('patient-form');
        
        doc.html(form, {
            callback: function (doc) {
                doc.save('patient_form.pdf');
            },
            x: 10,
            y: 10,
            width: 190, // width of content
            windowWidth: 650 // width of the HTML content to fit
        });
    };

    return (
      <div>
      <Pnav/>
        <div className="container">
          
            <div className="form-container" id="patient-form">
                <div className="header">
                    <div className="image-container">
                        <img src="MedLog.png" alt="Doctor Image" className="image" />
                    </div>
                    <div className="title">
                        <h1 className="title-text">New Patient Enrollment</h1>
                        <p>Djonkoun Arsene Brayan</p>
                    </div>
                </div>
                <form>
                    <div className="input-group">
                        <label>First Name</label>
                        <input type="text" value="John" readOnly className="input" />
                    </div>
                    <div className="input-group">
                        <label>Last Name</label>
                        <input type="text" value="Doe" readOnly className="input" />
                    </div>
                    <div className="input-group">
                        <label>Date of Birth</label>
                        <input type="text" value="01-01-1990" readOnly className="input" />
                    </div>
                    <div className="input-group">
                        <label>Sex</label>
                        <select value="male" disabled className="input">
                            <option value="male">Male</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Height</label>
                        <input type="text" value="180 cm" readOnly className="input" />
                    </div>
                    <div className="input-group">
                        <label>Weight</label>
                        <input type="text" value="75 kg" readOnly className="input" />
                    </div>
                    <div className="input-group">
                        <label>Marital Status</label>
                        <select value="Married" disabled className="input">
                            <option>Married</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Religion</label>
                        <input type="text" value="Christianity" readOnly className="input" />
                    </div>
                    <div className="input-group">
                        <label>Address</label>
                        <input type="text" value="1234 Elm Street" readOnly className="input" />
                    </div>
                    <div className="input-group">
                        <label>City</label>
                        <input type="text" value="New York" readOnly className="input" />
                    </div>
                    <div className="input-group">
                        <label>Contact</label>
                        <input type="text" value="+1234567890" readOnly className="input" />
                    </div>

                    <div className="emergency-section">
                        <h1 className="sub-title">In Case of Emergency</h1>
                        <div className="input-group">
                            <label>Emergency Contact</label>
                            <input type="text" value="+0987654321" readOnly className="input" />
                        </div>
                        <div className="input-group">
                            <label>Name</label>
                            <input type="text" value="Jane Doe" readOnly className="input" />
                        </div>
                        <div className="input-group">
                            <label>Relationship</label>
                            <input type="text" value="Spouse" readOnly className="input" />
                        </div>
                    </div>
                </form>
                <button onClick={generatePDF} className="download-button">Download as PDF</button>
               
            </div>
            
            
            <div className="right-panel">
                <div className="page">
                    <div className="page-header">
                        <input type="text" value="Weight(Kg)" readOnly className="input" />
                        <input type="text" value="01-01-2024" readOnly className="input" />
                    </div>
                    <div className="page-body">
                        <div className="input-group">
                            <label>Diagnostique</label>
                            <textarea value="No issues detected" readOnly className="text-area"></textarea>
                        </div>
                        <div className="input-group">
                            <label>Medications</label>
                            <textarea value="None" readOnly className="text-area"></textarea>
                        </div>
                        <div className="input-group">
                            <label>Follow-Up</label>
                            <textarea value="Regular check-up in 6 months" readOnly className="text-area"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Patient;
