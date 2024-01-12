import React, { useState } from 'react';
import UserInputComponent from './UserInputComponent';
import UserDisplayComponent from './UserDisplayComponent';

const App = () => {
  const [userData, setUserData] = useState({ name: '', dob: '' });

  const handleUserInput = (data) => {
    setUserData(data);
  };

  const handleUpdateUser = (updatedData) => {
    setUserData(updatedData);
  };

  return (
    <div>
      <h1>User Information</h1>

      <UserInputComponent onSubmit={handleUserInput} />

      <h2>User Details</h2>
      <UserDisplayComponent userData={userData} onUpdate={handleUpdateUser} />
    </div>
  );
};

export default App;