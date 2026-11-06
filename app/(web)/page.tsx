import About from "../components/home/About";
import CertificationsSection from "../components/home/CertificationsSection";
import Cta from "../components/home/Cta";
import Difference from "../components/home/Difference";
import Discover from "../components/home/Discover";
import Experiences from "../components/home/Experiences";
import Explore from "../components/home/Explore";
import Footer from "../components/home/Footer";
import FounderSection from "../components/home/FounderSection";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Marquee from "../components/home/Marquee";
import Personas from "../components/home/Personas";
import WhyChooseUs from "../components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Marquee />
      <About />
      <Personas />
      <Explore/>
      <Experiences />
      <WhyChooseUs/>
      <FounderSection/>
      <CertificationsSection/>
      <Cta />
      <Footer />
    </main>
  );
}
