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
        Submit Order
      </button>
    </div>
  );
};

export default Menu;
