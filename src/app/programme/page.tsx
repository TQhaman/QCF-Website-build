import { SitePage } from "@/app/components/layout/SitePage";
import { ProgrammePreview } from "@/app/components/sections/ProgrammePreview";
import { supportingPageMetadata } from "@/app/lib/page-metadata";

export const metadata = supportingPageMetadata("programme");

export default function ProgrammePage() {
  return <SitePage page="programme" tickets><ProgrammePreview /></SitePage>;
}
