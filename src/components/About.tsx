import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();
  
  return (
    <div className="py-20 bg-blue-50" id="about">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Over Ons</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-lg mb-6">
                SOLFX is ontstaan uit een passie voor innovatieve technologie en de wens om bedrijven te helpen groeien in het digitale tijdperk. 
                Wat begon als een ambitieus idee is uitgegroeid tot een full-service digitaal bureau dat gespecialiseerd is in het ontwikkelen 
                van websites, webshops en AI-chatbots.
              </p>
              <p className="text-lg mb-6">
                Ons team bestaat uit gepassioneerde developers en AI-specialisten die constant op zoek zijn naar nieuwe manieren om technologie 
                in te zetten voor het succes van onze klanten.
              </p>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Word Onderdeel van Ons Team</h3>
            <p className="text-lg mb-6">
              Ben jij gepassioneerd over technologie en innovatie? We zijn altijd op zoek naar talent!
            </p>
            <Button 
              onClick={() => navigate("/contact")}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Neem Contact Op
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};