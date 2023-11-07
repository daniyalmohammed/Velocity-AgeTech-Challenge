// Modal.js file
import React from 'react';
import './Modal.css'; // Make sure to create this CSS file for styling

function Modal({ children, onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
