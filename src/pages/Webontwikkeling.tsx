import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Webontwikkeling = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Informatiesectie */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Webontwikkeling op Maat
            </h1>
            <p className="text-xl text-gray-600">
              Bij SOLFX transformeren we jouw online aanwezigheid. Van gebruiksvriendelijke designs tot naadloos 
              geautomatiseerde processen, wij bouwen websites die niet alleen mooi zijn, maar ook optimaal presteren.
            </p>
          </motion.div>

          {/* Visueel voorbeeld */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-primary to-secondary p-8">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="h-full w-full flex flex-col items-center justify-center text-white">
                    <div className="w-full max-w-md bg-white/20 backdrop-blur-md p-6 rounded-lg">
                      <div className="h-4 w-3/4 bg-white/40 rounded mb-4"></div>
                      <div className="h-4 w-1/2 bg-white/40 rounded mb-4"></div>
                      <div className="h-20 w-full bg-white/30 rounded mb-4"></div>
                      <div className="h-8 w-32 bg-primary rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call-to-action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg"
              onClick={() => navigate("/contact")}
            >
              Neem contact met ons op
            </Button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Webontwikkeling;