import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import WelcomeStore from './components/WelcomeStore';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

function App() {
  const token = localStorage.getItem('accessToken');

  if(!token) {
    return (
      <>
        <Login />
      </>
    )
  }

  return (
    <>
      <WelcomeStore />
      <h1>Welcome</h1>
      <div className="wrapper">
        <Routes>
          <Route path="/profile">
            <Profile />  
          </Route>
          <Route path="/">
            <Profile />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
