import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="relative mt-20 bg-primary/95 text-white overflow-hidden">
      <div className="stars-container absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Diensten</h3>
            <ul className="space-y-2">
              <li><button onClick={() => navigate("/webontwikkeling")} className="hover:text-blue-200 transition-colors">Web Development</button></li>
              <li><button onClick={() => navigate("/webshop")} className="hover:text-blue-200 transition-colors">Webshop</button></li>
              <li><button onClick={() => navigate("/chatbot")} className="hover:text-blue-200 transition-colors">Chatbot</button></li>
              <li><button onClick={() => navigate("/diensten")} className="hover:text-blue-200 transition-colors">Alle Diensten</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Bedrijf</h3>
            <ul className="space-y-2">
              <li><button onClick={() => navigate("/over-ons")} className="hover:text-blue-200 transition-colors">Over Ons</button></li>
              <li><button onClick={() => navigate("/portfolio")} className="hover:text-blue-200 transition-colors">Portfolio</button></li>
              <li><button onClick={() => navigate("/vacatures")} className="hover:text-blue-200 transition-colors">Vacatures</button></li>
              <li><button onClick={() => navigate("/blog")} className="hover:text-blue-200 transition-colors">Blog</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Informatie</h3>
            <ul className="space-y-2">
              <li><button onClick={() => navigate("/contact")} className="hover:text-blue-200 transition-colors">Contact</button></li>
              <li><button onClick={() => navigate("/privacy")} className="hover:text-blue-200 transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => navigate("/voorwaarden")} className="hover:text-blue-200 transition-colors">Algemene Voorwaarden</button></li>
              <li><button onClick={() => navigate("/faq")} className="hover:text-blue-200 transition-colors">FAQ</button></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex justify-between items-center">
            <p>&copy; 2025 SOLFX. Alle rechten voorbehouden.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};