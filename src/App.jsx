// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import UserDetails from './components/UserDetails';
import SearchBar from './components/SearchBar';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>User Cards</h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <div className="user-cards">
        {selectedUser ? (
          <UserDetails user={selectedUser} onBack={() => setSelectedUser(null)} />
        ) : (
          filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              {...user}
              onClick={() => setSelectedUser(user)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
