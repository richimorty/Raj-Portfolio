import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GalleryGrid from '@/components/GalleryGrid';
import { portfolioProjects } from '@/data/portfolioData';

const Index: React.FC = () => {
  const featuredProjects = portfolioProjects.slice(0, 3); // Show top 3 projects

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] flex items-center justify-center text-center p-4 overflow-hidden">
        {/* Background image/video placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50 animate-in fade-in duration-1000"></div>
        <img
          src="https://via.placeholder.com/1920x1080/E0E0E0/333333?text=Hero+Background"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 max-w-3xl mx-auto animate-in slide-in-from-top-10 fade-in duration-700">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-primary drop-shadow-lg">
            [Your Name]
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-8 animate-in fade-in duration-1000 delay-200">
            2D Animation & Character Designer
          </p>
          <Link to="/portfolio">
            <Button size="lg" className="text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl animate-in zoom-in-90 duration-700 delay-400">
              View My Portfolio
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-16 px-4 bg-card border-t border-border">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground animate-in fade-in duration-700">Featured Work</h2>
          <GalleryGrid projects={featuredProjects} />
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md animate-in zoom-in-90 duration-700 delay-200">
                See All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section Snippet */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto text-center max-w-3xl animate-in fade-in duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">A Bit About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            I'm a passionate 2D animation and character designer dedicated to bringing unique stories and vibrant personalities to life. With a keen eye for detail and a love for dynamic movement, I craft compelling visuals that resonate with audiences.
          </p>
          <Link to="/about">
            <Button variant="link" className="text-lg text-primary hover:text-primary-foreground transition-colors duration-200 animate-in fade-in duration-700 delay-200">
              Learn More About My Journey & Skills &rarr;
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;