import React, { useState } from 'react';
import '../CSS/Registration.css'
import { NavLink } from 'react-router-dom';

const DoctorRegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        specialization: '',
        licenseNumber: '',
        hospitalAffiliation: '',
        yearsExperience: '',
        bio: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log(formData);
    };

    return (
        <form className="doctor-registration-form" onSubmit={handleSubmit}>
                
            <h2>Doctor Registration</h2>
            <div className="logo-container">
        <img src="MedLog.png" alt="Logo" className="welcome-logo" />
      </div>

            <label htmlFor="fullName">Full Name</label>
            <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                required 
            />

            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
            />

            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                id="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                required 
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
                type="password" 
                id="confirmPassword" 
                name="confirmPassword" 
                value={formData.confirmPassword} 
                onChange={handleChange} 
                required 
            />

            <label htmlFor="phoneNumber">Phone Number</label>
            <input 
                type="tel" 
                id="phoneNumber" 
                name="phoneNumber" 
                value={formData.phoneNumber} 
                onChange={handleChange} 
                required 
            />

            <label htmlFor="specialization">Specialization</label>
            <input 
                type="text" 
                id="specialization" 
                name="specialization" 
                value={formData.specialization} 
                onChange={handleChange} 
                required 
            />

            <label htmlFor="licenseNumber">Medical License Number</label>
            <input 
                type="text" 
                id="licenseNumber" 
                name="licenseNumber" 
                value={formData.licenseNumber} 
                onChange={handleChange} 
                required 
            />

            <label htmlFor="hospitalAffiliation">Hospital Affiliation</label>
            <input 
                type="text" 
                id="hospitalAffiliation" 
                name="hospitalAffiliation" 
                value={formData.hospitalAffiliation} 
                onChange={handleChange} 
            />

            <label htmlFor="yearsExperience">Years of Experience</label>
            <input 
                type="number" 
                id="yearsExperience" 
                name="yearsExperience" 
                value={formData.yearsExperience} 
                onChange={handleChange} 
                min="0" 
                required 
            />

            <label htmlFor="bio">Short Bio</label>
            <textarea 
                id="bio" 
                name="bio" 
                value={formData.bio} 
                onChange={handleChange} 
            />

<NavLink to="../doctor" type="submit" style={{
    textDecoration: "none",
    border: 'solid 2px blue',     // Change border color and width to blue
    backgroundColor: "#007bff",   // Blue background color (Bootstrap primary blue)
    color: "white",               // Text color
    padding: "10px 20px",         // Padding for spacing
    borderRadius: "10px",         // Border radius for rounded corners
    display: "inline-block",      // Ensure it's treated like a button
    textAlign: "center"           // Center-align text
}}>Register</NavLink>

        </form>
    );
};

export default DoctorRegistrationForm;
