import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SterlingPetroleum from "./pages/sterling-petroleum";
import MathanElectronics from "./pages/mathan-electronics";
import Arcspazia from "./pages/arcspazia";
import WhatsAppFloat from "./components/WhatsAppFloat";
import GATracker from "./components/GATracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GATracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sterling-petroleum" element={<SterlingPetroleum />} />
          <Route path="/mathan-electronics" element={<MathanElectronics />} />
          <Route path="/arcspazia" element={<Arcspazia />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppFloat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
