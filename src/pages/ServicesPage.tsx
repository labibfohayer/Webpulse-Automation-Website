import React from 'react';
import { ReaPage } from '../components/ReaPage';
import { html } from '../data/pages/serviceData';

export const ServicesPage: React.FC = () => {
  return <ReaPage html={html} />;
};
