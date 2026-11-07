import React from 'react';
import { ReaPage } from '../components/ReaPage';
import { html } from '../data/pages/teamData';

export const TeamPage: React.FC = () => {
  return <ReaPage html={html} />;
};
