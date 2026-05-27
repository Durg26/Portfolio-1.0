export interface Experience {
  per: string;
  role: string;
  co: string;
  desc: string;
}

export interface EventItem {
  name: string;
  date: string;
  desc: string;
}

export interface Cert {
  name: string;
  iss: string;
  date: string;
}

export interface Post {
  tag: string;
  title: string;
  date: string;
  exc: string;
}

export const experiences: Experience[] = [
  {
    per: 'Oct 2025 to Present',
    role: 'Social Media Coordinator',
    co: 'Abstract Cafe, Dalhousie Student Union — Halifax, NS',
    desc: 'Managing end-to-end content strategy for the cafe\'s Instagram, growing the account to 1K+ followers and 5K+ views organically without paid promotion. Designing menus, pricing materials, and branded content while monitoring performance through Instagram Insights to optimize posting strategy.',
  },
  {
    per: 'Aug 2025 to Present',
    role: 'Campus Engagement Assistant (CEA)',
    co: 'Student Affairs, Dalhousie University — Halifax, NS',
    desc: 'Executing multi-channel campaigns reaching 19,000+ students in collaboration with Student Experience, Operations, and Communications teams. Planning and delivering high-impact campus events including Orientation Week and Impact Awards, with full ownership of promotional strategy, logistics coordination, and on-site execution.',
  },
  {
    per: 'Oct 2024 to Present',
    role: 'Founder',
    co: 'Event Tree, Dalhousie University — Halifax, NS',
    desc: 'Identified a gap in campus event discovery for Dalhousie\'s student body and built a platform from the ground up without institutional support. Designed the concept, branding, marketing campaigns, platform structure, and UX — prioritizing accessibility and student engagement.',
  },
  {
    per: 'Mar 2024 · Jan 2026',
    role: 'Research Assistant',
    co: 'Atlantic Personnel Selection Lab, Saint Mary\'s University — Halifax, NS',
    desc: 'Worked alongside senior researchers on assessment studies, contributing to study design and participant evaluations. Scored and analyzed data for 60+ evaluations, managed large-scale datasets, and completed a comprehensive scoping review of 1,000+ academic articles.',
  },
  {
    per: 'Sept 2023 to May 2024',
    role: 'Marketing / PR Director',
    co: 'Dalhousie Science Society, Dalhousie University — Halifax, NS',
    desc: 'Led marketing campaigns promoting 4+ events per semester and developed PR strategies that expanded the society\'s campus presence. Coordinated cross-functional team efforts in content creation, branding, and communication to ensure consistent messaging across all outreach.',
  },
];

export const eventsData: EventItem[] = [
  {
    name: 'Dalhousie Orientation Week',
    date: 'August 2025',
    desc: 'Took full ownership of promotional strategy, logistics coordination, and on-site execution for Dalhousie\'s flagship Orientation Week, reaching thousands of incoming students.',
  },
  {
    name: 'Impact Awards',
    date: '2025',
    desc: 'Planned and delivered the Impact Awards ceremony for Dalhousie Student Affairs, managing end-to-end event production, communication, and on-the-day operations.',
  },
  {
    name: 'Dalhousie Science Society Events',
    date: '2023 to 2024',
    desc: 'Led marketing and PR for 4+ Science Society events per semester, driving student engagement through social media strategy, campus partnerships, and cohesive visual branding.',
  },
  {
    name: 'Event Tree Platform Launch',
    date: 'Oct 2024',
    desc: 'Founded and launched Event Tree, a campus event discovery platform for Dalhousie students — handling everything from concept and UX design to promotion strategy and rollout.',
  },
];

export const certs: Cert[] = [
  { name: 'Google Analytics 4', iss: 'Google', date: '2024' },
  { name: 'Google Ads Search', iss: 'Google', date: '2024' },
  { name: 'HubSpot Reporting', iss: 'HubSpot Academy', date: '2024' },
  { name: 'HubSpot Digital Advertising', iss: 'HubSpot Academy', date: '2024' },
];

export const posts: Post[] = [
  {
    tag: 'Psychology and Marketing',
    title: 'What Studying Human Behaviour Taught Me About Campaigns',
    date: 'April 2026',
    exc: 'The same principles that explain why people form habits also explain why some marketing works and most does not.',
  },
  {
    tag: 'Events',
    title: 'Building Community: Lessons After 20 Events',
    date: 'February 2026',
    exc: 'After three years of planning events of every scale, I keep coming back to the same question: what actually makes people feel welcome?',
  },
  {
    tag: 'Reflection',
    title: 'The Underrated Skill in Any Creative Field',
    date: 'December 2025',
    exc: 'It is not strategy, or aesthetics. It is knowing when to listen, and then genuinely doing it.',
  },
];

export const skills: string[] = [
  'Social Media Strategy',
  'Event Management',
  'Content Creation',
  'Marketing & PR',
  'Community Engagement',
  'Canva & Figma',
  'Adobe Suite',
  'HubSpot',
  'Data Analysis',
  'Research',
  'Branding',
  'Psychology',
];
