// src/components/OrderDetails.jsx
import React from 'react';

const OrderDetails = ({ selectedItems, quantities, total, formData }) => {
  const orderDetails = selectedItems.map((item, index) => ({
    food: item.name,
    price: item.price,
    locationOrTableNo: formData.isOnsite ? formData.tableNumber || 'Default Table' : formData.location || 'Default Location',
    quantity: quantities[index],
    subtotal: item.price * quantities[index],
  }));

  return (
    <div>
      <h2>Your Order</h2>
      <table>
        <thead>
          <tr>
            <th>Food</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Location/Table No.</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.map((orderItem, index) => (
            <tr key={index}>
              <td>{orderItem.food}</td>
              <td>{orderItem.quantity}</td>
              <td>Ksh. {orderItem.price}</td>
              <td>{orderItem.locationOrTableNo}</td>
              <td>Ksh. {orderItem.subtotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: Ksh. {total}</p>
    </div>
  );
};

export default OrderDetails;
