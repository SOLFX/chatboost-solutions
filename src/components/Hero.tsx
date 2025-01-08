import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 py-16 text-center animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
          Automatiseer uw klantenservice met AI
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Wij creëren slimme chatbots en websites die uw bedrijf helpen groeien
        </p>
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Neem contact op
        </Button>
      </div>
    </div>
  );
};