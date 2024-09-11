import './App.css';
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/About.js';
import PatientMedicalBooklet from './Pages/RegisterPatient.js';
import Dashboard from './Pages/Dashboard.js';
import Consultation from './Pages/Consultation.js'
import Login from './Pages/Login.js';
import DoctorRegistrationForm from './Pages/Registration.js';
import Welcome from './Pages/Doctor.js';
import Patient from './Pages/Patient.js';
import Dossier from './Components/Dossier.js';
import Profile from './Pages/Profile.js';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={AboutUs} />
        <Route path="/RegisterPatient" exact Component={PatientMedicalBooklet} />
        <Route path="/Home" exact Component={AboutUs} />
        <Route path="/Dashbord" exact Component={Dashboard} />
        <Route path="/consultation" exact Component={Consultation} />
        <Route path="/login" exact Component={Login} />
        <Route path="/registration" exact Component={DoctorRegistrationForm} />
        <Route path="/doctor" exact Component={Welcome} />
        <Route path="/Patient" exact Component={Patient} />
        <Route path="/dossier" exact Component={Dossier} />
        <Route path="/profile" exact Component={Profile} />
      </Routes>
    </Router>
  );
};

export default App;

