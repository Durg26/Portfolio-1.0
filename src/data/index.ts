export interface Experience {
  per: string;
  role: string;
  co: string;
  desc: string;
  type: string;
  typeKey: string;
  color: string;
  highlight: string;
}

export interface EventItem {
  name: string;
  date: string;
  desc: string;
  slug: string;
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
  slug: string;
  readingTime: number;
}

export const experiences: Experience[] = [
  {
    per: 'Oct 2025 to Present',
    role: 'Social Media Coordinator',
    co: 'Abstract Cafe, Dalhousie Student Union',
    desc: 'Running the full content pipeline for the cafe\'s Instagram: planning, scheduling, audience targeting, and performance review through Instagram Insights. Designing menus, pricing materials, and branded content that keeps the account growing without any paid promotion.',
    type: 'Social Media',
    typeKey: 'social',
    color: '#995F2F',
    highlight: '1K+ followers and 5K+ views, zero paid spend',
  },
  {
    per: 'Aug 2025 to Present',
    role: 'Campus Engagement Assistant',
    co: 'Student Affairs, Dalhousie University',
    desc: 'Running multi-channel campaigns across Student Experience, Operations, and Communications teams. Full ownership of Orientation Week and Impact Awards, from promotional strategy and logistics to on-site execution. Tracking campaign data in real time to adjust and improve.',
    type: 'Marketing and Events',
    typeKey: 'events',
    color: '#b87a3a',
    highlight: '19,000+ students reached across campaigns',
  },
  {
    per: 'Oct 2024 to Present',
    role: 'Founder',
    co: 'Event Tree, Dalhousie University',
    desc: 'Spotted a gap in how Dalhousie students discover campus events and built a platform from nothing to fill it. Handled the concept, branding, UX, and promotion strategy independently, with student accessibility as the core priority.',
    type: 'Entrepreneur',
    typeKey: 'founder',
    color: '#978F66',
    highlight: 'Built and launched a campus platform from scratch',
  },
  {
    per: 'Mar 2024 and Jan 2026',
    role: 'Research Assistant',
    co: 'Atlantic Personnel Selection Lab, Saint Mary\'s University',
    desc: 'Contributing to study design and participant evaluations alongside senior researchers. Scored and analyzed data for 60+ assessments, managed large datasets, and completed a scoping review covering more than 1,000 academic papers.',
    type: 'Research',
    typeKey: 'research',
    color: '#978F66',
    highlight: '1,000+ papers reviewed, 60+ evaluations scored',
  },
  {
    per: 'Sept 2023 to May 2024',
    role: 'Marketing and PR Director',
    co: 'Dalhousie Science Society',
    desc: 'Led marketing campaigns for 4+ events per semester. Developed PR strategies that widened the society\'s campus reach and coordinated content creation, branding, and communications across a cross-functional team.',
    type: 'Marketing and PR',
    typeKey: 'marketing',
    color: '#995F2F',
    highlight: '4+ events promoted per semester',
  },
];

export const eventsData: EventItem[] = [
  {
    name: 'Dalhousie Orientation Week',
    date: 'August 2025',
    desc: 'Full ownership of promotional strategy, logistics, and on-site execution for Dalhousie\'s flagship Orientation Week, reaching thousands of incoming students.',
    slug: 'dalhousie-orientation-week',
  },
  {
    name: 'Impact Awards',
    date: '2025',
    desc: 'Planned and delivered the Impact Awards ceremony for Dalhousie Student Affairs, managing end-to-end production, communication, and on-the-day operations.',
    slug: 'impact-awards-2025',
  },
  {
    name: 'Science Society Events',
    date: '2023 to 2024',
    desc: 'Led marketing and PR for 4+ Science Society events per semester, driving student engagement through social media strategy, campus partnerships, and cohesive visual branding.',
    slug: 'science-society-events',
  },
  {
    name: 'Event Tree Platform Launch',
    date: 'Oct 2024',
    desc: 'Founded and launched Event Tree, a campus event discovery platform for Dalhousie students. Handled concept, UX design, promotion strategy, and rollout from the ground up.',
    slug: 'event-tree-launch',
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
    slug: 'what-studying-human-behaviour-taught-me',
    readingTime: 5,
  },
  {
    tag: 'Events',
    title: 'Building Community: Lessons After 20 Events',
    date: 'February 2026',
    exc: 'After three years of planning events of every scale, the same question keeps coming up: what actually makes people feel welcome?',
    slug: 'building-community-lessons-after-20-events',
    readingTime: 6,
  },
  {
    tag: 'Reflection',
    title: 'The Underrated Skill in Any Creative Field',
    date: 'December 2025',
    exc: 'It is not strategy, or aesthetics. It is knowing when to listen, and then actually doing it.',
    slug: 'the-underrated-skill-in-any-creative-field',
    readingTime: 4,
  },
];

export const skills: string[] = [
  'Social Media Strategy',
  'Event Management',
  'Content Creation',
  'Marketing and PR',
  'Community Engagement',
  'Canva and Figma',
  'Adobe Suite',
  'HubSpot',
  'Data Analysis',
  'Research',
  'Branding',
  'Psychology',
];

export interface PhotoItem {
  src: string;
  width: number;
  alt: string;
}

export const photos: PhotoItem[] = [
  { src: '', width: 240, alt: 'Moment 1' },
  { src: '', width: 340, alt: 'Moment 2' },
  { src: '', width: 280, alt: 'Moment 3' },
  { src: '', width: 260, alt: 'Moment 4' },
  { src: '', width: 320, alt: 'Moment 5' },
  { src: '', width: 240, alt: 'Moment 6' },
  { src: '', width: 300, alt: 'Moment 7' },
  { src: '', width: 340, alt: 'Moment 8' },
];

export interface VideoItem {
  label: string;
  youtubeId: string;
}

export const videos: VideoItem[] = [
  { label: 'Film 01', youtubeId: '' },
  { label: 'Film 02', youtubeId: '' },
  { label: 'Film 03', youtubeId: '' },
];

export interface DesignItem {
  src: string;
  alt: string;
  label: string;
  client: string;
}

const base = import.meta.env.BASE_URL;

export const designs: DesignItem[] = [
  { src: `${base}designs/abstract-cafe-march-menu.jpg`, alt: 'Abstract Cafe March Menu', label: 'March Menu', client: 'The Abstract Cafe' },
  { src: `${base}designs/abstract-cafe-valentines-menu.jpg`, alt: 'Abstract Cafe Valentines Menu', label: 'Valentine\'s Menu', client: 'The Abstract Cafe' },
  { src: `${base}designs/abstract-cafe-menu-update.jpg`, alt: 'Abstract Cafe Menu Update', label: 'Menu Update', client: 'The Abstract Cafe' },
  { src: `${base}designs/abstract-cafe-brewing-soon.jpg`, alt: 'Brewing Soon poster', label: 'Brewing Soon', client: 'The Abstract Cafe' },
  { src: `${base}designs/abstract-cafe-garrison.jpg`, alt: 'Garrison Happy Hour poster', label: 'Garrison Happy Hour', client: 'The Abstract Cafe' },
];
