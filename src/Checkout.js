import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Checkout.css'; // Ensure this path is correct for your project structure
import Modal from './Modal'; // This is a modal component you might need to create

// Inside your component function before return

function Checkout() {
  const location = useLocation();
  const { listing } = location.state || {};
  const [unitCount, setUnitCount] = useState(1);
  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [serviceFee, setServiceFee] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(2.99); // Example delivery charge
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    if (listing) {
      const unitPrice = Number(listing.price.substring(1));
      const updatedSubTotal = unitPrice * unitCount;
      const updatedTax = updatedSubTotal * 0.13; // 13% tax
      const updatedServiceFee = updatedSubTotal * 0.15; // 15% service fee

      setSubTotal(updatedSubTotal);
      setTax(updatedTax);
      setServiceFee(updatedServiceFee);
      setFinalPrice(updatedSubTotal + updatedTax + updatedServiceFee + deliveryCharge);
    }
  }, [unitCount, listing]);

  const handleUnitChange = (event) => {
    const count = Math.max(1, parseInt(event.target.value, 10));
    setUnitCount(count);
  };
  const [showModal, setShowModal] = useState(false);


  return (
    <div className="checkout-container">
      {listing ? (
        <>
          <h2>Checkout</h2>
          <div className="checkout-listing">
            <h3>{listing.equipmentType}</h3>
            <p>Supplier: {listing.supplier}</p>
            <p>Price per unit: {listing.price}</p>
            <p>Delivery Time: {listing.rentalPeriod}</p>
            <div className="quantity-selector">
              <label htmlFor="unitCount">Units:</label>
              <input
                type="number"
                id="unitCount"
                min="1"
                value={unitCount}
                onChange={handleUnitChange}
              />
            </div>
            <div className="summary">
              <div className="summary-item"><span>Subtotal</span><span>${subTotal.toFixed(2)}</span></div>
              <div className="summary-item"><span>Delivery Fee</span><span>${deliveryCharge.toFixed(2)}</span></div>
              <div className="summary-item"><span>Service Fee</span><span>${serviceFee.toFixed(2)}</span></div>
              <div className="summary-item"><span>Estimated Tax</span><span>${tax.toFixed(2)}</span></div>
              <div className="summary-total">
                <span>Total: </span>
                <span className="total-price">${finalPrice.toFixed(2)}</span>
              </div>
            </div>
            <button className="checkout-button" onClick={() => setShowModal(true)}>Place Order</button>

{showModal && (
  <Modal onClose={() => setShowModal(false)}>
    <p>Thank you for renting from MedMobilize, your order will arrive in {listing.rentalPeriod} business days.</p>
  </Modal>
)}
          </div>
        </>
      ) : (
        <p>No item selected for checkout.</p>
      )}
    </div>
  );
}

export default Checkout;
