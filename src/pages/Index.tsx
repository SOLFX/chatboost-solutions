import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Packages } from "@/components/Packages";
import { ContactForm } from "@/components/ContactForm";
import { ReviewsSlider } from "@/components/ReviewsSlider";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AppointmentPlanner } from "@/components/AppointmentPlanner";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <Hero />
      <Services />
      <div className="container mx-auto px-4 py-8 text-center">
        <AppointmentPlanner />
      </div>
      <ReviewsSlider />
      <Packages />
      <About />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;