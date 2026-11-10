import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { ReaPage } from '../components/ReaPage';
import { html } from '../data/pages/service_detailsData';

interface FeatureItem {
  title: string;
  desc: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface ServiceDetail {
  slug: string;
  title: string;
  heroH2: string;
  heroDesc: string;
  midH2: string;
  midDesc: string;
  features: FeatureItem[];
  bottomH2: string;
  bottomDesc: string;
  faqs: FaqItem[];
}

const servicesData: Record<string, ServiceDetail> = {
  'website-making': {
    slug: 'website-making',
    title: 'Website Making & Web Development',
    heroH2: 'We build ultra-fast, conversion-engineered websites, e-commerce, and study platforms.',
    heroDesc: 'Webpulse Automation crafts high-performance digital platforms using Next.js 14, React, and modern TypeScript. Whether you need a high-converting corporate website, an end-to-end E-Commerce storefront with automated checkout, or a specialized educational/study portal, we engineer every page for lightning speed, mobile elegance, and top-tier SEO rankings.',
    midH2: 'Scalable architecture tailored for modern businesses, e-commerce, and education.',
    midDesc: 'Our development philosophy centers on zero bloat, intuitive user experiences, and automated backend integrations. We don\'t just write code; we build digital assets that convert visitors into paying clients and streamline your everyday business operations.',
    features: [
      {
        title: 'Next.js & React Full-Stack Architecture',
        desc: 'Modern server-side rendering, instant page transitions, and sub-second load times engineered for high traffic and maximum uptime.',
      },
      {
        title: 'Custom E-Commerce Platforms',
        desc: 'Complete online stores with integrated payment gateways, real-time inventory management, automated order confirmation, and customer tracking.',
      },
      {
        title: 'Study & EdTech Websites',
        desc: 'Dedicated educational portals with course management, student dashboards, secure video streaming, and quiz/assignment systems.',
      },
      {
        title: 'Core Web Vitals & Technical SEO',
        desc: '95+ Google Lighthouse scores, semantic HTML5 structure, schema markup, and responsive design optimized for all mobile viewports.',
      },
    ],
    bottomH2: 'Turn your website into an automated sales and credibility engine.',
    bottomDesc: 'A modern website must work as your hardest-working 24/7 salesperson. We combine aesthetic beauty with conversion mechanics so your visitors easily understand your value, trust your brand, and take immediate action.',
    faqs: [
      {
        q: 'What technologies do you use to build modern websites?',
        a: 'We specialize in modern, scalable stacks including Next.js, React, TypeScript, Tailwind CSS, Node.js, and headless CMS or PostgreSQL/Supabase databases.',
      },
      {
        q: 'Can you build an E-Commerce or EdTech study website with payment integration?',
        a: 'Yes, absolutely! We build customized e-commerce stores with automated local and international checkout (bKash, Nagad, Stripe, SSLCommerz) and dedicated educational study platforms with student portals.',
      },
      {
        q: 'Will my website be 100% mobile responsive and fast?',
        a: 'Yes. Every website we build is rigorously tested across mobile, tablet, and desktop viewports, achieving 95+ Core Web Vitals scores and sub-second loading speeds.',
      },
      {
        q: 'How long does it take to design and launch a complete website?',
        a: 'A standard high-converting business website typically takes 7 to 14 days. Complex e-commerce or customized educational platforms take 2 to 4 weeks with continuous milestone previews.',
      },
      {
        q: 'Do you provide post-launch maintenance and technical support?',
        a: 'Yes, we provide ongoing maintenance, security updates, feature additions, and performance monitoring to keep your website running flawlessly.',
      },
    ],
  },
  'business-automation': {
    slug: 'business-automation',
    title: 'End-to-End Business & Workflow Automation',
    heroH2: 'Eliminate manual bottlenecks and scale operations with autonomous workflow pipelines.',
    heroDesc: 'Webpulse Automation connects your disparate tools, spreadsheets, and databases into a synchronized, self-operating ecosystem. Using n8n, Make, Zapier, custom webhooks, and REST APIs, we automate repetitive back-office tasks like client onboarding, automated invoice generation, CRM syncing, and multi-platform data reconciliation.',
    midH2: 'Turn hours of repetitive manual data entry into instant background workflows.',
    midDesc: 'Human errors, delayed responses, and manual paperwork cost modern businesses hundreds of lost hours each month. We design fail-safe automation architectures with real-time error logging, ensuring your operations execute smoothly 24/7 without requiring manual supervision.',
    features: [
      {
        title: 'n8n & Self-Hosted Automation Engines',
        desc: 'Enterprise-grade workflow automation running on private cloud infrastructure for maximum data security, zero vendor lock-in, and unlimited executions.',
      },
      {
        title: 'Automated Invoicing & Accounting',
        desc: 'Trigger automatic PDF invoice generation, payment confirmation emails, and real-time reconciliation with your accounting software.',
      },
      {
        title: 'Multi-Platform CRM & Database Sync',
        desc: 'Bi-directional real-time data sync between your website forms, Google Sheets, Notion, CRM systems, and custom operational databases.',
      },
      {
        title: 'Webhook & REST API Custom Pipelines',
        desc: 'Custom event-driven integrations connecting any third-party SaaS tool, payment gateway, or proprietary internal API seamlessly.',
      },
    ],
    bottomH2: 'Empower your team to focus on high-value strategy while workflows handle the rest.',
    bottomDesc: 'Automation isn\'t just about saving time; it\'s about eliminating operational friction, delivering instant customer satisfaction, and unlocking unprecedented scalability without proportional headcount growth.',
    faqs: [
      {
        q: 'What tools and automation platforms do you work with?',
        a: 'We build custom automations with n8n (self-hosted or cloud), Make.com, Zapier, Webhooks, Google Workspace APIs, and custom Node.js/Python serverless functions.',
      },
      {
        q: 'Can you automate our invoicing and client notification system?',
        a: 'Yes! Whenever a client pays or submits an order, the system automatically creates the branded invoice, sends an email/WhatsApp receipt, and logs the transaction into your database.',
      },
      {
        q: 'Is our business data secure when using automation workflows?',
        a: 'Security is our highest priority. We use encrypted webhook endpoints, strict API key management, and private self-hosted n8n instances so your sensitive customer data never leaks.',
      },
      {
        q: 'What happens if a third-party API or service experiences downtime?',
        a: 'Our workflows include automated retry mechanisms, error alerting via Telegram/Slack, and fail-safe dead-letter queues to prevent data loss.',
      },
      {
        q: 'Do I need technical skills to manage the automations after handover?',
        a: 'Not at all. We provide intuitive dashboard controls, clear documentation, and video walkthroughs so your team can easily monitor and trigger workflows.',
      },
    ],
  },
  'page-automation': {
    slug: 'page-automation',
    title: 'Meta & Social Page AI Automation',
    heroH2: 'Convert social engagement into qualified customer leads 24/7 on autopilot.',
    heroDesc: 'Webpulse Automation builds high-converting Meta page automations across Facebook and Instagram. When prospective customers comment on your reels, ads, or posts, our automated webhook engine immediately responds publicly and sends a personalized Direct Message (DM) with your product details, checkout link, or qualification funnel.',
    midH2: 'Instant response time equals higher conversions and zero missed sales leads.',
    midDesc: 'Studies show that responding to customer inquiries within the first 5 minutes increases conversion rates by over 300%. Our social automations operate 24 hours a day, qualifying buyer intent, capturing phone numbers and emails, and syncing leads directly to your sales pipeline.',
    features: [
      {
        title: 'Comment-to-DM Instant Triggers',
        desc: 'Automatically send product links, pricing guides, or discounts into the customer\'s inbox the exact second they comment on your posts or ads.',
      },
      {
        title: '24/7 Smart Inbox Auto-Responder',
        desc: 'Answer frequently asked questions, provide business hours, showcase product catalogs, and route complex inquiries to human agents seamlessly.',
      },
      {
        title: 'Lead Qualification & Contact Capture',
        desc: 'Interactive conversation flows that collect phone numbers, emails, and purchase preferences directly within Messenger and Instagram Direct.',
      },
      {
        title: 'Meta Official API Compliance',
        desc: '100% compliant with Meta Platform Policies, ensuring high delivery rates, zero shadowbans, and safe, reliable operations for your brand pages.',
      },
    ],
    bottomH2: 'Turn every social follower and post comment into an active revenue pipeline.',
    bottomDesc: 'Stop letting prospective buyers slip away because your team is asleep or busy. With Webpulse Automation, every post, ad, and reel works as an interactive customer acquisition engine.',
    faqs: [
      {
        q: 'Is Comment-to-DM automation approved by Facebook and Instagram?',
        a: 'Yes! We build strictly using official Meta Graph APIs and approved webhook standards, ensuring full platform compliance and account safety.',
      },
      {
        q: 'Can the automation capture the customer\'s phone number and delivery address?',
        a: 'Yes, the bot can guide the buyer through a quick conversational checkout or lead form, collect their name, phone number, and address, and send it straight to your CRM or Google Sheet.',
      },
      {
        q: 'What if a customer asks a complicated question the bot cannot answer?',
        a: 'The system detects complex inquiries, tags the conversation for human intervention, and sends an instant alert to your team so a human agent can take over.',
      },
      {
        q: 'Can this be used for paid Facebook and Instagram ad campaigns?',
        a: 'Yes! Connecting Comment-to-DM or Click-to-Message ads dramatically lowers cost per acquisition (CPA) by converting ad clicks into immediate one-on-one sales chats.',
      },
      {
        q: 'How quickly does the automation respond to a new comment or message?',
        a: 'Response time is near-instantaneous—typically within 1 to 3 seconds of the user\'s action.',
      },
    ],
  },
  'software-development': {
    slug: 'software-development',
    title: 'Custom Software & Android App Development',
    heroH2: 'Tailored enterprise software, intuitive management dashboards, and native Android apps.',
    heroDesc: 'Off-the-shelf software often forces your business into rigid, inefficient processes. Webpulse Automation architects custom web software, operational management portals, and modern Android mobile applications designed specifically around your company\'s workflows, team roles, and growth targets.',
    midH2: 'Engineered for rock-solid stability, intuitive usability, and rapid scaling.',
    midDesc: 'From multi-tenant SaaS platforms and inventory management backends to mobile apps with offline caching, we prioritize clean modular architecture, rigorous unit testing, and responsive UI design.',
    features: [
      {
        title: 'High-Performance Android Apps',
        desc: 'Native Kotlin and React Native mobile applications featuring push notifications, biometric auth, camera access, and offline data persistence.',
      },
      {
        title: 'Custom Business Management Portals',
        desc: 'Role-based administrative dashboards for tracking orders, client accounts, revenue analytics, and team productivity in real time.',
      },
      {
        title: 'Scalable Cloud Backends & Databases',
        desc: 'Secure PostgreSQL, Supabase, and Node.js REST/GraphQL APIs with automated backups, indexing, and high concurrency support.',
      },
      {
        title: 'Zero-Downtime CI/CD & Maintenance',
        desc: 'Automated deployment pipelines with comprehensive monitoring, regular vulnerability scanning, and seamless feature upgrades.',
      },
    ],
    bottomH2: 'Transform complex manual operations into high-velocity digital products.',
    bottomDesc: 'Whether you are modernizing legacy desktop workflows or launching an innovative mobile app for your customer base, Webpulse Automation delivers production-grade software that accelerates your business trajectory.',
    faqs: [
      {
        q: 'What frameworks do you use for Android app development?',
        a: 'We build native Android applications using modern Kotlin/Jetpack Compose, as well as cross-platform React Native for cost-effective multi-platform releases.',
      },
      {
        q: 'Can you build a custom dashboard for our internal team operations?',
        a: 'Yes, we specialize in building role-based internal portals (Admin, Manager, Staff) with custom permissions, data filters, and live analytics.',
      },
      {
        q: 'How do you ensure data security in custom software?',
        a: 'We implement industry-standard JWT/OAuth authentication, encrypted database connections, strict CORS/CSP policies, and automated security audit gates.',
      },
      {
        q: 'Do you assist with publishing apps to the Google Play Store?',
        a: 'Yes, we handle Google Play Console setup, app signing, store listing optimization, and privacy compliance through approval and publication.',
      },
      {
        q: 'Can the mobile app work offline without an active internet connection?',
        a: 'Yes, we implement local caching (SQLite/Room) with automatic background sync as soon as network connectivity is restored.',
      },
    ],
  },
  'ui-ux-design': {
    slug: 'ui-ux-design',
    title: 'UI/UX & Modern Website Design',
    heroH2: 'Conversion-centered design systems, modern aesthetics, and intuitive user experiences.',
    heroDesc: 'Great design is not just how it looks; it is how seamlessly your visitors navigate, trust, and convert into paying customers. Webpulse Automation designs world-class web interfaces, mobile layouts, and comprehensive design systems that position your brand as a market leader.',
    midH2: 'Bridging the gap between brand aesthetics and measurable business conversion.',
    midDesc: 'We combine deep user research with cutting-edge visual hierarchy, typography, glassmorphism, micro-interactions, and dark/light mode balance to create captivating digital experiences that leave a lasting impression.',
    features: [
      {
        title: 'Figma Design Systems & Prototypes',
        desc: 'Pixel-perfect component libraries, interactive click-through prototypes, and comprehensive design tokens ready for development handoff.',
      },
      {
        title: 'Conversion Rate Optimization (CRO)',
        desc: 'Strategic wireframes and visual layouts engineered to guide user eye-flow directly toward your primary call-to-actions.',
      },
      {
        title: 'Mobile-First Responsive Layouts',
        desc: 'Fluid layouts meticulously designed for iPhone, Android, tablet, and widescreen desktop displays with zero layout shift.',
      },
      {
        title: 'Modern Micro-Interactions & Motion',
        desc: 'Subtle, fluid animations and feedback states that elevate perceived brand quality without sacrificing load performance.',
      },
    ],
    bottomH2: 'A digital presence that reflects the true caliber of your enterprise.',
    bottomDesc: 'Your website and app interface are often the very first touchpoint for your prospective clients. We ensure your digital first impression radiates prestige, clarity, and uncompromising excellence.',
    faqs: [
      {
        q: 'What design tools do you use for UI/UX workflows?',
        a: 'We design primarily in Figma, delivering organized files with component libraries, auto-layout, variable modes, and clickable interactive prototypes.',
      },
      {
        q: 'Do I get to review and request revisions on the design?',
        a: 'Yes, our design workflow includes milestone reviews (wireframe stage, visual layout stage, and final review) with unlimited refinement within project scope.',
      },
      {
        q: 'Can you redesign our existing outdated website without losing our brand identity?',
        a: 'Yes! We specialize in brand modernization—keeping your core brand identity while refreshing typography, color harmonies, and visual sophistication.',
      },
      {
        q: 'Do you provide developer-ready assets after design completion?',
        a: 'Yes, all Figma files are organized with standardized design tokens, SVG exports, spacing grids, and clear specs for developer handoff.',
      },
      {
        q: 'How does good UI/UX directly impact my business revenue?',
        a: 'Intuitive UI reduces friction, shortens checkout/inquiry funnels, builds instant trust, and statistically increases lead conversion rates by 200% to 400%.',
      },
    ],
  },
  'ai-chatbots': {
    slug: 'ai-chatbots',
    title: 'Custom AI Chatbots & API Integrations',
    heroH2: 'Intelligent LLM chatbots trained on your company data and seamless third-party APIs.',
    heroDesc: 'Webpulse Automation develops domain-specific AI chatbots powered by modern Large Language Models (OpenAI GPT-4o, Anthropic Claude, Gemini) and Retrieval-Augmented Generation (RAG). We train AI agents on your product manuals, pricing sheets, and policies to deliver accurate, instant responses to customer inquiries.',
    midH2: 'Automate up to 80% of customer support inquiries with zero hallucinations.',
    midDesc: 'Generic chatbots frustrate users with robotic scripts. Our AI solutions understand context, colloquial language, and customer intent, answering questions naturally while maintaining strict guardrails to represent your business authentically.',
    features: [
      {
        title: 'Custom Knowledge Base RAG Pipelines',
        desc: 'We index your company documents, PDFs, FAQs, and website data into vector databases for hallucination-free, pinpoint answers.',
      },
      {
        title: 'Multi-Channel Deployment',
        desc: 'Deploy your intelligent chatbot across your Website widget, WhatsApp, Telegram, Facebook Messenger, and mobile app with a single backend.',
      },
      {
        title: 'Custom REST & GraphQL API Integrations',
        desc: 'Seamlessly connect external payment gateways, shipping providers, CRM systems, and cloud databases into your AI agent.',
      },
      {
        title: 'Smart Lead Scoring & Human Handoff',
        desc: 'The AI agent qualifies customer budget and urgency, extracts contact info, and smoothly routes high-value leads to your sales reps.',
      },
    ],
    bottomH2: 'Deliver immediate, 24/7 intelligent customer care without increasing support staff.',
    bottomDesc: 'Never leave a client waiting again. Empower your business with an AI assistant that works around the clock, answers complex questions in seconds, and drives qualified leads directly to your sales team.',
    faqs: [
      {
        q: 'How does the AI chatbot know about my specific company and products?',
        a: 'We train the AI using Retrieval-Augmented Generation (RAG), feeding it your exact product catalogs, FAQs, pricing details, and company policies.',
      },
      {
        q: 'Can the AI hallucinate or provide incorrect information?',
        a: 'We implement strict prompt guardrails and source verification so the AI only answers based on verified documents, admitting when it needs human assistance.',
      },
      {
        q: 'Can the chatbot integrate with WhatsApp or our website?',
        a: 'Yes! We build embeddable web chat widgets as well as official WhatsApp Cloud API, Telegram, and Messenger bots connected to the same knowledge base.',
      },
      {
        q: 'Can the AI perform actions like booking appointments or updating orders?',
        a: 'Yes, using function calling and custom APIs, the bot can check inventory, create support tickets, schedule appointments, and update customer records.',
      },
      {
        q: 'What are the ongoing costs of running a custom AI chatbot?',
        a: 'Ongoing costs depend on user inquiry volume and model token usage (typically just a few dollars per month for thousands of customer conversations).',
      },
    ],
  },
};

// Aliases mapping for backward compatibility and various links
const slugAliasMap: Record<string, string> = {
  'intelligent-process-automation': 'website-making',
  'custom-web-development': 'website-making',
  'website-making': 'website-making',

  'machine-learning-capabilities': 'business-automation',
  'business-process-automation': 'business-automation',
  'business-automation': 'business-automation',

  'seamless-system-integration': 'page-automation',
  'social-page-automation': 'page-automation',
  'page-automation': 'page-automation',

  'cloud-based-process-management': 'software-development',
  'broken-website-repair': 'software-development',
  'software-development': 'software-development',

  'ai-saas-platform-development': 'ui-ux-design',
  'ui-ux-design': 'ui-ux-design',

  'advanced-analytics-and-reporting': 'ai-chatbots',
  'custom-ai-agents': 'ai-chatbots',
  'ai-chatbots': 'ai-chatbots',
};

const allServiceLinks = [
  { slug: 'website-making', label: 'Website Making & Web Development' },
  { slug: 'business-automation', label: 'Business & Workflow Automation' },
  { slug: 'page-automation', label: 'Meta & Social Page Automation' },
  { slug: 'software-development', label: 'Custom Software & Android Apps' },
  { slug: 'ui-ux-design', label: 'UI/UX & Modern Website Design' },
  { slug: 'ai-chatbots', label: 'Custom AI Chatbots & APIs' },
];

export const ServiceDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const pageHtml = useMemo(() => {
    const canonicalKey = (slug && slugAliasMap[slug]) || 'website-making';
    const service = servicesData[canonicalKey] || servicesData['website-making'];

    let modified = html;

    // 1. Banner title
    modified = modified.replace(
      /<p class="title-page">[^<]+<\/p>/,
      `<p class="title-page">${service.title}</p>`
    );

    // 2. Breadcrumb
    modified = modified.replace(
      /<span class="text-title-1 fw-6 text-in-page">[^<]+<\/span>/,
      `<span class="text-title-1 fw-6 text-in-page">${service.title}</span>`
    );

    // 3. Hero H2 and desc
    modified = modified.replace(
      /<p class="h2 title color-title fw-6 mb-40">[^<]+<\/p>/,
      `<p class="h2 title color-title fw-6 mb-40">${service.heroH2}</p>`
    );
    modified = modified.replace(
      /<p class="desc desc-1 ff-2 color-paragraph">[^<]+<\/p>/,
      `<p class="desc desc-1 ff-2 color-paragraph">${service.heroDesc}</p>`
    );

    // 4. Middle section with features
    const midSectionHtml = `<div class="detail-content mb-70">
      <p class="h2 title color-title fw-6 mb-30">${service.midH2}</p>
      <p class="desc desc-2 ff-2 color-paragraph mb-40">${service.midDesc}</p>
      ${service.features
        .map(
          (feat, idx) => `
        <div class="features-item-details ${idx < service.features.length - 1 ? 'mb-30' : ''}">
          <p class="title h3 fw-6 color-title mb-10">${feat.title}</p>
          <p class="text ff-2 color-paragraph">${feat.desc}</p>
        </div>`
        )
        .join('')}
    </div>`;

    const midPattern = /<div class="detail-content mb-70">[\s\S]*?(?=<div class="image-details mb-50"><img[^>]*img-s-service-details-2)/;
    if (midPattern.test(modified)) {
      modified = modified.replace(midPattern, midSectionHtml);
    }

    // 5. Bottom section with FAQs
    const bottomSectionHtml = `<div class="detail-content">
      <p class="h2 title color-title fw-6 mb-30">${service.bottomH2}</p>
      <p class="desc desc-2 ff-2 color-paragraph mb-50">${service.bottomDesc}</p>
      <div class="wg-according no-bg g-10">
        ${service.faqs
          .map(
            (faq, idx) => `
          <div class="according-item style-2">
            <p class="header-according">
              <a href="#service-faq-${idx}" class="title-according h4 fw-6 ${idx === 0 ? '' : 'collapsed'}" aria-expanded="${idx === 0 ? 'true' : 'false'}">
                <span class="text-title">${idx + 1}. ${faq.q}</span>
                <span class="icon"><span></span></span>
              </a>
            </p>
            <div id="service-faq-${idx}" class="according-content ${idx === 0 ? 'show' : ''}">
              <div class="according-content-inner">
                <p class="text ff-2">${faq.a}</p>
              </div>
            </div>
          </div>`
          )
          .join('')}
      </div>
    </div></div>`;

    const bottomPattern = /<div class="detail-content"><p class="h2 title color-title fw-6 mb-30">Unlock new opportunities[\s\S]*?(?=<div class="col-xl-4">)/;
    if (bottomPattern.test(modified)) {
      modified = modified.replace(bottomPattern, bottomSectionHtml);
    }

    // 6. Sidebar categories
    const sidebarHtml = `<div class="wg-siderbar-category mb-30">
      ${allServiceLinks
        .map(
          (item) => `
        <a class="siderbar-category-item text-title-1 lh-100 fw-6 letter-space--3 ${item.slug === canonicalKey ? 'active' : ''}" href="/service-details/${item.slug}">
          <span class="icon-arrow-up-right"></span>
          <span class="text-title">${item.label}</span>
        </a>`
        )
        .join('')}
    </div>`;

    const sidebarPattern = /<div class="wg-siderbar-category mb-30">[\s\S]*?<\/div>/;
    if (sidebarPattern.test(modified)) {
      modified = modified.replace(sidebarPattern, sidebarHtml);
    }

    return modified;
  }, [slug]);

  return <ReaPage html={pageHtml} />;
};
