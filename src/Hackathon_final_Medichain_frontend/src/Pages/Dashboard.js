import React, { useState } from 'react';
import '../CSS/Dashboard.css';

import Dnav from '../Components/Dnav.js';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patient: 'John Doe', date: '2024-09-01', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, patient: 'Jane Smith', date: '2024-09-03', time: '2:00 PM', status: 'Pending' },
    // Add more appointments here
  ]);

  const handleEdit = (id) => {
    // Logic to edit appointment
  };

  const handleDelete = (id) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  const handleAdd = () => {
    // Logic to add new appointment
  };

  return (
    <div className="dashboard-container">
      <Dnav/>
      <h1>Doctor's Appointments</h1>
      <button className="add-appointment-btn" onClick={handleAdd}>Add Appointment</button>
      <table className="appointment-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.patient}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.status}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(appointment.id)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(appointment.id)}>End</button>
                <button className="delete-btn" onClick={() => handleDelete(appointment.id)}>Renvoyer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
