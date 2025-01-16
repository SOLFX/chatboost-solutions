import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-primary/95 to-white relative overflow-hidden">
      <div className="stars-container absolute inset-0 overflow-hidden">
        <div className="stars opacity-70"></div>
        <div className="stars2 opacity-70"></div>
        <div className="stars3 opacity-70"></div>
      </div>
      <div className="container px-4 py-16 text-center relative z-10">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          SOLFX
        </motion.h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Innovatieve Digitale Oplossingen
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Van professionele websites en webshops tot intelligente chatbots - wij bouwen de digitale tools die uw bedrijf laten groeien
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Neem contact op
          </Button>
        </motion.div>
      </div>
    </div>
  );
};