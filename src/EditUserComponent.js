// EditUserComponent.jsx
import React, { useState } from 'react';

const EditUserComponent = ({ userData, onUpdate }) => {
  const [editedName, setEditedName] = useState(userData.name);
  const [editedDob, setEditedDob] = useState(userData.dob);

  const handleUpdate = () => {
    onUpdate({ name: editedName, dob: editedDob });
  };

  return (
    <div>
      <label>Name:</label>
      <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />

      <label>Date of Birth:</label>
      <input type="date" value={editedDob} onChange={(e) => setEditedDob(e.target.value)} />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditUserComponent;
