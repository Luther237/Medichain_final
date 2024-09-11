import React from 'react';
import '../CSS/Nav.css';
import { NavLink } from 'react-router-dom';


const DoctorNav = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/Dashbord" activeClassName="active">Rendez-Vous</NavLink></li>
        <li><NavLink to="/consultation" activeClassName="active">Consultation</NavLink></li>
        <li><NavLink to="/registerPatient" activeClassName="active">Register Patient</NavLink></li>
        <li><NavLink to="/profile" activeClassName="active">
          <img src={"Profile.png"} alt="Profile" className="profile-icon" />
          My Profile
        </NavLink></li>
        <li><NavLink to="/" activeClassName="active">Logout</NavLink></li>
      </ul>
    </nav>
  );
};

export default DoctorNav;
