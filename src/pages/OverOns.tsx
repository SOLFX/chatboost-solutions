import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AppointmentPlanner } from "@/components/AppointmentPlanner";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const OverOns = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
            Over SOLFX
          </h1>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Onze Missie</h2>
              <p className="text-gray-600">
                Bij SOLFX streven we ernaar om bedrijven te helpen groeien door innovatieve technologische oplossingen. 
                We combineren AI met webontwikkeling om unieke, efficiënte en toekomstbestendige oplossingen te creëren.
              </p>
              
              <h2 className="text-2xl font-semibold pt-4">Onze Visie</h2>
              <p className="text-gray-600">
                We geloven in een toekomst waarin technologie bedrijven niet alleen efficiënter maakt, 
                maar ook menselijker. Waar AI en automatisering worden ingezet om medewerkers te ondersteunen 
                en klanten beter te bedienen.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 bg-white p-6 rounded-lg shadow-md">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" alt="Furkan Eren" />
                  <AvatarFallback>FE</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">Furkan Eren</h3>
                  <p className="text-gray-600">Medeoprichter & AI Specialist</p>
                  <p className="mt-2 text-sm text-gray-500">
                    Expert in AI-implementaties en chatbot-ontwikkeling met jarenlange ervaring in het optimaliseren van bedrijfsprocessen.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 bg-white p-6 rounded-lg shadow-md">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" alt="Anass Abbouch" />
                  <AvatarFallback>AA</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">Anass Abbouch</h3>
                  <p className="text-gray-600">Medeoprichter & AI Specialist</p>
                  <p className="mt-2 text-sm text-gray-500">
                    Specialist in machine learning en natuurlijke taalverwerking, met focus op het creëren van intelligente bedrijfsoplossingen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <AppointmentPlanner />
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default OverOns;