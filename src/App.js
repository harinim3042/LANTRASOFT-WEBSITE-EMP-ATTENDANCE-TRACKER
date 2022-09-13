import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Login from './Components/Login';


export default function App() {
  return (
    <div>
     
      <>
      <BrowserRouter>
        <Routes>
        <Route path="/login" element = {<Login    />} />
          <Route path="/" element = {<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
    </div>
  );
}

