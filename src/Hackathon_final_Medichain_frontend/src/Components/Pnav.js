import React from 'react';
import '../CSS/Nav.css';
import { NavLink } from 'react-router-dom';


const PatientNav = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/my-booklet" activeClassName="active">My Booklet</NavLink></li>
        <li><NavLink to="/profile" activeClassName="active">
        <img src={"./Profile.png"} alt="Profile" className="profile-icon" />
          My Profile
        </NavLink></li>
        <li><NavLink to="/logout" activeClassName="active">Logout</NavLink></li>
      </ul>
    </nav>
  );
};

export default PatientNav;
