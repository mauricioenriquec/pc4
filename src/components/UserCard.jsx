// src/components/UserCard.jsx
import React from 'react';

const UserCard = ({ name, username, email, id, onClick }) => {
  const imageUrl = `https://picsum.photos/seed/${id}/300/300`;

  return (
    <div className="user-card" onClick={onClick}>
      <img src={imageUrl} alt={`${name}'s avatar`} />
      <h3>{name}</h3>
      <p>@{username}</p>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
