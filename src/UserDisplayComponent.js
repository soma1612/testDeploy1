// UserDisplayComponent.jsx
import React, { useState } from 'react';
import EditUserComponent from './EditUserComponent';

const UserDisplayComponent = ({ userData, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdate = (updatedData) => {
    onUpdate(updatedData);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <EditUserComponent userData={userData} onUpdate={handleUpdate} />
      ) : (
        <div>
          <label>Name:</label>
          <input type="text" value={userData.name} readOnly />

          <label>Date of Birth:</label>
          <input type="date" value={userData.dob} readOnly />

          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default UserDisplayComponent;