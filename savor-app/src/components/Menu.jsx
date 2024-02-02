// src/components/Menu.jsx
import React, { useState } from 'react';

const Menu = ({ addToOrder }) => {
  const menuItems = [
    { name: 'Pizza', price: 12 },
    { name: 'Burger', price: 8 },
    { name: 'Pasta', price: 10 },
  ];

  const [quantities, setQuantities] = useState(Array(menuItems.length).fill(0));
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleIncrease = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
    setIsOrderPlaced(false); // Reset order placed flag
  };

  const handleDecrease = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index]--;
    }
    setQuantities(newQuantities);
    setIsOrderPlaced(false); // Reset order placed flag
  };

  const calculateTotal = () => {
    return menuItems.reduce((total, item, index) => {
      return total + item.price * quantities[index];
    }, 0);
  };

  const addToOrderHandler = () => {
    if (isOrderPlaced) {
      // If order is already placed, update the order
      const selectedItems = menuItems.filter((item, index) => quantities[index] > 0);
      addToOrder(selectedItems, [...quantities], calculateTotal(), true);
    } else {
      // If it's a new order, add to the order
      const selectedItems = menuItems.filter((item, index) => quantities[index] > 0);
      addToOrder(selectedItems, [...quantities], calculateTotal(), false);
      setIsOrderPlaced(true);
    }
  };

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.name} - Ksh. {item.price}
            <button type='button' onClick={() => handleIncrease(index)}>+</button>
            {quantities[index]}
            <button type='button' onClick={() => handleDecrease(index)}>-</button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={addToOrderHandler}>
        {isOrderPlaced ? 'Update Order' : 'Add to Order'}
      </button>
    </div>
  );
};

export default Menu;
