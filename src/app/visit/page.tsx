import { SitePage } from "@/app/components/layout/SitePage";
import { QCFPrecinct } from "@/app/components/sections/QCFPrecinct";
import { PlanYourVisit } from "@/app/components/sections/PlanYourVisit";
import { supportingPageMetadata } from "@/app/lib/page-metadata";

export const metadata = supportingPageMetadata("visit");

export default function VisitPage() {
  return <SitePage page="visit"><QCFPrecinct /><PlanYourVisit /></SitePage>;
}
