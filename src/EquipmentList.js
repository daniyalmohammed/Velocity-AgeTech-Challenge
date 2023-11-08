import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EquipmentList.css'; // Make sure to create a EquipmentList.css file in the same directory.
import backgroundImage from './images/background.png'; // Adjust the path to where your image is located


const aspectRatio = 360 / 1157; // Replace with your image's aspect ratio
const equipmentData = [
  { id: 1, name: 'CPAP Machine', availability: 'Out of stock', image: 'cpap_machine.png' },
  { id: 2, name: 'ECG Machine', availability: 'In stock', image: 'ecg_machine.png' },
  { id: 3, name: 'Spirometers', availability: 'Out of stock', image: 'spirometers.png' },
  { id: 4, name: 'Vacoude Suction Units', availability: 'In stock', image: 'vacoude_suction_units.png' },
  { id: 5, name: 'Ventilators', availability: 'In stock', image: 'ventilators.png' },
  { id: 6, name: 'VR Headset', availability: 'In stock', image: 'VR_headset.png' },
  { id: 7, name: 'Electric Wheelchair', availability: 'Limited stock', image: 'electric_wheelchair.png' },
  { id: 8, name: 'Stair Lift', availability: 'Limited stock', image: 'stair_lift.png' },
  { id: 9, name: 'Portable MRI', availability: 'In stock', image: 'portable_mri.png' },
  { id: 10, name: 'Defibrillator', availability: 'In stock', image: 'defibrillator.png' },
  { id: 11, name: 'Ultrasound Machine', availability: 'Limited of stock', image: 'ultrasound_machine.png' },
  { id: 12, name: 'Infusion Pump', availability: 'In stock', image: 'infusion_pump.png' },
  { id: 13, name: 'Patient Monitor', availability: 'Out of stock', image: 'patient_monitor.png' },
  { id: 14, name: 'Surgical Light', availability: 'In stock', image: 'surgical_light.png' },
  { id: 15, name: 'Hospital Beds', availability: 'In stock', image: 'surgical_light.png' },
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
            style={{ border: 'none', outline: 'none' }}
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
                    <span className="item-availability">{item.availability}</span>
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