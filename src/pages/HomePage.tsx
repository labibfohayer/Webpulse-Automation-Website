import React from 'react';
import { ReaPage } from '../components/ReaPage';
import { html } from '../data/pages/homeData';

export const HomePage: React.FC = () => {
  return <ReaPage html={html} />;
};
