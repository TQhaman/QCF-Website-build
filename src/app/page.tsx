import { Footer } from "@/app/components/layout/Footer";
import { Navbar } from "@/app/components/layout/Navbar";
import { EditionBridge } from "@/app/components/sections/EditionBridge";
import { FestivalHero } from "@/app/components/sections/FestivalHero";
import { FestivalIntroduction } from "@/app/components/sections/FestivalIntroduction";
import { PlanYourFestival } from "@/app/components/sections/PlanYourFestival";
import { Partners } from "@/app/components/sections/Partners";
import { StructuredData } from "@/app/components/shared/StructuredData";
import { BackToTop } from "@/app/components/shared/BackToTop";
import { festivalConfig } from "@/app/data/festival";
import { StayUpdated } from "@/app/components/sections/StayUpdated";

export default function Home() {
  return (
    <>
      <a className="skipLink" href="#main-content">Skip to content</a>
      <Navbar
        navItems={festivalConfig.navItems}
        ticketUrl={festivalConfig.contact.ticketUrl}
      />
      <main id="main-content">
        <FestivalHero />
        <FestivalIntroduction />
        <EditionBridge compact />
        <PlanYourFestival />
        <Partners compact />
        <StayUpdated compact />
      </main>
      <Footer compact />
      <BackToTop />
      <StructuredData />
    </>
  );
}
