import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioProjects } from '../data/portfolioData';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = portfolioProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-lg mb-6">The project you are looking for does not exist.</p>
        <Link to="/portfolio">
          <Button>Back to Portfolio</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <div className="mb-6">
        <Link to="/portfolio">
          <Button variant="ghost" className="flex items-center text-lg">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Portfolio
          </Button>
        </Link>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
        {project.title}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
        Category: <span className="font-semibold">{project.category}</span>
      </p>

      <div className="prose dark:prose-invert max-w-none mb-8">
        <p className="text-lg leading-relaxed">{project.description}</p>
      </div>

      {/* Image and Video display sections removed */}

      <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link to="/portfolio">
          <Button className="w-full md:w-auto">Back to Portfolio</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;