import React from 'react'
import { NavBar } from './NavBar';

const Profile = () => {
  const name = localStorage.getItem('email');
  return (
    <div>
      <NavBar/>
      <h1>Profile</h1>
      <h3>Hello '{name}'</h3>
    </div>
  );
};

export default Profile;