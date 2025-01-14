import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-primary/95 to-white relative overflow-hidden">
      <div className="stars-container absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      <div className="container px-4 py-16 text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
          SOLFX
        </h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Automatiseer uw klantenservice met AI
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Wij creëren slimme chatbots en websites die uw bedrijf helpen groeien
          </p>
          <Button 
            size="lg"
            className="bg-white hover:bg-white/90 text-primary px-8 py-6 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Neem contact op
          </Button>
        </motion.div>
      </div>
    </div>
  );
};