import React from 'react';
import { ReaPage } from '../components/ReaPage';
import { html } from '../data/pages/aboutData';

export const AboutPage: React.FC = () => {
  return <ReaPage html={html} />;
};
