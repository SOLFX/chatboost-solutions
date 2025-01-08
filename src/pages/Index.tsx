import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Packages } from "@/components/Packages";
import { ContactForm } from "@/components/ContactForm";
import { ReviewsSlider } from "@/components/ReviewsSlider";

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <Hero />
      <Services />
      <ReviewsSlider />
      <Packages />
      <About />
      <ContactForm />
    </div>
  );
};

export default Index;