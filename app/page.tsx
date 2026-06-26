import Hero from "./home/Hero";
import TrustedCompanies from "./home/TrustedCompanies";
import Services from "./home/Services";
import Process from "./home/Process";
import Testimonials from "./home/Testimonials";
import CTA from "./home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}