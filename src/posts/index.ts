import type { ComponentType } from 'react';
import Post1 from './what-studying-human-behaviour-taught-me.mdx';
import Post2 from './building-community-lessons-after-20-events.mdx';
import Post3 from './the-underrated-skill-in-any-creative-field.mdx';

const postComponents: Record<string, ComponentType> = {
  'what-studying-human-behaviour-taught-me': Post1,
  'building-community-lessons-after-20-events': Post2,
  'the-underrated-skill-in-any-creative-field': Post3,
};

export function getPostComponent(slug: string): ComponentType | undefined {
  return postComponents[slug];
}
