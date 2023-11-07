import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EquipmentDetail.css'; // This path should be relative to your component file


const equipmentData = [
  {
    id: '1',
    equipmentType: 'Equipment A',
    listings: [
      {
        equipmentType: 'Equipment A',
        model: 'Pfizer',
        count: 10,
        price: '$1000',
        rentalPeriod: '2 days',
        supplier: 'Trafalgar Hospital'
      },
      {
        equipmentType: 'Equipment A',
        model: 'ACME',
        count: 5,
        price: '$1200',
        rentalPeriod: '3 days',
        supplier: 'Trillium Care Center'
      },
    ],
  },
  {
    id: '2',
    equipmentType: 'Equipment B',
    listings: [
      {
        equipmentType: 'Equipment A',
        model: 'Moderna',
        count: 5,
        price: '$1500',
        rentalPeriod: '3 days',
        supplier: 'Villa Italia Retirement Home'
      },
      {
        equipmentType: 'Equipment A',
        model: 'N-22',
        count: 8,
        price: '$1300',
        rentalPeriod: '4 days',
        supplier: 'Melissa F. Core Lab'
      },
      {
        equipmentType: 'Equipment A',
        model: 'Johnson and Johnson',
        count: 8,
        price: '$1300',
        rentalPeriod: '4 days',
        supplier: 'McMaster University'
      },
    ],
  },
  {
    id: '3',
    equipmentType: 'Equipment C',
    listings: [
      {
        equipmentType: 'Equipment A',
        model: 'Therapeutics Labs',
        count: 15,
        price: '$800',
        rentalPeriod: '1 day',
        supplier: 'Burlington Urgent Care Center'
      },
      {
        equipmentType: 'Equipment A',
        model: 'ACME',
        count: 20,
        price: '$900',
        rentalPeriod: '2 days',
        supplier: 'Juravinski Cancer Center'
      },
    ],
  },
];


function EquipmentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const equipment = equipmentData.find(item => item.id === id);
  const [sortedListings, setSortedListings] = useState(equipment.listings);

  const sortListings = (field) => {
    const sorted = [...sortedListings].sort((a, b) => {
      let valA = field === 'price' ? Number(a[field].substring(1)) : Number(a[field].split(' ')[0]);
      let valB = field === 'price' ? Number(b[field].substring(1)) : Number(b[field].split(' ')[0]);
      
      return valA - valB;
    });
    setSortedListings(sorted);
  };

  const handleRowClick = (listing) => {
    // This will navigate to the checkout page with the clicked listing's details
    navigate('/checkout', { state: { listing } });
  };

  return (
    <div className="equipment-detail">
      <h1>{equipment.equipmentType} Details</h1>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Supplier</th>
            <th className="sortable" onClick={() => sortListings('price')}>
              Price  ↑↓<i className="fa fa-sort"></i>
            </th>
            <th className="sortable" onClick={() => sortListings('rentalPeriod')}>
              Delivery Time  ↑↓<i className="fa fa-sort"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedListings.map((listing, index) => (
            <tr key={index} onClick={() => handleRowClick(listing)} className="clickable-row">
              <td>{listing.model}</td>
              <td>{listing.supplier}</td>
              <td>{listing.price}</td>
              <td>{listing.rentalPeriod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EquipmentDetail;