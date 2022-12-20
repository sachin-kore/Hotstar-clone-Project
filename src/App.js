import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Details } from './components/Details';
import { Login } from './components/Login';


function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<><Header /><Home /></>} />
          <Route exact path="/details" element={<><Header /><Details /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
