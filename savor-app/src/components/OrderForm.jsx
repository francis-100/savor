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

  const handlePhoneChange = (e) => {
    // Allow only numbers and limit to 10 digits
    const input = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled before submitting
    if (!name || !phone || (isOnsite && !tableNumber) || (!isOnsite && !location)) {
      alert('Please fill in all required fields.');
      return;
    }

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
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" value={phone} onChange={handlePhoneChange} required />
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
            <input type="number" value={tableNumber} onChange={(e) => setTableNumber(e.target.value)} required />
          </label>
        ) : (
          <label>
            Location:
            <select value={location} onChange={(e) => setLocation(e.target.value)} required>
              <option value="" disabled hidden>
                Select Location
              </option>
              <option value="Sample Location 1">Texas</option>
              <option value="Sample Location 2">New York</option>
              {/* Add more options as needed */}
            </select>
          </label>
        )}
        <br />
        <button type="submit">Complete Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
