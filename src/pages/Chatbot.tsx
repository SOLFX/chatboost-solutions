import { Navigation } from "@/components/Navigation";
import { ChatbotDemo } from "@/components/ChatbotDemo";
import { AppointmentPlanner } from "@/components/AppointmentPlanner";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

const Chatbot = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Intelligente Chatbots voor uw Bedrijf
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Verbeter uw klantenservice met onze op maat gemaakte AI-chatbots. 
            Onze chatbots zijn 24/7 beschikbaar, leren continu bij en kunnen worden 
            aangepast aan uw specifieke bedrijfsbehoeften.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Button 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Neem contact op
            </Button>
            <AppointmentPlanner />
          </div>
        </div>
        <ChatbotDemo />
      </div>
      <Footer />
    </div>
  );
};

export default Chatbot;