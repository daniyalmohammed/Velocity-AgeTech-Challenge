import React from 'react';
import { useParams } from 'react-router-dom';

const details = {
  '1': ['Hospital A', 'Hospital B'],
  '2': ['Hospital C', 'Hospital D'],
  '3': ['Hospital E', 'Hospital F'],
};

function EquipmentDetail() {
  const { id } = useParams();
  const hospitals = details[id] || [];

  return (
    <div>
      <h1>Equipment Detail</h1>
      <h2>Available at:</h2>
      <ul>
        {hospitals.map((hospital, index) => (
          <li key={index}>{hospital}</li>
        ))}
      </ul>
    </div>
  );
}

export default EquipmentDetail;
