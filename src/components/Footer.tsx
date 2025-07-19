import React from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import { MadeWithDyad } from './made-with-dyad';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border py-8 px-4 md:px-8 text-center text-muted-foreground">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="mailto:your.email@example.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
      <MadeWithDyad />
    </footer>
  );
};

export default Footer;