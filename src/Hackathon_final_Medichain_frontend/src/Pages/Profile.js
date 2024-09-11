import React from 'react';
import Dnav from '../Components/Dnav';

const Profile = () => {
    const doctor = {
        name: 'Dr. Arsene Djonkoun',
        age: 20,
        specialty: 'Cardiology',
        sex: 'Male',
        profilePic: 'Arsene.jpeg', 
        Hospital_affiliation:'General Hospital of Douala',              
        // Local image file
    };

    return (
        <div style={styles.pageWrapper}>
            <Dnav />
            <div style={styles.container}>
                <div style={styles.profileCard}>
                    <img src={doctor.profilePic} alt="Doctor's Profile" style={styles.profileImage} />
                    <h2 style={styles.name}>{doctor.name}</h2>
                    <p style={styles.info}><strong>Age:</strong> {doctor.age}</p>
                    <p style={styles.info}><strong>Specialty:</strong> {doctor.specialty}</p>
                    <p style={styles.info}><strong>Sex:</strong> {doctor.sex}</p>
                    <p style={styles.info}><strong>Hospital Affiliation:</strong> {doctor.Hospital_affiliation}</p>
                </div>
            </div>
        </div>
    );
};

// Styling
const styles = {
    pageWrapper: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#f0f8ff',  // Light blue background
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    profileCard: {
        border: '2px solid #007bff',
        borderRadius: '15px',
        padding: '30px',
        width: '400px',  // Increased width for a bigger profile card
        textAlign: 'center',
        backgroundColor: '#fff',
        boxShadow: '0 6px 12px rgba(0,0,0,0.1)',  // Deeper shadow for a more defined look
    },
    profileImage: {
        width: '200px',  // Larger image
        height: '200px',
        borderRadius: '50%',
        objectFit: 'cover',  // Ensure image is not distorted
        marginBottom: '20px',
        border: '3px solid #007bff',  // Adds a blue border around the image
    },
    name: {
        fontSize: '28px',  // Slightly larger font for name
        color: '#007bff',  // Blue color for the name
        marginBottom: '15px',
    },
    info: {
        fontSize: '18px',  // Slightly larger font for information
        color: '#333',
        marginBottom: '10px',
    },
};

export default Profile;
