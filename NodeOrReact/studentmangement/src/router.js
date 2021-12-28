import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './Router/SignIn';
import SignUp from './Router/SignUp';
import Home from './Router/Home';
import Profile from './Router/Profile';

const Router = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </div>
)
export default Router;