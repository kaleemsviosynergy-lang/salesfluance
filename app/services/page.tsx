import ServicesHero from "../services-components/ServicesHero";
import ServicesGrid from "../services-components/ServicesGrid";
import GrowthProcess from "../services-components/GrowthProcess";
import WhyChoose from "../services-components/WhyChoose";
import ServicesCTA from "../services-components/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <GrowthProcess />
      <WhyChoose />
      <ServicesCTA />
    </>
  );
}