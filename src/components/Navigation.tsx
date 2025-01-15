import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl font-bold text-primary cursor-pointer" onClick={() => navigate("/")}>SOLFX</span>
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" onClick={() => scrollToSection('about')}>Over ons</Button>
            <Button variant="ghost" onClick={() => navigate("/chatbot")}>Chatbot</Button>
            <Button variant="ghost" onClick={() => scrollToSection('development')}>Webontwikkeling</Button>
            <Button variant="ghost" onClick={() => scrollToSection('packages')}>Pakketten</Button>
            <Button variant="ghost" onClick={() => scrollToSection('contact')}>Contact</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};