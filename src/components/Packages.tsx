import { Check } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Packages = () => {
  return (
    <div className="py-20 bg-gray-50" id="packages">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Onze Pakketten</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kunt u geen keuze maken? Neem contact met ons op voor een vrijblijvend 15-minuten gesprek waarin we uw wensen bespreken.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-xl">Chatbot</CardTitle>
              <p className="text-3xl font-bold">€30</p>
              <p className="text-sm text-gray-500">per maand</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>WhatsApp & Website integratie</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>AI-aangedreven responses</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>24/7 beschikbaar</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-xl">Website</CardTitle>
              <p className="text-xl font-bold">Prijs op aanvraag</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Responsive design</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>SEO optimalisatie</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Content management</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-xl">Webshop</CardTitle>
              <p className="text-xl font-bold">Prijs op aanvraag</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>E-commerce platform</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Betalingsintegratie</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Voorraadmanagement</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="relative border-primary">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
              Meest gekozen
            </div>
            <CardHeader>
              <CardTitle className="text-xl">Compleet Pakket</CardTitle>
              <p className="text-xl font-bold">Prijs op aanvraag</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Website/Webshop naar keuze</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Chatbot integratie</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Premium support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Maatwerk oplossingen</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};