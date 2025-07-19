import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4 animate-in fade-in duration-500">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">About Me</h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src="https://via.placeholder.com/300x300/A0A0A0/FFFFFF?text=Your+Photo"
            alt="Your Photo"
            className="rounded-full w-64 h-64 object-cover shadow-lg animate-in zoom-in-50 duration-700"
          />
        </div>
        <div className="text-lg text-foreground leading-relaxed">
          <p className="mb-4">
            Hello! I'm [Your Name], a passionate 2D animation and character designer with a love for bringing stories and personalities to life through vibrant visuals. My journey in animation began with a fascination for movement and expression, leading me to specialize in creating memorable characters and dynamic scenes.
          </p>
          <p className="mb-4">
            With [X years] of experience, I've had the pleasure of working on a variety of projects, from independent short films to commercial animations. My expertise spans character concept art, turnarounds, expression sheets, and traditional 2D animation principles. I thrive on creative challenges and am always eager to explore new techniques to push the boundaries of visual storytelling.
          </p>
          <p className="mb-6">
            When I'm not drawing, you can find me [mention a hobby, e.g., exploring nature, watching animated films, or sketching in coffee shops]. I believe that inspiration can be found everywhere, and I bring that curiosity into every design.
          </p>
          <a href="/your-resume.pdf" download="Your_Resume.pdf">
            <Button className="flex items-center gap-2 transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
              <Download className="h-4 w-4" /> Download Resume
            </Button>
          </a>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-foreground">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 text-lg">
          <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full shadow-sm transition-all duration-200 hover:bg-primary hover:text-primary-foreground">Character Design</span>
          <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full shadow-sm transition-all duration-200 hover:bg-primary hover:text-primary-foreground">2D Animation</span>
          <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full shadow-sm transition-all duration-200 hover:bg-primary hover:text-primary-foreground">Storyboarding</span>
          <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full shadow-sm transition-all duration-200 hover:bg-primary hover:text-primary-foreground">Concept Art</span>
          <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full shadow-sm transition-all duration-200 hover:bg-primary hover:text-primary-foreground">Adobe Animate</span>
          <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full shadow-sm transition-all duration-200 hover:bg-primary hover:text-primary-foreground">Toon Boom Harmony</span>
          <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full shadow-sm transition-all duration-200 hover:bg-primary hover:text-primary-foreground">Photoshop</span>
          <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full shadow-sm transition-all duration-200 hover:bg-primary hover:text-primary-foreground">Procreate</span>
        </div>
      </div>
    </div>
  );
};

export default About;