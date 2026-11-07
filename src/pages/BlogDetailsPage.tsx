import React from 'react';
import { ReaPage } from '../components/ReaPage';
import { html } from '../data/pages/blog_detailsData';

export const BlogDetailsPage: React.FC = () => {
  return <ReaPage html={html} />;
};
