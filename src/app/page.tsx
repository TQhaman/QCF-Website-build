import { Footer } from "@/app/components/layout/Footer";
import { Navbar } from "@/app/components/layout/Navbar";
import { EditionBridge } from "@/app/components/sections/EditionBridge";
import { FestivalHero } from "@/app/components/sections/FestivalHero";
import { FestivalStory } from "@/app/components/sections/FestivalStory";
import { StructuredData } from "@/app/components/shared/StructuredData";
import { festivalConfig } from "@/app/data/festival";
import { ExperienceQCF } from "@/app/components/sections/ExperienceQCF";
import { ProgrammePreview } from "@/app/components/sections/ProgrammePreview";

export default function Home() {
  return (
    <>
      <a className="skipLink" href="#main-content">Skip to content</a>
      <Navbar navItems={festivalConfig.navItems} cta={festivalConfig.primaryCta} />
      <main id="main-content">
        <FestivalHero />
        <FestivalStory />
        <EditionBridge />
        <ExperienceQCF />
        <ProgrammePreview />
      </main>
      <Footer />
      <StructuredData />
    </>
  );
}
