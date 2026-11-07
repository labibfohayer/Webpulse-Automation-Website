import React from 'react';
import { ReaPage } from '../components/ReaPage';
import { html } from '../data/pages/faqData';

export const FaqPage: React.FC = () => {
  return <ReaPage html={html} />;
};
