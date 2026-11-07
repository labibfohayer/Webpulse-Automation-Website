import React from 'react';
import { ReaPage } from '../components/ReaPage';
import { html } from '../data/pages/ai_startupData';

export const AiStartupPage: React.FC = () => {
  return <ReaPage html={html} />;
};
