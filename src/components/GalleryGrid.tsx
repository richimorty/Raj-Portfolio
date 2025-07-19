import React from 'react';
import PortfolioCard from './PortfolioCard';

interface Project {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  images?: string[];
  videos?: string[];
  description?: string;
}

interface GalleryGridProps {
  projects: Project[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {projects.map((project) => (
        <PortfolioCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default GalleryGrid;