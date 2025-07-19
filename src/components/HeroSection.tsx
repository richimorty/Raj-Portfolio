import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center text-center" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-white p-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Hi, I'm <span className="text-primary">Limon Ahmed</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          A passionate 2D Animator bringing stories to life through captivating motion and vibrant characters.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/portfolio">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              View My Work
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;