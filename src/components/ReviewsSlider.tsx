import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    company: "TechCorp BV",
    text: "SOLFX heeft onze online aanwezigheid compleet getransformeerd. De chatbot en website werken perfect samen!",
    rating: 5
  },
  {
    company: "E-Commerce Plus",
    text: "Onze webshop draait beter dan ooit. De klantenservice via WhatsApp chatbot is een geweldige toevoeging.",
    rating: 5
  },
  {
    company: "Marketing Pro",
    text: "Het team van SOLFX denkt echt met je mee. De implementatie was vlekkeloos en het resultaat overtreft onze verwachtingen.",
    rating: 5
  },
  {
    company: "WebShop Plus",
    text: "Dankzij SOLFX kunnen we 24/7 onze klanten helpen. Een geweldige investering die we iedereen aanraden!",
    rating: 5
  }
];

export const ReviewsSlider = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => (prev - 1) % (reviews.length * 100));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-8 bg-gradient-to-r from-primary/5 via-white to-primary/5">
      <div className="container px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Wat Zeggen Onze Klanten</h2>
        <div className="max-w-5xl mx-auto overflow-hidden">
          <motion.div 
            className="flex gap-4"
            style={{
              transform: `translateX(${position}px)`,
              transition: 'transform 0.5s linear'
            }}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <Card key={index} className="min-w-[280px] flex-shrink-0 bg-white/80 backdrop-blur">
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
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};