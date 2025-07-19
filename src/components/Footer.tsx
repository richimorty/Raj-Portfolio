import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-bold text-primary hover:text-primary-foreground transition-colors duration-200">
            Limon Ahmed
          </Link>
          <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Limon Ahmed. All rights reserved.</p>
        </div>

        <nav className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
          <Link to="/" className="text-foreground hover:text-primary transition-colors duration-200">Home</Link>
          <Link to="/portfolio" className="text-foreground hover:text-primary transition-colors duration-200">Portfolio</Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors duration-200">About</Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors duration-200">Contact</Link>
        </nav>

        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-200">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-200">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-200">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-200">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;