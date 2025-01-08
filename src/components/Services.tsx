import { MessageSquare, Globe } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const Services = () => {
  return (
    <div className="py-20 bg-white" id="services">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Onze Diensten</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <MessageSquare className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-2xl mb-3">AI Chatbots</CardTitle>
              <CardDescription className="text-lg">
                Op maat gemaakte chatbots die direct antwoord geven op klantvragen, 24/7 beschikbaar.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Globe className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-2xl mb-3">Webontwikkeling</CardTitle>
              <CardDescription className="text-lg">
                Professionele websites die uw bedrijf online laten groeien en processen automatiseren.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};