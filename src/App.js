import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import EquipmentList from './EquipmentList';
import EquipmentDetail from './EquipmentDetail';
import './App.css';
import EquipmentTable from './Sell';
import Checkout from './Checkout';
// Import the Navbar CSS
import './Navbar.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="navbar-nav">
            <Link to="/" className="nav-item">Home</Link>
            {/* <Link to="/about" className="nav-item">About</Link> */}
            <Link to="/login" className="nav-item">Rent</Link>
            <Link to="/sell" className="nav-item">Lend</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
            <Link to="/login" className="nav-item">Sign up / Log in</Link>
          </div>
          <Link to="/" className="navbar-brand">MedMobilize</Link>
        </nav>

        {/* Main Content Area */}
        <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/" element={<EquipmentList user={user} />} />
          <Route path="/equipment-list" element={<EquipmentList user={user} />} />
          <Route path="/equipment/:id" element={<EquipmentDetail />} />
          <Route path="/sell" element={<EquipmentTable/>} />
          <Route path="/checkout" element={<Checkout/>} />

          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
