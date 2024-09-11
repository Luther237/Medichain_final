import React from 'react';
import '../CSS/Doctor.css';
import Dnav from"../Components/Dnav.js"

const Welcome = () => {
  return (
    <>
    <Dnav/>
    <div className="welcome-container">      
      <div className="logo-container">
        <img src="MedLog.png" alt="Logo" className="welcome-logo" />
      </div>
      <h1 className="welcome-title">Welcome to Medichain Dr Arsene!</h1>
    </div>
    </>
  );
};

export default Welcome;
