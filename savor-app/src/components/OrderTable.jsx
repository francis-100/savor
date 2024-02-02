// src/components/OrderTable.jsx
import React, { useEffect, useState } from 'react';

const OrderTable = ({ selectedItems, quantities, total, formData, isOrderUpdated }) => {
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setIsUpdate(isOrderUpdated);
  }, [isOrderUpdated]);

  return (
    <div>
      <h2>{isUpdate ? 'Order Updated' : 'Your Order'}</h2>
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
          {selectedItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{quantities[index]}</td>
              <td>Ksh. {item.price}</td>
              <td>
                {formData && formData.isOnsite
                  ? formData.tableNumber || 'Default Table'
                  : formData && formData.location
                  ? formData.location
                  : 'Default Location'}
              </td>
              <td>Ksh. {item.price * quantities[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: Ksh. {total}</p>
    </div>
  );
};

export default OrderTable;
