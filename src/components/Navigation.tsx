import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navigation = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const buttonClasses = "text-primary hover:text-primary/90";

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span 
            className="text-2xl font-bold text-primary cursor-pointer" 
            onClick={() => navigate("/")}
          >
            SOLFX
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              className={buttonClasses}
              onClick={() => handleNavigation("/over-ons")}
            >
              Over ons
            </Button>
            <Button 
              variant="ghost" 
              className={buttonClasses}
              onClick={() => handleNavigation("/chatbot")}
            >
              Chatbot
            </Button>
            <Button 
              variant="ghost" 
              className={buttonClasses}
              onClick={() => handleNavigation("/webontwikkeling")}
            >
              Webontwikkeling
            </Button>
            <Button 
              variant="ghost" 
              className={buttonClasses}
              onClick={() => scrollToSection('packages')}
            >
              Pakketten
            </Button>
            <Button 
              variant="ghost" 
              className={buttonClasses}
              onClick={() => handleNavigation("/contact")}
            >
              Contact
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-primary"
                  onClick={() => handleNavigation("/over-ons")}
                >
                  Over ons
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-primary"
                  onClick={() => handleNavigation("/chatbot")}
                >
                  Chatbot
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-primary"
                  onClick={() => handleNavigation("/webontwikkeling")}
                >
                  Webontwikkeling
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-primary"
                  onClick={() => scrollToSection('packages')}
                >
                  Pakketten
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-primary"
                  onClick={() => handleNavigation("/contact")}
                >
                  Contact
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};