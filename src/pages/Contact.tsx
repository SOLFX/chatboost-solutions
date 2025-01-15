import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { AppointmentPlanner } from "@/components/AppointmentPlanner";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
            Neem Contact Op
          </h1>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contactgegevens */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Onze Contactgegevens</h2>
              <div className="space-y-4">
                <p><strong>Bedrijfsnaam:</strong> SOLFX</p>
                <p><strong>E-mail:</strong> info@solfx.nl</p>
                <p><strong>Telefoon:</strong> +31 (0)6 12345678</p>
                <p><strong>Adres:</strong> Amsterdam, Nederland</p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Plan een Afspraak</h3>
                <AppointmentPlanner />
              </div>
            </div>

            {/* Contactformulier */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;