import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    company: "TechCorp BV",
    text: "SOLFX heeft onze klantenservice compleet getransformeerd. De chatbot bespaart ons uren werk.",
    rating: 5
  },
  {
    company: "Marketing Pro",
    text: "Zeer professioneel team dat echt met je meedenkt. De implementatie was vlekkeloos.",
    rating: 5
  },
  {
    company: "WebShop Plus",
    text: "Dankzij SOLFX kunnen we 24/7 onze klanten helpen. Een geweldige investering.",
    rating: 5
  }
];

export const ReviewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-12 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Wat Zeggen Onze Klanten</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur transform transition-all duration-500 hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-4 italic">"{reviews[currentIndex].text}"</p>
              <p className="font-semibold text-primary">{reviews[currentIndex].company}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};