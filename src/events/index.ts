import type { ComponentType } from 'react';
import Ev1 from './dalhousie-orientation-week.mdx';
import Ev2 from './impact-awards-2025.mdx';
import Ev3 from './science-society-events.mdx';
import Ev4 from './event-tree-launch.mdx';

const eventComponents: Record<string, ComponentType> = {
  'dalhousie-orientation-week': Ev1,
  'impact-awards-2025': Ev2,
  'science-society-events': Ev3,
  'event-tree-launch': Ev4,
};

export function getEventComponent(slug: string): ComponentType | undefined {
  return eventComponents[slug];
}
