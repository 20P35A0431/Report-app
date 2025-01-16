import React, { useState } from 'react';

const IncidentForm = () => {
  const [formData, setFormData] = useState({
    incidentType: '',
    location: '',
    incidentTime: '',
    vehicleNumber: '',
    peopleInvolved: '',
    injuryDetails: '',
    damageDetails: '',
    actionsTaken: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Incident Type</label>
      <input
        type="text"
        name="incidentType"
        value={formData.incidentType}
        onChange={handleChange}
        required
      />

      <label>Location</label>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
      />

      <label>Incident Time</label>
      <input
        type="text"
        name="incidentTime"
        value={formData.incidentTime}
        onChange={handleChange}
        required
      />

      <label>Vehicle Number</label>
      <input
        type="text"
        name="vehicleNumber"
        value={formData.vehicleNumber}
        onChange={handleChange}
        required
      />

      <label>People Involved</label>
      <input
        type="text"
        name="peopleInvolved"
        value={formData.peopleInvolved}
        onChange={handleChange}
      />

      <label>Injury Details</label>
      <input
        type="text"
        name="injuryDetails"
        value={formData.injuryDetails}
        onChange={handleChange}
      />

      <label>Damage Details</label>
      <input
        type="text"
        name="damageDetails"
        value={formData.damageDetails}
        onChange={handleChange}
      />

      <label>Actions Taken</label>
      <input
        type="text"
        name="actionsTaken"
        value={formData.actionsTaken}
        onChange={handleChange}
      />

      <button type="submit">Submit Report</button>
    </form>
  );
};

export default IncidentForm;
