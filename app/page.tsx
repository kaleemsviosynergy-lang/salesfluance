import HomeHero from "@/components/home/HomeHero";
import TrustStrip from "@/components/home/TrustStrip";
import B2BGrowthShift from "@/components/home/B2BGrowthShift";
import Approach from "@/components/home/Approach";
import CoreCapabilities from "@/components/home/CoreCapabilities";
import HowItWorks from "@/components/home/HowItWorks";
import RevenueReadiness from "@/components/home/RevenueReadiness";
import FeaturedResult from "@/components/home/FeaturedResult";
import Industries from "@/components/home/Industries";
import WhySalesFluance from "@/components/home/WhySalesFluance";
import EnterpriseReadiness from "@/components/home/EnterpriseReadiness";
import FinalCTA from "@/components/home/FinalCTA";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <TrustStrip />
      <B2BGrowthShift />
      <Approach />
      <CoreCapabilities />
      <HowItWorks />
      <RevenueReadiness />
      <FeaturedResult />
      <Industries />
      <WhySalesFluance />
      <EnterpriseReadiness />
      <FinalCTA />
    </main>
  );
}