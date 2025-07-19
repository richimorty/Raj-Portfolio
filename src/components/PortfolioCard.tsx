import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface PortfolioCardProps {
  project: {
    id: string;
    title: string;
    thumbnail: string;
    category: string;
  };
  className?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, className }) => {
  return (
    <Link
      to={`/portfolio/${project.id}`}
      className={cn(
        "group relative block overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl",
        className
      )}
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-lg font-semibold">{project.title}</h3>
      </div>
    </Link>
  );
};

export default PortfolioCard;