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
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Order</h2>
      <table className="w-full mb-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Food</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Location/Table No.</th>
            <th className="border px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.map((orderItem, index) => (
            <tr key={index} className="border-t">
              <td className="border px-4 py-2">{orderItem.food}</td>
              <td className="border px-4 py-2">{orderItem.quantity}</td>
              <td className="border px-4 py-2">Ksh. {orderItem.price}</td>
              <td className="border px-4 py-2">{orderItem.locationOrTableNo}</td>
              <td className="border px-4 py-2">Ksh. {orderItem.subtotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xl font-bold">Total: Ksh. {total}</p>
    </div>
  );
};

export default OrderDetails;
