// src/components/Menu.jsx
import React, { useState } from 'react';

const Menu = ({ addToOrder }) => {
  const menuItems = [
    { name: 'Pizza', price: 12 },
    { name: 'Burger', price: 8 },
    { name: 'Pasta', price: 10 },
  ];

  const [quantities, setQuantities] = useState(Array(menuItems.length).fill(0));

  const handleIncrease = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const handleDecrease = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index]--;
    }
    setQuantities(newQuantities);
  };

  const calculateTotal = () => {
    return menuItems.reduce((total, item, index) => {
      return total + item.price * quantities[index];
    }, 0);
  };

  const addToOrderHandler = () => {
    const selectedItems = menuItems.filter((item, index) => quantities[index] > 0);
    addToOrder(selectedItems, [...quantities], calculateTotal());
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="flex items-center justify-between mb-2">
            <span>
              {item.name} - Ksh. {item.price}
            </span>
            <div className="flex items-center">
              <button type="button" onClick={() => handleIncrease(index)} className="mr-2 bg-blue-500 text-white px-3 py-1 rounded">
                +
              </button>
              <span>{quantities[index]}</span>
              <button type="button" onClick={() => handleDecrease(index)} className="ml-2 bg-blue-500 text-white px-3 py-1 rounded">
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button type="button" onClick={addToOrderHandler} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
        Submit Order
      </button>
    </div>
  );
};

export default Menu;
