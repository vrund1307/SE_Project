import React from 'react';
import FeePayments from './FeePayments';
import Second from './Second';

const Main = () => {
  return (
    <div style={{ backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      <Second />
      <FeePayments />
    </div>
  );
};

export default Main;
