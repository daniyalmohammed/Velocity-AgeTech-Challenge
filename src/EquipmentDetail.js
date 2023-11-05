import React from 'react';
import { useParams } from 'react-router-dom';

const equipmentData = [
  {
    id: '1',
    name: 'Equipment A',
    hospitals: [
      {
        name: 'Hospital A',
        cost: '$1000',
        stock: 10,
        estimatedTime: '2 days',
        brand: 'ACME'
      },
      {
        name: 'Hospital B',
        cost: '$1200',
        stock: 5,
        estimatedTime: '3 days',
        brand: 'ACME'
      },
    ],
  },
  {
    id: '2',
    name: 'Equipment B',
    hospitals: [
      {
        name: 'Hospital C',
        cost: '$1500',
        stock: 5,
        estimatedTime: '3 days',
        brand: 'ACME'
      },
      {
        name: 'Hospital D',
        cost: '$1300',
        stock: 8,
        estimatedTime: '4 days',
        brand: 'ACME'
      },
    ],
  },
  {
    id: '3',
    name: 'Equipment C',
    hospitals: [
      {
        name: 'Hospital E',
        cost: '$800',
        stock: 15,
        estimatedTime: '1 day',
        brand: 'ACME'
      },
      {
        name: 'Hospital F',
        cost: '$900',
        stock: 20,
        estimatedTime: '2 days',
        brand: 'ACME'
      },
    ],
  },
];

function EquipmentDetail() {
  const { id } = useParams();
  const equipment = equipmentData.find(item => item.id === id);

  return (
    <div className="equipment-list">
      <h1>Equipment Detail</h1>
      <div className="card-container">
        {equipment.hospitals.map((hospital, index) => (
          <div className="card" key={index}>
            <img src={require("./images/hospital-image.jpg")} alt={hospital.name} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{hospital.name}</h3>
              <p>Brand: {hospital.brand}</p>
              <p>Cost: {hospital.cost}</p>
              <p>Number in Stock: {hospital.stock}</p>
              <p>Estimated Time: {hospital.estimatedTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EquipmentDetail;
