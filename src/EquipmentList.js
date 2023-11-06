import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EquipmentList.css'; // Make sure to create a EquipmentList.css file in the same directory.
import backgroundImage from './images/background.png'; // Adjust the path to where your image is located


const aspectRatio = 360 / 1157; // Replace with your image's aspect ratio
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

    const backgroundStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% auto',
      backgroundAttachment: 'scroll',
      minHeight: `calc(1010vw * ${aspectRatio})`, // This keeps the aspect ratio
    };

  return (
    <div className="equipment-list" style={backgroundStyle}>
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