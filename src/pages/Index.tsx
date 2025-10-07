import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import ForPassengers from "@/components/landing/ForPassengers";
import ForDrivers from "@/components/landing/ForDrivers";
import HowItWorks from "@/components/landing/HowItWorks";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <ForPassengers />
      <ForDrivers />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
