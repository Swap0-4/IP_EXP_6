import React from 'react';

const Profile = () => {
  const subjects = ['Computer Networks', 'Cryptography', 'Data Structures', 'Software Engineering'];

  return (
    <div>
      <h2>Swaraj Patil's Profile</h2>
      <p>Information Technology Student at VESIT</p>
      <h3>Subjects:</h3>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
