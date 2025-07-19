export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  images: string[];
  videos?: string[];
  description: string;
}

export const portfolioProjects: Project[] = [
  {
    id: 'jello-animation',
    title: 'Jello',
    thumbnail: 'https://via.placeholder.com/400x300/FF6347/FFFFFF?text=Jello+Animation+Thumbnail',
    category: '2D Animation',
    images: [
      'https://via.placeholder.com/800x600/FF6347/FFFFFF?text=Jello+Animation+Still+1',
    ],
    videos: [
      'https://jumpshare.com/embed/pTIjes6Z97Y2BsLCebg3'
    ],
    description: 'A fun and bouncy 2D animation exploring the physics and movement of a jello character.',
  },
  {
    id: 'demons-pain',
    title: 'Demon\'s Pain',
    thumbnail: 'https://via.placeholder.com/400x300/4682B4/FFFFFF?text=Demon%27s+Pain+Thumbnail',
    category: '2D Animation',
    images: [
      'https://via.placeholder.com/800x600/4682B4/FFFFFF?text=Demon%27s+Pain+Still+1',
    ],
    videos: [
      'https://jumpshare.com/embed/P3PthlQw5Xc6uUSpMFgH'
    ],
    description: 'An expressive 2D animation piece depicting the raw emotion and struggle of a demon character.',
  },
  {
    id: 'project-1',
    title: 'Whimsical Forest Creatures',
    thumbnail: 'https://via.placeholder.com/400x300/FFD700/FFFFFF?text=Project+1+Thumbnail',
    category: 'Character Design',
    images: [
      'https://via.placeholder.com/800x600/FFD700/FFFFFF?text=Project+1+Image+1',
      'https://via.placeholder.com/800x600/FFD700/FFFFFF?text=Project+1+Image+2',
    ],
    description: 'A series of character designs for an animated short film set in a magical forest. Focused on expressive features and unique silhouettes.',
  },
  {
    id: 'project-2',
    title: 'Urban Explorer Animation',
    thumbnail: 'https://via.placeholder.com/400x300/87CEEB/FFFFFF?text=Project+2+Thumbnail',
    category: 'Animation',
    images: [
      'https://via.placeholder.com/800x600/87CEEB/FFFFFF?text=Project+2+Image+1',
    ],
    videos: [
      'https://www.youtube.com/embed/dQw4w9WgXcQ' // Example YouTube embed
    ],
    description: 'A short 2D animation piece depicting an urban explorer navigating a bustling city. Emphasized fluid movement and environmental storytelling.',
  },
  {
    id: 'project-3',
    title: 'Mythical Beast Concepts',
    thumbnail: 'https://via.placeholder.com/400x300/DA70D6/FFFFFF?text=Project+3+Thumbnail',
    category: 'Character Design',
    images: [
      'https://via.placeholder.com/800x600/DA70D6/FFFFFF?text=Project+3+Image+1',
      'https://via.placeholder.com/800x600/DA70D6/FFFFFF?text=Project+3+Image+2',
      'https://via.placeholder.com/800x600/DA70D6/FFFFFF?text=Project+3+Image+3',
    ],
    description: 'Explorations into various mythical creatures, focusing on anatomical accuracy combined with fantastical elements for a game concept.',
  },
  {
    id: 'project-4',
    title: 'Character Walk Cycle Study',
    thumbnail: 'https://via.placeholder.com/400x300/FFA07A/FFFFFF?text=Project+4+Thumbnail',
    category: 'Animation',
    images: [
      'https://via.placeholder.com/800x600/FFA07A/FFFFFF?text=Project+4+Image+1',
    ],
    videos: [
      'https://www.youtube.com/embed/dQw4w9WgXcQ' // Example YouTube embed
    ],
    description: 'A detailed study of a character walk cycle, focusing on weight, timing, and personality through movement.',
  },
  {
    id: 'project-5',
    title: 'Children\'s Book Illustrations',
    thumbnail: 'https://via.placeholder.com/400x300/98FB98/FFFFFF?text=Project+5+Thumbnail',
    category: 'Illustration',
    images: [
      'https://via.placeholder.com/800x600/98FB98/FFFFFF?text=Project+5+Image+1',
      'https://via.placeholder.com/800x600/98FB98/FFFFFF?text=Project+5+Image+2',
    ],
    description: 'Illustrations for a whimsical children\'s book, bringing characters and environments to life with vibrant colors and soft textures.',
  },
  {
    id: 'project-6',
    title: 'Sci-Fi Character Lineup',
    thumbnail: 'https://via.placeholder.com/400x300/ADD8E6/FFFFFF?text=Project+6+Thumbnail',
    category: 'Character Design',
    images: [
      'https://via.placeholder.com/800x600/ADD8E6/FFFFFF?text=Project+6+Image+1',
      'https://via.placeholder.com/800x600/ADD8E6/FFFFFF?text=Project+6+Image+2',
    ],
    description: 'A lineup of diverse characters for a futuristic sci-fi setting, exploring different roles and visual styles within the same universe.',
  },
];