import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Header = () => {
  return (
    <header className="bg-background py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary hover:text-primary-foreground transition-colors duration-200">
          Limon Ahmed
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors duration-200">Home</Link>
          <Link to="/portfolio" className="text-foreground hover:text-primary transition-colors duration-200">Portfolio</Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors duration-200">About</Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors duration-200">Contact</Link>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link to="/" className="text-foreground hover:text-primary transition-colors duration-200">Home</Link>
                <Link to="/portfolio" className="text-foreground hover:text-primary transition-colors duration-200">Portfolio</Link>
                <Link to="/about" className="text-foreground hover:text-primary transition-colors duration-200">About</Link>
                <Link to="/contact" className="text-foreground hover:text-primary transition-colors duration-200">Contact</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;