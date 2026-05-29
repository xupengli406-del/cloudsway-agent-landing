import Navigation from "@/components/Navigation";
import InteractiveHero from "@/components/InteractiveHero";
import HowItWorks from "@/components/HowItWorks";
import Capabilities from "@/components/Capabilities";
import DeveloperExperience from "@/components/DeveloperExperience";
import Performance from "@/components/Performance";
import WhyUs from "@/components/WhyUs";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

function Divider() {
  return <div className="section-divider" />;
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <InteractiveHero />
        <Divider />
        <HowItWorks />
        <Divider />
        <Capabilities />
        <DeveloperExperience />
        <Divider />
        <Performance />
        <WhyUs />
        <Divider />
        <UseCases />
        <Divider />
        <Pricing />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
