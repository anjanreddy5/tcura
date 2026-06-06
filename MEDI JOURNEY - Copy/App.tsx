import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HowItWorks } from "./components/HowItWorks";
import { TopTreatments } from "./components/TopTreatments";
import { TopHospitals } from "./components/TopHospitals";
import { FeaturedDoctors } from "./components/FeaturedDoctors";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { FloatingChat } from "./components/FloatingChat";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <TopTreatments />
        <TopHospitals />
        <FeaturedDoctors />
        <Testimonials />
      </main>
      <Footer />
      <FloatingChat />
      <Toaster position="top-center" />
    </div>
  );
}
