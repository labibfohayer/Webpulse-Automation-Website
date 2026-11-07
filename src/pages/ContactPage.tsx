import React from 'react';
import { ReaPage } from '../components/ReaPage';
import { html } from '../data/pages/contactData';

export const ContactPage: React.FC = () => {
  return <ReaPage html={html} />;
};
