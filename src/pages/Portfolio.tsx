import React from 'react';
import GalleryGrid from '@/components/GalleryGrid';
import { portfolioProjects } from '@/data/portfolioData';

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4 animate-in fade-in duration-500">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">My Work</h1>
      <GalleryGrid projects={portfolioProjects} />
    </div>
  );
};

export default Portfolio;