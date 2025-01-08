import { MessageSquare, Globe, Bot, Code, Zap, Lock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const Services = () => {
  return (
    <>
      <div className="py-20 bg-white" id="development">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Webontwikkeling</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl mb-3">Custom Websites</CardTitle>
                <CardDescription>
                  Professionele websites op maat gemaakt voor uw bedrijf.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl mb-3">Optimalisatie</CardTitle>
                <CardDescription>
                  Snelle laadtijden en optimale gebruikerservaring.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lock className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl mb-3">Veilig & Betrouwbaar</CardTitle>
                <CardDescription>
                  Websites gebouwd met de nieuwste veiligheidsnormen.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50" id="chatbot">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">AI Chatbot</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Bot className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl mb-3">24/7 Beschikbaar</CardTitle>
                  <CardDescription>
                    Onze chatbots zijn altijd beschikbaar om uw klanten te helpen.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MessageSquare className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl mb-3">Persoonlijke Antwoorden</CardTitle>
                  <CardDescription>
                    Chatbots die natuurlijk communiceren en persoonlijke antwoorden geven.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="flex items-center justify-center">
              <ChatbotDemo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};