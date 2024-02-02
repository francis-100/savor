// src/components/OrderForm.jsx
import React, { useState } from 'react';

const OrderForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isOnsite, setIsOnsite] = useState(true);
  const [tableNumber, setTableNumber] = useState('');
  const [location, setLocation] = useState('');

  const handleOnsiteChange = () => {
    setIsOnsite(!isOnsite);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      phone,
      isOnsite,
      tableNumber: isOnsite ? tableNumber : null,
      location: isOnsite ? null : location,
    };
    onSubmit(formData);
  };

  return (
    <div>
      <h2>Order Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Onsite:
          <input type="checkbox" checked={isOnsite} onChange={handleOnsiteChange} />
        </label>
        <br />
        {isOnsite ? (
          <label>
            Table Number:
            <input type="text" value={tableNumber} onChange={(e) => setTableNumber(e.target.value)} />
          </label>
        ) : (
          <label>
            Location:
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
          </label>
        )}
        <br />
        <button type="submit">Add to Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
