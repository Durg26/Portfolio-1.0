# Portfolio Content Guide

Everything you need to edit the site without touching the chat.
After any change, commit and push — GitHub Actions redeploys in ~60 seconds.

---

## Quick reference — which file controls what

| What you want to change | File to edit |
|---|---|
| Your bio / about text | `src/components/About.tsx` → paragraph text and `FACTS` array |
| Skills tags | `src/data/index.ts` → `skills` array |
| Stats bar numbers | `src/components/Stats.tsx` → `STATS` array |
| Work experience | `src/data/index.ts` → `experiences` array |
| Certifications | `src/data/index.ts` → `certs` array |
| Contact links / socials | `src/components/Contact.tsx` → `CONTACT_INFO` array |
| Blog card metadata | `src/data/index.ts` → `posts` array |
| Blog post body text | `src/posts/<slug>.mdx` |
| Event card metadata | `src/data/index.ts` → `eventsData` array |
| Event detail body text | `src/events/<slug>.mdx` |
| Photo strip | `src/data/index.ts` → `photos` array + upload to `public/photos/` |
| Videos | `src/data/index.ts` → `videos` array (YouTube ID only, no file upload) |
| Design work images | `src/data/index.ts` → `designs` array + upload to `public/designs/` |
| Resume PDF | Replace `public/resume.pdf` with your new file (keep the same filename) |

---

## Adding a design image

1. Name your file something short and lowercase, e.g. `abstract-cafe-spring-menu.jpg`
2. Upload it to `public/designs/`
3. In `src/data/index.ts`, add a line inside the `designs` array:
   ```ts
   { src: `${base}designs/abstract-cafe-spring-menu.jpg`, alt: 'Spring menu', label: 'Spring Menu', client: 'The Abstract Cafe' },
   ```
4. To remove a design, delete that line.

---

## Adding a photo

1. Name your file e.g. `singapore-trip.jpg`
2. Upload it to `public/photos/`
3. In `src/data/index.ts`, update an empty entry in `photos`:
   ```ts
   { src: '/portfolio-1.0/photos/singapore-trip.jpg', width: 300, alt: 'Singapore trip' },
   ```
   Or add a new line to the array. Width can be 200–400 — vary it to create the mosaic effect.
4. To remove a photo, delete that line.

---

## Adding a video

No file upload needed — just the YouTube video ID.

In `src/data/index.ts`, add or edit an entry in `videos`:
```ts
{ label: 'Dal Orientation Recap', youtubeId: 'dQw4w9WgXcQ' },
```
The ID is the part after `?v=` in the YouTube URL.

---

## Adding a certification

In `src/data/index.ts`, add a line to `certs`:
```ts
{ name: 'HubSpot Content Marketing', iss: 'HubSpot Academy', date: 'May 2026' },
```
To remove one, delete that line.

---

## Adding a new blog post

Three steps — all within the repo.

**Step 1 — Write the post.** Duplicate any file in `src/posts/` and rename it.
The filename becomes the URL slug. Use lowercase with hyphens, e.g.:
`src/posts/why-psychology-matters-in-marketing.mdx`

Write your post in standard Markdown inside that file.

**Step 2 — Register the component.** Open `src/posts/index.ts` and add two lines:

```ts
import Post4 from './why-psychology-matters-in-marketing.mdx'; // add this import

const postComponents: Record<string, ComponentType> = {
  'what-studying-human-behaviour-taught-me': Post1,
  'building-community-lessons-after-20-events': Post2,
  'the-underrated-skill-in-any-creative-field': Post3,
  'why-psychology-matters-in-marketing': Post4,  // add this line
};
```

**Step 3 — Add the card metadata.** Open `src/data/index.ts` and add an entry to `posts`:
```ts
{
  tag: 'Psychology',
  title: 'Why Psychology Matters in Marketing',
  date: 'June 2026',
  exc: 'One sentence that draws people in.',
  slug: 'why-psychology-matters-in-marketing',
  readingTime: 4,
},
```

The `slug` must be identical across all three steps.

To remove a post: delete the `.mdx` file, remove the import and map entry from `src/posts/index.ts`, and delete the entry from `src/data/index.ts`.

---

## Adding a new event

Same three-step pattern as blog posts but in `src/events/` and `src/events/index.ts`.

**Step 1** — Create `src/events/my-event-slug.mdx` with the event write-up.

**Step 2** — In `src/events/index.ts`:
```ts
import Ev5 from './my-event-slug.mdx';
// add to eventComponents:
'my-event-slug': Ev5,
```

**Step 3** — In `src/data/index.ts`, add to `eventsData`:
```ts
{
  name: 'Event Name',
  date: 'March 2026',
  desc: 'One or two sentences shown on the card.',
  slug: 'my-event-slug',
},
```

---

## Editing the bio / facts

Open `src/components/About.tsx`.

- **Bio paragraphs** — edit the `<p className="about-body">` blocks directly.
- **Facts list** — edit the `FACTS` array at the top of the file:
  ```ts
  ['Education', 'BA Psychology, Dalhousie University (Apr 2026)'],
  ['Based in', 'Halifax, Nova Scotia'],
  ```
  Each pair is `['Label', 'Value']`.

---

## Editing stats

Open `src/components/Stats.tsx` and change the `STATS` array:
```ts
{ n: 19000, s: '+', l: 'Students Reached' },
```
`n` = number, `s` = suffix (`'+'`, `'K'`, or `''`), `l` = label.

---

## Editing contact / socials

Open `src/components/Contact.tsx` and edit `CONTACT_INFO`:
```ts
['Label', 'Display text', 'https://link-or-null'],
```
Set the third value to `null` if there is no link (e.g. for Location).

---

## Updating the resume

Replace `public/resume.pdf` with your new file. Keep the filename exactly `resume.pdf`.
