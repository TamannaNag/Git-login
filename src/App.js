import React, { useState } from 'react';
import Signup from './component/Signup';
import Login from './component/Login';
import './App.css';

function App() {
  const [page, setPage] = useState('signup'); // To track which page to display
  const [user, setUser] = useState(null); // Store logged-in user details

  // Function to handle Signup
  const handleSignup = (email, password) => {
    // Save email and password in localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    alert('Signup successful! Please log in.');
    setPage('login');
  };

  // Function to handle Login
  const handleLogin = (email, password) => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      alert('Login successful!');
      setUser(email); // Save the user details
      setPage('home');
    } else {
      alert('Invalid email or password!');
    }
  };



  return (
    <div>
      {page === 'signup' && <Signup onSignup={handleSignup} />}
      {page === 'login' && <Login onLogin={handleLogin} />}
     
    </div>
  );
}

export default App;
