import type { ReactNode } from "react";
import Link from "next/link";
import type { Route } from "next";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BackToTop } from "@/app/components/shared/BackToTop";
import { festivalConfig } from "@/app/data/festival";
import styles from "./SitePage.module.css";

export type SupportingPage = keyof typeof festivalConfig.pages;

export function SitePage({ page, children, tickets = false }: {
  page: SupportingPage;
  children: ReactNode;
  tickets?: boolean;
}) {
  const content = festivalConfig.pages[page];
  const ticketUrl = festivalConfig.contact.ticketUrl;
  return (
    <>
      <a className="skipLink" href="#main-content">Skip to content</a>
      <Navbar navItems={festivalConfig.navItems} ticketUrl={ticketUrl} />
      <main id="main-content">
        <header className={styles.header}>
          <div className="shell">
            <p className={styles.eyebrow}>{content.eyebrow}</p>
            <h1>{content.title}</h1>
            {"intro" in content ? <p className={styles.intro}>{content.intro}</p> : null}
            {page === "programme" ? (
              <div className={styles.facts}>
                <p>{festivalConfig.dates}</p>
                <p>{festivalConfig.location}</p>
              </div>
            ) : null}
          </div>
        </header>
        {children}
        <nav className={styles.onward} aria-label="Continue exploring TQCF">
          <div className="shell">
            {content.links.map((link) => (
              <Link className={styles.link} key={link.href} href={link.href as Route}>
                {link.label} <span aria-hidden="true">→</span>
              </Link>
            ))}
            {tickets && ticketUrl ? (
              <a className={styles.ticket} href={ticketUrl} target="_blank" rel="noopener noreferrer"
                aria-label="Get TQCF 2027 tickets on FIXR (opens in a new tab)">
                Get tickets <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>
        </nav>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
