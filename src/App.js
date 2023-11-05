import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import EquipmentList from './EquipmentList';
import EquipmentDetail from './EquipmentDetail';
import './App.css';
// import AddCardForm from './AddCardForm';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/equipment-list" element={<EquipmentList user={user} />} />
          <Route path="/equipment/:id" element={<EquipmentDetail />} />
          {/* <Route path="/add-card/:id" component={<AddCardForm />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
