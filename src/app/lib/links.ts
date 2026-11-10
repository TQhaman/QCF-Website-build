export function externalLinkAttributes(href: string, siteUrl: string) {
  const origin = new URL(siteUrl).origin;
  const destination = new URL(href, origin);
  if (destination.origin === origin ||
    (destination.protocol !== "https:" && destination.protocol !== "http:")) {
    return undefined;
  }
  return { target: "_blank", rel: "noopener noreferrer" } as const;
}
