import { siteConfig } from "@/app/config/site";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}
