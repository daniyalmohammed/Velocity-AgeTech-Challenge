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
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const filteredEquipment = filter
    ? equipmentData.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];


  return (
    <div className="equipment-list">
      <div className="search-bar">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products"
            onChange={(e) => setFilter(e.target.value)}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 100)} // hides dropdown when not focused
          />
          {showDropdown && (
            <div className="dropdown">
              {filteredEquipment.map((item) => (
                <div
                  className="dropdown-item"
                  key={item.id}
                  onMouseDown={() => navigate(`/equipment/${item.id}`)} // onMouseDown triggers before onBlur
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

  
  export default EquipmentList;