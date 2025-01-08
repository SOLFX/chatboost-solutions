import { Check } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export const Packages = () => {
  return (
    <div className="py-20 bg-gray-50" id="packages">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Onze Pakketten</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-xl">Starter</CardTitle>
              <p className="text-3xl font-bold">€499</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Basis chatbot integratie</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>5 aangepaste antwoorden</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Email support</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="relative border-primary">
            <CardHeader>
              <CardTitle className="text-xl">Professional</CardTitle>
              <p className="text-3xl font-bold">€999</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Geavanceerde chatbot</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>20 aangepaste antwoorden</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>24/7 support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Analytics dashboard</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-xl">Enterprise</CardTitle>
              <p className="text-3xl font-bold">Op maat</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Volledig op maat</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Onbeperkte antwoorden</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Dedicated support team</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>API integraties</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};