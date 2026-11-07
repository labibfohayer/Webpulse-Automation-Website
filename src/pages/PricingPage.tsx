import React from 'react';
import { Navigate } from 'react-router-dom';

export const PricingPage: React.FC = () => {
  return <Navigate to="/service" replace />;
};

export default PricingPage;
