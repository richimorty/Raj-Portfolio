import React from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background p-8 animate-in slide-in-from-right-full duration-300 data-[state=closed]:slide-out-to-right-full data-[state=closed]:duration-300">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors duration-200"
        >
          <X className="h-8 w-8" />
          <span className="sr-only">Close menu</span>
        </Button>
        <nav className="flex flex-col space-y-6 text-center">
          <Link
            to="/"
            className="text-4xl font-bold text-foreground hover:text-primary transition-colors duration-200"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="text-4xl font-bold text-foreground hover:text-primary transition-colors duration-200"
            onClick={onClose}
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className="text-4xl font-bold text-foreground hover:text-primary transition-colors duration-200"
            onClick={onClose}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-4xl font-bold text-foreground hover:text-primary transition-colors duration-200"
            onClick={onClose}
          >
            Contact
          </Link>
        </nav>
      </DialogContent>
    </Dialog>
  );
};

export default MobileMenu;