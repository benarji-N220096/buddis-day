import img01 from '../assets/sister_photos/sister_01.jpeg';
import img02 from '../assets/sister_photos/sister_02.jpeg';
import img03 from '../assets/sister_photos/sister_03.jpeg';
import img04 from '../assets/sister_photos/sister_04.jpeg';
import img05 from '../assets/sister_photos/sister_05.jpeg';
import img06 from '../assets/sister_photos/sister_06.jpeg';
import img07 from '../assets/sister_photos/sister_07.jpeg';
import img08 from '../assets/sister_photos/sister_08.jpeg';
import img09 from '../assets/sister_photos/sister_09.jpeg';
import img10 from '../assets/sister_photos/sister_10.jpeg';
import img11 from '../assets/sister_photos/sister_11.jpeg';
import img12 from '../assets/sister_photos/sister_12.jpeg';
import img13 from '../assets/sister_photos/sister_13.jpeg';
import img14 from '../assets/sister_photos/sister_14.jpeg';
import img15 from '../assets/sister_photos/sister_15.jpeg';
import img16 from '../assets/sister_photos/sister_16.jpeg';
import img17 from '../assets/sister_photos/sister_17.jpeg';

export interface SisterMemory {
  id: number;
  image: string;
  alt: string;
  caption: string;
  note?: string;
  side: 'left' | 'right';
  rotation: number; // degrees
  objectPosition: string;
  targetSectionId: string;
  connectorType: 1 | 2 | 3; // variations of organic curve/loop
}

