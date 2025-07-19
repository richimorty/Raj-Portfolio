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
    thumbnail: '/Jello.jpg',
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
    thumbnail: '/Demon\'s pain.jpg',
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
    id: 'skinwalker-animation',
    title: 'Skinwalker',
    thumbnail: '/Skinwalker.jpg',
    category: '2D Animation',
    images: [
      'https://via.placeholder.com/800x600/8B0000/FFFFFF?text=Skinwalker+Still+1',
    ],
    videos: [
      'https://jumpshare.com/embed/p5F1EC4LPumsBToP4UOz'
    ],
    description: 'A chilling 2D animation exploring the mysterious and eerie presence of a skinwalker.',
  },
  {
    id: 'orin-animation',
    title: 'Orin',
    thumbnail: '/Orin.jpg',
    category: '2D Animation',
    images: [
      'https://via.placeholder.com/800x600/2F4F4F/FFFFFF?text=Orin+Still+1',
    ],
    videos: [
      'https://jumpshare.com/embed/8hRrEFNL8u4RfkEyG5gm'
    ],
    description: 'A dynamic 2D animation piece featuring the character Orin, showcasing fluid motion and character personality.',
  },
];