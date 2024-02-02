// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import OrderTable from './components/OrderTable';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';

const App = () => {
  const [order, setOrder] = useState({ selectedItems: [], quantities: [], total: 0 });
  const [formData, setFormData] = useState(null);
  const [isOrderUpdated, setIsOrderUpdated] = useState(false);

  const addToOrder = (selectedItems, quantities, total, isUpdate) => {
    if (isUpdate) {
      // If updating the order, update state and set the flag
      setOrder({ selectedItems, quantities, total });
      setIsOrderUpdated(true);
    } else {
      // If it's a new order, update state
      setOrder({ selectedItems, quantities, total });
    }
  };

  const submitForm = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <Navbar />
      <Menu addToOrder={addToOrder} />
      <OrderForm onSubmit={submitForm} />
      <OrderTable {...order} formData={formData} isOrderUpdated={isOrderUpdated} />
      <Footer />
    </div>
  );
};

export default App;
