import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AppointmentPlanner } from "@/components/AppointmentPlanner";

const Webshop = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Professionele Webshops op Maat
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Laat uw online verkoop groeien met een op maat gemaakte webshop. 
            Wij ontwikkelen gebruiksvriendelijke en veilige e-commerce oplossingen 
            die perfect aansluiten bij uw bedrijf.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Button 
              size="lg"
              className="bg-primary text-white hover:bg-primary/90"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Neem contact op
            </Button>
            <AppointmentPlanner />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Webshop;