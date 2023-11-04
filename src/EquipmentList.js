import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EquipmentList.css'; // Make sure to create a EquipmentList.css file in the same directory.

const equipmentData = [
  { id: 1, name: 'Gloves', availability: 'In stock', image: 'gloves.png' },
  { id: 2, name: 'Masks', availability: 'Limited stock', image: 'masks.png' },
  { id: 3, name: 'MRI Scanners', availability: 'Out of stock', image: 'mri_scanner.png' },
];

function EquipmentList({ user }) {
    const [filter, setFilter] = useState('');
    const navigate = useNavigate();
  
    const filteredEquipment = filter
      ? equipmentData.filter((item) =>
          item.name.toLowerCase().includes(filter.toLowerCase())
        )
      : equipmentData;
  
    if (!user) {
      navigate('/');
      return null;
    }
  
    return (
        <div className="equipment-list">
          <h1>Rent Healthcare Equipment</h1>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <div className="card-container">
            {filteredEquipment.map((item) => (
              <div className="card" key={item.id} onClick={() => navigate(`/equipment/${item.id}`)}>
                <img src={require(`./images/${item.image}`)} alt={item.name} className="card-image"/>
                <div className="card-content">
                  <h2 className="card-title">{item.name}</h2>
                  <p className="card-availability">{item.availability}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
      
  }
  
  export default EquipmentList;