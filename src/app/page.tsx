import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AgentDemo from "@/components/AgentDemo";
import HowItWorks from "@/components/HowItWorks";
import Capabilities from "@/components/Capabilities";
import DeveloperExperience from "@/components/DeveloperExperience";
import Performance from "@/components/Performance";
import WhyUs from "@/components/WhyUs";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <AgentDemo />
        <HowItWorks />
        <Capabilities />
        <DeveloperExperience />
        <Performance />
        <WhyUs />
        <UseCases />
        <Pricing />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
