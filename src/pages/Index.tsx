import HeroSection from '../components/HeroSection';
import GalleryGrid from '../components/GalleryGrid';
import { portfolioProjects } from '../data/portfolioData';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredProjects = portfolioProjects.slice(0, 3); // Display first 3 projects as featured

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />

      <section className="py-16 md:py-24 text-center bg-card text-card-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary animate-in fade-in slide-in-from-bottom-10 duration-700">
            Welcome to My Portfolio
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 animate-in fade-in duration-1000 delay-200">
            I'm Limon Ahmed Raj, a passionate 2D Animator dedicated to bringing imaginative worlds and characters to life through dynamic and expressive animation. Explore my work and see how I blend creativity with technical skill to tell compelling visual stories.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/about">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Learn More About Me
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Hire Me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-primary animate-in fade-in slide-in-from-bottom-10 duration-700">
            Featured Projects
          </h2>
          <GalleryGrid projects={featuredProjects} />
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-10 duration-700">
            Ready to bring your ideas to life?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 animate-in fade-in duration-1000 delay-200">
            Whether you have a specific project in mind or just want to chat about animation, feel free to reach out.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Contact Me
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;