export const sisterMemories: SisterMemory[] = [
  // 1. LEFT - Opening
  {
    id: 1,
    image: img01,
    alt: 'Memory photograph - quiet balcony reflection',
    caption: 'morning light',
    note: 'a quiet reflection',
    side: 'left',
    rotation: -2.2,
    objectPosition: 'center 18%',
    targetSectionId: 'section-opening',
    connectorType: 1,
  },
  // 2. RIGHT - Little Secret
  {
    id: 2,
    image: img02,
    alt: 'Memory photograph - RGUKT campus tree and traditional attire',
    caption: 'rgukt days',
    note: 'campus memories',
    side: 'right',
    rotation: 2.4,
    objectPosition: 'center 15%',
    targetSectionId: 'section-secret',
    connectorType: 2,
  },
  // 3. LEFT - Three Years
  {
    id: 3,
    image: img03,
    alt: 'Memory photograph - laughing behind tree',
    caption: 'that laugh',
    note: 'pure joy',
    side: 'left',
    rotation: 1.8,
    objectPosition: 'center 20%',
    targetSectionId: 'section-three-years',
    connectorType: 3,
  },
  // 4. RIGHT - Funny Memory
  {
    id: 4,
    image: img04,
    alt: 'Memory photograph - candid black and white portrait',
    caption: 'calm moment',
    note: 'in black & white',
    side: 'right',
    rotation: -2.8,
    objectPosition: 'center 25%',
    targetSectionId: 'section-funny-memory',
    connectorType: 1,
  },
  // 5. LEFT - Transition (Akka? Friend?)
  {
    id: 5,
    image: img05,
    alt: 'Memory photograph - floral dress leaning by wall',
    caption: 'serene smile',
    note: 'gentle presence',
    side: 'left',
    rotation: -1.6,
    objectPosition: 'center 18%',
    targetSectionId: 'section-transition',
    connectorType: 2,
  },
  // 6. RIGHT - Part 2 Opening (Strong ga undadam)
  {
    id: 6,
    image: img06,
    alt: 'Memory photograph - lavender saree on staircase high angle',
    caption: 'graceful step',
    note: 'from above',
    side: 'right',
    rotation: 2.1,
    objectPosition: 'center 15%',
    targetSectionId: 'section-part2',
    connectorType: 3,
  },
  // 7. LEFT - Safe Place
  {
    id: 7,
    image: img07,
    alt: 'Memory photograph - lavender saree candid touching ear',
    caption: 'safe place',
    note: 'comfort & warmth',
    side: 'left',
    rotation: 2.5,
    objectPosition: 'center 12%',
    targetSectionId: 'section-safe-place',
    connectorType: 1,
  },
  // 8. RIGHT - Ordinary Moments
  {
    id: 8,
    image: img08,
    alt: 'Memory photograph - staircase resting chin on hand',
    caption: 'ordinary magic',
    note: 'just sitting together',
    side: 'right',
    rotation: -2.3,
    objectPosition: 'center 15%',
    targetSectionId: 'section-ordinary-moments',
    connectorType: 2,
  },
  // 9. LEFT - Two Minutes
  {
    id: 9,
    image: img09,
    alt: 'Memory photograph - lavender saree standing hands on waist',
    caption: 'those 2 minutes',
    note: 'always worth it',
    side: 'left',
    rotation: -2.0,
    objectPosition: 'center 12%',
    targetSectionId: 'section-two-minutes',
    connectorType: 3,
  },
  // 10. RIGHT - Reflection (Akka moment)
  {
    id: 10,
    image: img10,
    alt: 'Memory photograph - lavender saree gentle profile glance',
    caption: 'always special',
    note: 'akka',
    side: 'right',
    rotation: 2.6,
    objectPosition: 'center 15%',
    targetSectionId: 'section-reflection',
    connectorType: 1,
  },
  // 11. LEFT - Part 2 Ending
  {
    id: 11,
    image: img11,
    alt: 'Memory photograph - evening bokeh festive lehenga',
    caption: 'festive night',
    note: 'under warm lights',
    side: 'left',
    rotation: 2.2,
    objectPosition: 'center 20%',
    targetSectionId: 'section-part2-ending',
    connectorType: 2,
  },
  // 12. RIGHT - Part 3 Opening
  {
    id: 12,
    image: img12,
    alt: 'Memory photograph - lavender saree folded arms smiling side',
    caption: 'a gentle wish',
    note: 'for you',
    side: 'right',
    rotation: -1.9,
    objectPosition: 'center 15%',
    targetSectionId: 'section-part3',
    connectorType: 3,
  },
  // 13. LEFT - Future Wishes
  {
    id: 13,
    image: img13,
    alt: 'Memory photograph - lavender saree folded arms smiling camera',
    caption: 'strength & care',
    note: 'double in return',
    side: 'left',
    rotation: -2.4,
    objectPosition: 'center 15%',
    targetSectionId: 'section-future-wishes',
    connectorType: 1,
  },
  // 14. RIGHT - Photo Chapter
  {
    id: 14,
    image: img14,
    alt: 'Memory photograph - candid reading book by window',
    caption: 'quiet stories',
    note: 'ayodhya cherina krishna',
    side: 'right',
    rotation: 2.3,
    objectPosition: 'center 18%',
    targetSectionId: 'section-photo-chapter',
    connectorType: 2,
  },
  // 15. LEFT - Permanent Story
  {
    id: 15,
    image: img15,
    alt: 'Memory photograph - black top and maroon skirt studio memory',
    caption: 'permanent part',
    note: 'of the story',
    side: 'left',
    rotation: 2.0,
    objectPosition: 'center 15%',
    targetSectionId: 'section-permanent-story',
    connectorType: 3,
  },
  // 16. RIGHT - Relationship Wish
  {
    id: 16,
    image: img16,
    alt: 'Memory photograph - teal silk saree outdoors',
    caption: 'ilaane undaali',
    note: '200% confidence',
    side: 'right',
    rotation: -2.5,
    objectPosition: 'center 15%',
    targetSectionId: 'section-relationship-wish',
    connectorType: 1,
  },
  // 17. LEFT - Final Birthday
  {
    id: 17,
    image: img17,
    alt: 'Memory photograph - lavender saree radiant smile',
    caption: 'happy birthday',
    note: 'to the best sister',
    side: 'left',
    rotation: 1.7,
    objectPosition: 'center 15%',
    targetSectionId: 'section-final-birthday',
    connectorType: 2,
  },
];
