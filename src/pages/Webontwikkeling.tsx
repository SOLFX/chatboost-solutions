import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Webontwikkeling = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
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

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16 space-y-12"
          >
            {/* Website Voorbeeld */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Uitgelicht Project: Pairus Website</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="https://pairus.nl/wp-content/uploads/2023/10/Pairus-Webdesign-Webdevelopment-Branding-Marketing-Reclamebureau-Alkmaar-Amsterdam-Den-Helder-Noord-Holland-Header-1.jpg" 
                    alt="Pairus Website" 
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">
                        <a href="https://pairus.nl/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                          Pairus - Reclamebureau Website
                        </a>
                      </h3>
                      <p className="text-sm opacity-90">
                        Een modern en dynamisch webdesign voor een toonaangevend reclamebureau. 
                        Dit project demonstreert onze expertise in het creëren van visueel 
                        aantrekkelijke en functionele websites.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Webshop Voorbeeld */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Uitgelicht Project: Pairus Webshop</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/2ff66f98-144a-41a7-87d4-a45f7522c724.png" 
                    alt="Pairus Webshop" 
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">
                        <a href="https://pairuswebshop.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                          Pairus - E-commerce Platform
                        </a>
                      </h3>
                      <p className="text-sm opacity-90">
                        Een volledig geïntegreerde e-commerce oplossing met een gebruiksvriendelijke interface 
                        en geavanceerde functionaliteiten voor online verkoop.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
              className="bg-primary text-white hover:bg-primary/90 text-lg"
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