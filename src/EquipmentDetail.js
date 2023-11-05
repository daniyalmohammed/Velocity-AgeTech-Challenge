import React from 'react';
import { useParams } from 'react-router-dom';

const equipmentData = [
  {
    id: '1',
    name: 'Equipment A',
    hospitals: [
      {
        name: 'Trafalgar Hospital',
        cost: '$1000',
        stock: 10,
        estimatedTime: '2 days',
        brand: 'Pfizer'
      },
      {
        name: 'Trillium Care Center',
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
        name: 'Villa Italia Retirement Home',
        cost: '$1500',
        stock: 5,
        estimatedTime: '3 days',
        brand: 'Moderna'
      },
      {
        name: 'Melissa F. Core Lab',
        cost: '$1300',
        stock: 8,
        estimatedTime: '4 days',
        brand: 'N-22'
      },
      {
        name: 'McMaster University',
        cost: '$1300',
        stock: 8,
        estimatedTime: '4 days',
        brand: 'Johnson and Johnson'
      },
    ],
  },
  {
    id: '3',
    name: 'Equipment C',
    hospitals: [
      {
        name: 'Burlington Urgent Care Center',
        cost: '$800',
        stock: 15,
        estimatedTime: '1 day',
        brand: 'Therapeutics Labs'
      },
      {
        name: 'Juravinski Cancer Center',
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
