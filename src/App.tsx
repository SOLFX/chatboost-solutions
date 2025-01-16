import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Chatbot from "./pages/Chatbot";
import Webontwikkeling from "./pages/Webontwikkeling";
import Contact from "./pages/Contact";
import OverOns from "./pages/OverOns";
import Webshop from "./pages/Webshop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/webontwikkeling" element={<Webontwikkeling />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/webshop" element={<Webshop />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;