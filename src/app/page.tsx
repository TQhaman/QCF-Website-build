import { Footer } from "@/app/components/layout/Footer";
import { Navbar } from "@/app/components/layout/Navbar";
import { EditionBridge } from "@/app/components/sections/EditionBridge";
import { FestivalHero } from "@/app/components/sections/FestivalHero";
import { FestivalStory } from "@/app/components/sections/FestivalStory";
import { GetInvolved } from "@/app/components/sections/GetInvolved";
import { Partners } from "@/app/components/sections/Partners";
import { PlanYourVisit } from "@/app/components/sections/PlanYourVisit";
import { OrganiserCredits } from "@/app/components/sections/OrganiserCredits";
import { StructuredData } from "@/app/components/shared/StructuredData";
import { BackToTop } from "@/app/components/shared/BackToTop";
import { festivalConfig } from "@/app/data/festival";
import { ExperienceQCF } from "@/app/components/sections/ExperienceQCF";
import { ProgrammePreview } from "@/app/components/sections/ProgrammePreview";
import { QCFPrecinct } from "@/app/components/sections/QCFPrecinct";
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
        <FestivalStory />
        <EditionBridge />
        <ExperienceQCF />
        <ProgrammePreview />
        <QCFPrecinct />
        <GetInvolved />
        <PlanYourVisit />
        <Partners />
        <StayUpdated />
        <OrganiserCredits />
      </main>
      <Footer />
      <BackToTop />
      <StructuredData />
    </>
  );
}
