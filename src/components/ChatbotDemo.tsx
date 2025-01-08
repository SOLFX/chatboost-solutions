import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export const ChatbotDemo = () => {
  const [messages, setMessages] = useState([
    { text: "Hallo! Hoe kan ik u vandaag helpen?", isBot: true },
  ]);
  const [input, setInput] = useState("");
  const [customResponse, setCustomResponse] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { text: input, isBot: false }]);
    setInput("");
    
    setTimeout(() => {
      const response = customResponse || "Bedankt voor uw bericht! Een van onze medewerkers zal spoedig contact met u opnemen.";
      setMessages(prev => [...prev, {
        text: response,
        isBot: true
      }]);
      
      // Add promotional message after regular response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "Wilt u ook zo'n intelligente chatbot voor uw bedrijf? Neem contact met ons op en ontdek de mogelijkheden!",
          isBot: true
        }]);
      }, 1000);
    }, 1000);
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b bg-primary text-white rounded-t-lg">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          <span className="font-medium">SOLFX Chatbot</span>
        </div>
      </div>
      <div className="h-96 flex flex-col">
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[80%] p-3 rounded-lg ${
                msg.isBot ? 'bg-gray-100' : 'bg-primary text-white'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t space-y-4">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type uw bericht..."
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button onClick={handleSend}>Verstuur</Button>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setShowCustomInput(!showCustomInput)}
            className="w-full"
          >
            {showCustomInput ? "Verberg Custom Response" : "Toon Custom Response"}
          </Button>
          {showCustomInput && (
            <Textarea
              value={customResponse}
              onChange={(e) => setCustomResponse(e.target.value)}
              placeholder="Voer hier het gewenste antwoord in..."
              className="w-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};