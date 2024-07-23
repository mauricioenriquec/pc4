// src/components/UserDetails.jsx
import React from 'react';

const UserDetails = ({ user, onBack }) => {
  if (!user) return null;

  return (
    <div className="user-details">
      <button onClick={onBack}>Back</button>
      <img src={`https://picsum.photos/seed/${user.id}/300/300`} alt={`${user.name}'s avatar`} />
      <h2>{user.name}</h2>
      <p>Username: @{user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <p>Address: {`${user.address.street}, ${user.address.city}`}</p>
    </div>
  );
};

export default UserDetails;
