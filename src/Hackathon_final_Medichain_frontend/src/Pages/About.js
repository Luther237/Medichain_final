import React from 'react';
// import '../AboutUs.css';
import '../CSS/About.css';
import Navbar from '../Components/Navbar';

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="about-us-container">
      <div className="about-us-hero">
        <h1>Welcome to <span>MediChain</span></h1>
        <p>Your trusted partner in e-medical solutions</p>
      </div>

      <div className="about-us-content">
        <section className="about-us-mission">
          <h2>Our Mission</h2>
          <p>
            We aim to revolutionize healthcare in Cameroon by providing an e-medical booklet for every Cameroonian.
            Our platform ensures secure and seamless access to medical records for patients and healthcare providers.
          </p>
        </section>

        <section className="about-us-values">
          <h2>Our Values</h2>
          <div className="values-list">
            <div className="value-item">
              <h3>Integrity</h3>
              <p>We uphold the highest standards of integrity in all our actions.</p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>We constantly seek innovative solutions to improve healthcare.</p>
            </div>
            <div className="value-item">
              <h3>Care</h3>
              <p>We are committed to providing care that is respectful and patient-centered.</p>
            </div>
          </div>
        </section>

        <section className="about-us-team">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="./team-member1.jpg" alt="Team Member 1" />
              <h3>Djonkoun Arsene</h3>
              <p>Front-end Developper </p>
            </div>
            <div className="team-member">
              <img src="./team-member2.jpg" alt="Team Member 2" />
              <h3>Jessyca Ebanda</h3>
              <p>Marketing Mannager</p>
            </div>
            <div className="team-member">
              <img src="./team-member3.jpg" alt="Team Member 2" />
              <h3>Cheuwa Luther</h3>
              <p>Back-end Developper</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
