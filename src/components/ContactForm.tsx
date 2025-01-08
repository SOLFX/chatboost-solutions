import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bericht verzonden",
      description: "We nemen zo spoedig mogelijk contact met u op.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="py-20 bg-white" id="contact">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <div>
            <Input
              placeholder="Naam"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <Textarea
              placeholder="Uw bericht"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="min-h-[150px]"
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            Verstuur
          </Button>
        </form>
      </div>
    </div>
  );
};