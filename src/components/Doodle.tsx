import { motion } from 'framer-motion';

const DOODLES: Record<string, string> = {
  poster: "<rect x='128' y='52' width='144' height='196' rx='8'/><circle cx='200' cy='112' r='32'/><path d='M150 170h100M150 192h100M150 214h64'/>",
  palette: "<path d='M200 78c52 0 92 32 92 70 0 24-20 32-38 32-16 0-22 12-15 26 6 12-4 22-21 22-52 0-98-34-98-80s28-70 78-70Z'/><circle cx='160' cy='150' r='9' fill='currentColor' stroke='none'/><circle cx='196' cy='124' r='9' fill='currentColor' stroke='none'/><circle cx='236' cy='146' r='9' fill='currentColor' stroke='none'/><circle cx='176' cy='192' r='9' fill='currentColor' stroke='none'/>",
  layout: "<rect x='118' y='70' width='164' height='160' rx='10'/><path d='M118 120h164M196 120v110'/><circle cx='150' cy='95' r='8'/><path d='M140 158h40M140 178h40M140 198h26M214 150h48M214 174h48M214 198h30'/>",
  type: "<path d='M120 214l40-118 40 118M138 176h44'/><path d='M222 150h60M252 150v64'/>",
  party: "<path fill='currentColor' stroke='none' d='M200 78c8 44 18 54 60 62-42 8-52 18-60 62-8-44-18-54-60-62 42-8 52-18 60-62Z'/><path fill='currentColor' stroke='none' d='M108 104c3 14 6 17 18 20-12 3-15 6-18 20-3-14-6-17-18-20 12-3 15-6 18-20Z'/><path fill='currentColor' stroke='none' d='M300 178c3 14 6 17 18 20-12 3-15 6-18 20-3-14-6-17-18-20 12-3 15-6 18-20Z'/>",
  mic: "<rect x='178' y='66' width='44' height='92' rx='22'/><path d='M150 138c0 30 22 52 50 52s50-22 50-52'/><path d='M200 190v36'/><path d='M174 226h52'/>",
  glass: "<path d='M163 76h74l-9 52c-4 22-18 30-28 30s-24-8-28-30Z'/><path d='M200 158v58'/><path d='M168 218h64'/>",
  bulb: "<path d='M200 66c-34 0-58 24-58 54 0 22 14 34 22 44 4 6 6 12 6 18h60c0-6 2-12 6-18 8-10 22-22 22-44 0-30-24-54-58-54Z'/><path d='M178 204h44'/><path d='M184 220h32'/><path d='M192 106c-10 4-16 14-16 26'/>",
  camera: "<path d='M118 130l16-22h32l12-16h44l12 16h32l16 22v76c0 6-4 10-10 10H128c-6 0-10-4-10-10Z'/><circle cx='200' cy='170' r='34'/><circle cx='200' cy='170' r='15'/><circle cx='260' cy='128' r='5' fill='currentColor' stroke='none'/>",
  heart: "<path d='M200 216c-12-11-83-58-83-110 0-26 21-40 44-29 16 8 27 22 39 22s23-14 39-22c23-11 44 3 44 29 0 52-71 99-83 110Z'/>",
  sun: "<circle cx='200' cy='150' r='40'/><path d='M200 88V60M200 240v-28M260 150h28M112 150h28M243 107l20-20M137 213l-20 20M243 193l20 20M137 87l-20-20'/><circle cx='190' cy='146' r='3.4' fill='currentColor' stroke='none'/><circle cx='210' cy='146' r='3.4' fill='currentColor' stroke='none'/><path d='M188 162c6 7 18 7 24 0'/>",
  cat: "<path d='M156 150l6-46 38 20Z'/><path d='M244 150l-6-46-38 20Z'/><path d='M148 168c0 38 22 60 52 60s52-22 52-60c0-12-2-22-4-30'/><circle cx='182' cy='168' r='4' fill='currentColor' stroke='none'/><circle cx='218' cy='168' r='4' fill='currentColor' stroke='none'/><path d='M200 180v8M192 192c5 5 11 5 16 0'/><path d='M150 178l-26 4M150 190l-24 10M250 178l26 4M250 190l24 10'/>",
  bloom: "<ellipse cx='200' cy='106' rx='16' ry='28'/><ellipse cx='200' cy='194' rx='16' ry='28'/><ellipse cx='156' cy='150' rx='28' ry='16'/><ellipse cx='244' cy='150' rx='28' ry='16'/><ellipse cx='168' cy='118' rx='15' ry='27' transform='rotate(45 168 118)'/><ellipse cx='232' cy='182' rx='15' ry='27' transform='rotate(45 232 182)'/><ellipse cx='232' cy='118' rx='15' ry='27' transform='rotate(-45 232 118)'/><ellipse cx='168' cy='182' rx='15' ry='27' transform='rotate(-45 168 182)'/><circle cx='200' cy='150' r='17' fill='currentColor' stroke='none'/>",
  star: "<path fill='currentColor' stroke='none' d='M200 74l20 46 50 4-38 33 12 49-44-26-44 26 12-49-38-33 50-4Z'/>",
  mountains: "<path d='M96 212l54-80 38 46 30-52 86 86Z'/><circle cx='150' cy='108' r='17'/><path d='M226 110c6-6 11-6 15 0M252 100c6-6 11-6 15 0'/>",
  spiral: "<path d='M200 150c0-9 9-13 15-8 9 6 6 20-5 24-15 7-30-9-25-28 6-23 35-31 56-18 28 17 31 56 8 84'/>",
  brain: "<path d='M150 86c-40-20-92 0-98 44-34 6-44 54-18 78-20 34 8 78 48 76 8 36 60 48 84 22 24 26 76 14 84-22 40 2 70-42 50-76 26-24 16-72-18-78-6-44-58-64-98-44-6-14-26-14-34 0Z' stroke-width='6'/><path d='M160 198c20 18 54 18 76-4'/><circle cx='150' cy='150' r='5' fill='currentColor' stroke='none'/><circle cx='232' cy='146' r='5' fill='currentColor' stroke='none'/>",
};

interface DoodleProps {
  scene: keyof typeof DOODLES | string;
  /** Dark sections use a dark fill + paper stroke. */
  dark?: boolean;
}

export default function Doodle({ scene, dark = false }: DoodleProps): JSX.Element {
  const inner = DOODLES[scene] ?? DOODLES.star;
  const bg = dark ? '#221d16' : '#f6f2ea';
  const stroke = dark ? '#efe9db' : '#171310';
  return (
    <motion.svg
      className="doodle"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      style={{ width: '100%', height: '100%', display: 'block' }}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <rect width="400" height="300" fill={bg} />
      <g
        filter="url(#rough)"
        fill="none"
        stroke="currentColor"
        strokeWidth={6.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: stroke }}
        dangerouslySetInnerHTML={{ __html: inner }}
      />
    </motion.svg>
  );
}
