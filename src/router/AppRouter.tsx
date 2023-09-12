import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/components/Login";
import Index from "../pages/components/Index";
import RequestDemo from "../pages/request-demo";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path='/request-demo' element={<RequestDemo />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
