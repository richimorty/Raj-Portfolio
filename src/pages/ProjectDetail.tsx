import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioProjects } from '@/data/portfolioData';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = portfolioProjects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-xl text-muted-foreground mb-6">The project you are looking for does not exist.</p>
        <Link to="/portfolio">
          <Button className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" /> Back to Portfolio
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 animate-in fade-in duration-500">
      <div className="mb-8">
        <Link to="/portfolio">
          <Button variant="ghost" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200">
            <ChevronLeft className="h-4 w-4" /> Back to Portfolio
          </Button>
        </Link>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{project.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{project.category}</p>

      <div className="grid grid-cols-1 gap-8 mb-12">
        {project.images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${project.title} image ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-lg object-cover animate-in fade-in duration-700"
          />
        ))}
        {project.videos && project.videos.map((src, index) => (
          <div key={`video-${index}`} className="w-full aspect-video rounded-lg shadow-lg overflow-hidden animate-in fade-in duration-700">
            <iframe
              src={src}
              title={`${project.title} video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-lg text-foreground leading-relaxed">
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;