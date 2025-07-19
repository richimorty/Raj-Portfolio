import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Mail, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4 animate-in fade-in duration-500">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Get in Touch</h1>

      <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg border border-border animate-in zoom-in-90 duration-700">
        <ContactForm />

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-lg text-muted-foreground mb-4">Or connect with me directly:</p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:your.email@example.com"
              className="text-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline">your.email@example.com</span>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
            >
              <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;