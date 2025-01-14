import { Card } from "@/components/ui/card";
import { Code2, MessageSquare, Globe } from "lucide-react";

export const Services = () => {
  return (
    <section id="chatbot" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Onze Diensten</h2>
        <p className="text-center text-gray-600 mb-12">Met meer dan 12 succesvolle projecten in ons portfolio</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <MessageSquare className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Chatbot</h3>
            <p className="text-gray-600">
              Verbeter uw klantenservice met onze op maat gemaakte AI chatbot oplossingen
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Globe className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Website Ontwikkeling</h3>
            <p className="text-gray-600">
              Professionele websites die uw bedrijf online laten groeien
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Code2 className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Web Applicaties</h3>
            <p className="text-gray-600">
              Custom web applicaties die uw bedrijfsprocessen optimaliseren
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};