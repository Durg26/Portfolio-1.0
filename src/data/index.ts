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
    per: 'Jan 2024 to Present',
    role: 'Marketing and Communications Coordinator',
    co: 'Your Organization, Halifax NS',
    desc: 'Leading marketing strategy, content creation, and community outreach. Managing social media presence and coordinating campaigns that grow audience engagement and drive meaningful participation.',
  },
  {
    per: 'Sep 2022 to Apr 2024',
    role: 'Event Coordinator',
    co: 'Dalhousie Student Union, Halifax NS',
    desc: 'Planned and executed campus-wide events with 200 to 1,000+ attendees. Managed vendor relationships, logistics, budgeting, and volunteer teams across a full academic-year calendar.',
  },
  {
    per: 'Jun 2023 to Dec 2023',
    role: 'Community Outreach Lead',
    co: 'Your Organization, Halifax NS',
    desc: 'Developed outreach programs connecting students with mental health resources and community services. Facilitated workshops and built partnerships with local organizations across Halifax.',
  },
  {
    per: 'Sep 2021 to Apr 2022',
    role: 'Marketing Volunteer',
    co: 'Campus Community Initiative, Halifax NS',
    desc: 'Created content and managed social channels for a student-run community initiative. Grew Instagram following by 40% over one semester through consistent storytelling.',
  },
];

export const eventsData: EventItem[] = [
  {
    name: 'Dalhousie Orientation Week',
    date: 'September 2023',
    desc: 'Coordinated a week-long orientation for 800+ incoming students across 12 events, from campus tours to evening socials.',
  },
  {
    name: 'Halifax Community Forum',
    date: 'March 2023',
    desc: 'Organized a public forum bringing together community leaders, student groups, and local organizations to discuss mental health access.',
  },
  {
    name: 'Annual Fundraiser Gala',
    date: 'November 2022',
    desc: 'Managed a formal fundraising event that raised over $15,000 for mental health awareness programs in Atlantic Canada.',
  },
  {
    name: 'Marketing and Brand Workshop',
    date: 'February 2024',
    desc: 'Hosted a professional development workshop for 60 participants covering brand storytelling, content strategy, and digital presence.',
  },
];

export const certs: Cert[] = [
  { name: 'Google Digital Marketing and E-commerce Certificate', iss: 'Google', date: '2024' },
  { name: 'Mental Health First Aid', iss: 'Mental Health Commission of Canada', date: '2023' },
  { name: 'Event Planning Fundamentals', iss: 'Canadian Institute of Planners', date: '2023' },
  { name: 'Social Media Marketing Professional', iss: 'Meta Blueprint', date: '2024' },
  { name: 'Community Engagement Practitioner', iss: 'IAP2 Canada', date: '2023' },
  { name: 'Project Management Essentials', iss: 'Project Management Institute', date: '2024' },
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
  'Event Management',
  'Community Building',
  'Marketing Strategy',
  'Social Media',
  'Content Creation',
  'Photography',
  'Psychology',
  'Project Planning',
  'Copywriting',
  'Videography',
];
