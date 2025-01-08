import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <div className="py-20 bg-blue-50" id="about">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Over Ons</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="flex items-center gap-6">
            <Avatar className="w-32 h-32">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" alt="Furkan Eren" />
              <AvatarFallback>FE</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-2">Furkan Eren</h3>
              <p className="text-gray-600">Medeoprichter & AI Specialist</p>
              <p className="mt-2">Specialist in AI-implementaties en chatbot-ontwikkeling</p>
              <div className="mt-2 text-sm text-gray-600">
                <p>Email: furkan@solfx.nl</p>
                <p>Tel: +31 6 12345678</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Avatar className="w-32 h-32">
              <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" alt="Anass Abbouch" />
              <AvatarFallback>AA</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-2">Anass Abbouch</h3>
              <p className="text-gray-600">Medeoprichter & AI Specialist</p>
              <p className="mt-2">Expert in machine learning en natuurlijke taalverwerking</p>
              <div className="mt-2 text-sm text-gray-600">
                <p>Email: anass@solfx.nl</p>
                <p>Tel: +31 6 87654321</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};