import { Background } from "@/components/background";
// import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
// import { Hero } from "@/components/blocks/hero";
import { Logos } from "@/components/blocks/logos";
// import { Pricing } from "@/components/blocks/pricing";
// import { ResourceAllocation } from "@/components/blocks/resource-allocation";
import { Testimonials } from "@/components/blocks/testimonials";
// import { HeroTwo } from "@/components/blocks/hero-two";
import { Hero47 } from "@/components/hero47";
import { DetailedStats } from "@/components/stats-section/stats-details";

export default function Home() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        {/* <Hero /> */}
        {/* <HeroTwo /> */}
        {<Hero47 />}
        <DetailedStats />
        <Features />
         <Logos />
        {/* <ResourceAllocation /> */}
      </Background>
      <Testimonials />
      {/* <Background variant="bottom">
        <Pricing />
        <FAQ />
      </Background> */}
    </>
  );
}
