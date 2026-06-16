import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import WhyPovidoneIodine from "@/pages/WhyPovidoneIodine";
import HowItWorks from "@/pages/HowItWorks";
import DrugFacts from "@/pages/DrugFacts";
import FAQ from "@/pages/FAQ";
import About from "@/pages/About";
import Wholesale from "@/pages/Wholesale";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/why-povidone-iodine" component={WhyPovidoneIodine} />
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/drug-facts" component={DrugFacts} />
          <Route path="/faq" component={FAQ} />
          <Route path="/about" component={About} />
          <Route path="/wholesale" component={Wholesale} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
