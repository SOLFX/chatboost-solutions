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
    <div className="py-8 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="container px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Wat Zeggen Onze Klanten</h2>
        <div className="max-w-3xl mx-auto overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Card className="bg-white/80 backdrop-blur mx-2">
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm mb-2 italic">"{review.text}"</p>
                    <p className="text-sm font-semibold text-primary">{review.company}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};