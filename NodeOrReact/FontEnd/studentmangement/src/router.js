import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './Router/SignIn';
import SignUp from './Router/SignUp';
import Home from './Router/Home';
const Router = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>
)
export default Router;