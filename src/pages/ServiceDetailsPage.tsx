import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { ReaPage } from '../components/ReaPage';
import { html } from '../data/pages/service_detailsData';

interface ServiceInfo {
  title: string;
  subtitle: string;
  h2: string;
  desc: string;
}

const serviceMap: Record<string, ServiceInfo> = {
  'custom-web-development': {
    title: 'Custom Web Design & Full-Stack Development',
    subtitle: 'High-speed Next.js and React architecture engineered for conversion, speed, and scalable performance.',
    h2: 'Architecting ultra-fast, modern web applications that outperform competitors.',
    desc: 'We engineer custom web applications using Next.js 14, React, and modern TypeScript. Every platform is optimized for sub-second page loads, responsive mobile experience, and robust SEO architecture.',
  },
  'broken-website-repair': {
    title: 'Broken Website Repair & Speed Optimization',
    subtitle: 'Reviving legacy codebases, fixing broken responsive layouts, and optimizing Core Web Vitals to 95+ scores.',
    h2: 'Recovering broken, slow, and compromised websites with zero downtime.',
    desc: 'Our specialized recovery team diagnoses and repairs legacy bottlenecks, database latency, broken plugins, and CSS conflicts to restore flawless performance.',
  },
  'social-page-automation': {
    title: 'Social Page & Social Media AI Automation',
    subtitle: 'Automated comment-to-DM lead capture, conversational chatbots, and 24/7 sales pipeline for Meta.',
    h2: 'Convert social engagement into qualified sales leads around the clock.',
    desc: 'We deploy smart webhook automations across Facebook and Instagram that automatically reply to comments, send direct inbox messages, and qualify customer leads 24/7.',
  },
  'business-process-automation': {
    title: 'End-to-End Business Process Automation',
    subtitle: 'Connecting n8n, Make, and Zapier to eliminate repetitive invoicing, CRM syncing, and order processing.',
    h2: 'Automate repetitive back-office operations and eliminate human error.',
    desc: 'We design autonomous workflows connecting your CRM, invoicing systems, payment gateways, and databases into a seamless, self-operating business engine.',
  },
  'custom-ai-agents': {
    title: 'Custom AI Agents & Internal Knowledge Bots',
    subtitle: 'Autonomous AI agents trained on proprietary company data for customer service and team workflows.',
    h2: 'Intelligent AI agents that understand your unique business operations.',
    desc: 'We build and deploy custom LLM agents and RAG pipelines trained on your internal documentation to answer inquiries, draft quotes, and assist operations with high precision.',
  },
  'intelligent-process-automation': {
    title: 'Intelligent Business Process Automation',
    subtitle: 'Next-Gen automation and high-speed web engineering tailored for modern businesses.',
    h2: 'We architect autonomous business workflows and high-converting web platforms.',
    desc: 'Webpulse Automation empowers businesses to eliminate operational bottlenecks, reduce headcount overhead, and accelerate growth through cutting-edge technology.',
  },
};

export const ServiceDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const pageHtml = useMemo(() => {
    const service = (slug && serviceMap[slug]) || serviceMap['intelligent-process-automation'];
    let modified = html;
    modified = modified.replace(
      /<p class="title-page">[^<]+<\/p>/,
      `<p class="title-page">${service.title}</p>`
    );
    modified = modified.replace(
      /<p class="h2 title color-title fw-6 mb-40">[^<]+<\/p>/,
      `<p class="h2 title color-title fw-6 mb-40">${service.h2}</p>`
    );
    modified = modified.replace(
      /<p class="desc desc-1 ff-2 color-paragraph">[^<]+<\/p>/,
      `<p class="desc desc-1 ff-2 color-paragraph">${service.desc}</p>`
    );
    return modified;
  }, [slug]);

  return <ReaPage html={pageHtml} />;
};
