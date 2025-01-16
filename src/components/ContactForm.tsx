import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    city: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bericht verzonden",
      description: "We nemen zo spoedig mogelijk contact met u op.",
    });
    setFormData({ name: "", email: "", company: "", city: "", message: "" });
  };

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50" id="contact">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact</h2>
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />
          <form onSubmit={handleSubmit} className="space-y-6 relative">
            <div>
              <Input
                placeholder="Naam"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-white/50 backdrop-blur-sm"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-white/50 backdrop-blur-sm"
              />
            </div>
            <div>
              <Input
                placeholder="Bedrijfsnaam"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                required
                className="bg-white/50 backdrop-blur-sm"
              />
            </div>
            <div>
              <Input
                placeholder="Stad"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
                className="bg-white/50 backdrop-blur-sm"
              />
            </div>
            <div>
              <Textarea
                placeholder="Uw bericht"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-[150px] bg-white/50 backdrop-blur-sm"
              />
            </div>
            <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
              Verstuur
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};