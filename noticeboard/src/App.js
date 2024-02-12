// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Register from './pages/register';
import Login from './pages/Login';
import Profile from './pages/Profile';

const App = () => {
    return (
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
    );
}

export default App;
