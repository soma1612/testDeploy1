// UserInputComponent.jsx
import React, { useState } from 'react';

const UserInputComponent = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = () => {
    onSubmit({ name, dob });
  };

  return (
    <div>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Date of Birth:</label>
      <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UserInputComponent;
