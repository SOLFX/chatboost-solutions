import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const About = () => {
  return (
    <div className="py-20 bg-blue-50" id="about">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Over Ons</h2>
        
        <Card className="max-w-4xl mx-auto mb-12 bg-white/80 backdrop-blur">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-2" />
              <div>
                <p className="text-lg mb-4">
                  "Onze missie is om bedrijven te helpen groeien door innovatieve AI-oplossingen die klantenservice vereenvoudigen en automatiseren."
                </p>
                <p className="text-lg mb-4">
                  "Onze visie is om de toonaangevende leverancier te worden van AI-gestuurde klantenservice-oplossingen in Nederland, waarbij we technologie gebruiken om menselijke interacties waardevoller te maken."
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <Avatar className="w-32 h-32 mx-auto mb-4">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" alt="Furkan Eren" />
              <AvatarFallback>FE</AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-semibold mb-2">Furkan Eren</h3>
            <p className="text-gray-600">Medeoprichter & AI Specialist</p>
          </div>
          <div className="text-center">
            <Avatar className="w-32 h-32 mx-auto mb-4">
              <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" alt="Anass Abbouch" />
              <AvatarFallback>AA</AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-semibold mb-2">Anass Abbouch</h3>
            <p className="text-gray-600">Medeoprichter & AI Specialist</p>
          </div>
        </div>
      </div>
    </div>
  );
};