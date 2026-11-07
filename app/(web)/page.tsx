import About from "../components/home/About";
import CertificationsSection from "../components/home/CertificationsSection";
import Experiences from "../components/home/Experiences";
import Explore from "../components/home/Explore";
import Footer from "../components/home/Footer";
import FounderSection from "../components/home/FounderSection";
import Hero from "../components/home/Hero";
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
      <Footer />
    </main>
  );
}
