import React from 'react';
import { ReaPage } from '../components/ReaPage';
import { html } from '../data/pages/blog_standardData';

export const BlogPage: React.FC = () => {
  return <ReaPage html={html} />;
};
