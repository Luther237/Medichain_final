

const Dossier = () =>{
    return(
        <div>
        <div class="dossier-container">
        <h1>Medical Dossier</h1>
        <section class="personal-info">
            <h2>Personal Information</h2>
            <p><strong>Full Name:</strong> _________________________________</p>
            <p><strong>Date of Birth:</strong> ________________________________</p>
            <p><strong>Gender:</strong> _________________________________</p>
            <p><strong>Address:</strong> ___________________________________</p>
            <p><strong>Phone Number:</strong> _______________________________</p>
            <p><strong>Email:</strong> _____________________________________</p>
        </section>

        <section class="medical-history">
            <h2>Medical History</h2>
            <p><strong>Chronic Conditions:</strong></p>
            <p>____________________________________________________</p>
            <p><strong>Previous Surgeries:</strong></p>
            <p>____________________________________________________</p>
            <p><strong>Family Medical History:</strong></p>
            <p>____________________________________________________</p>
        </section>

        <section class="current-medications">
            <h2>Current Medications</h2>
            <p><strong>Medication Name:</strong> ____________________________</p>
            <p><strong>Dosage:</strong> __________________________________</p>
            <p><strong>Frequency:</strong> ________________________________</p>
            <p><strong>Prescribed by:</strong> ______________________________</p>
        </section>

        <section class="allergies">
            <h2>Allergies</h2>
            <p><strong>Allergy Type:</strong> ________________________________</p>
            <p><strong>Reaction:</strong> __________________________________</p>
            <p><strong>Treatment:</strong> _________________________________</p>
        </section>

        <section class="emergency-contacts">
            <h2>Emergency Contacts</h2>
            <p><strong>Name:</strong> ____________________________________</p>
            <p><strong>Relationship:</strong> ________________________________</p>
            <p><strong>Phone Number:</strong> ______________________________</p>
        </section>
        <button style={{
          color: 'orange',
          marginLeft: "50%" 
        }}>telecharger</button>
    </div>
    </div>
    )
}
export default Dossier;