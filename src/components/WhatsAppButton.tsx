import { WhatsApp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/31686339889`, '_blank');
  };

  return (
    <Button
      variant="default"
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 rounded-full w-14 h-14 p-0 bg-green-500 hover:bg-green-600 shadow-lg z-50"
    >
      <WhatsApp className="h-6 w-6 text-white" />
    </Button>
  );
};