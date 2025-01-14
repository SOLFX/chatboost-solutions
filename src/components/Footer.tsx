import { Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
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
              <li><a href="#" className="hover:text-blue-200 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">App Development</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">Digital Marketing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Bedrijf</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-200 transition-colors">Over Ons</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">Carrière</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Informatie</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-200 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex justify-between items-center">
            <p>&copy; 2024 SOLFX. Alle rechten voorbehouden.</p>
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