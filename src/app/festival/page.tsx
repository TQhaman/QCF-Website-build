import { SitePage } from "@/app/components/layout/SitePage";
import { FestivalStory } from "@/app/components/sections/FestivalStory";
import { ExperienceQCF } from "@/app/components/sections/ExperienceQCF";
import { OrganiserCredits } from "@/app/components/sections/OrganiserCredits";
import { FestivalMotif } from "@/app/components/shared/FestivalMotif";
import { supportingPageMetadata } from "@/app/lib/page-metadata";

export const metadata = supportingPageMetadata("festival");

export default function FestivalPage() {
  return (
    <SitePage page="festival">
      <div className="shell"><FestivalMotif /></div>
      <FestivalStory showIntro={false} />
      <ExperienceQCF />
      <OrganiserCredits />
    </SitePage>
  );
}
