import { SitePage } from "@/app/components/layout/SitePage";
import { GetInvolved } from "@/app/components/sections/GetInvolved";
import { supportingPageMetadata } from "@/app/lib/page-metadata";

export const metadata = supportingPageMetadata("get-involved");

export default function GetInvolvedPage() {
  return <SitePage page="get-involved"><GetInvolved /></SitePage>;
}
