import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="container px-4 py-16 text-center relative">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-6">
          SOLFX
        </h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Automatiseer uw klantenservice met AI
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Wij creëren slimme chatbots en websites die uw bedrijf helpen groeien
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