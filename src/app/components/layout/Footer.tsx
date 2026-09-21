import { festivalConfig } from "@/app/data/festival";
import type { FestivalContact, LinkItem } from "@/app/types/festival";
import styles from "./Footer.module.css";

export function Footer() {
  const contact: FestivalContact = festivalConfig.contact;
  const connectItems = [
    contact.instagramUrl
      ? { label: "Instagram", href: contact.instagramUrl }
      : null,
    contact.facebookUrl
      ? { label: "Facebook", href: contact.facebookUrl }
      : null,
    contact.tiktokUrl
      ? { label: "TikTok", href: contact.tiktokUrl }
      : null,
    contact.email
      ? { label: "Email QCF", href: `mailto:${contact.email}` }
      : null,
  ].filter((item): item is LinkItem => item !== null);

  return (
    <footer className={styles.footer} id="visit">
      <div className="shell">
        <div className={styles.footerGrid}>
          <div className={styles.brand}>
            <div className={styles.brandLockup}>
              <span className={styles.brandMark} aria-hidden="true">Q</span>
              <p>Quigney Culture Festival</p>
            </div>

            <p className={styles.statement}>{festivalConfig.footer.tagline}</p>

            <div className={styles.festivalDetails}>
              <p>{festivalConfig.dates}</p>
              <p>{festivalConfig.location}</p>
            </div>
          </div>

          <nav className={styles.linkColumn} aria-label="Explore QCF">
            <p className={styles.columnLabel}>Explore</p>
            {festivalConfig.footer.exploreItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>

          <div className={styles.linkColumn}>
            <p className={styles.columnLabel}>Connect</p>
            {connectItems.length > 0 ? (
              connectItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))
            ) : (
              <p className={styles.pending}>Official channels to be confirmed.</p>
            )}
          </div>

          {festivalConfig.footer.informationItems.length > 0 ? (
            <nav className={styles.linkColumn} aria-label="Festival information">
              <p className={styles.columnLabel}>Festival information</p>
              {festivalConfig.footer.informationItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </nav>
          ) : null}
        </div>

        <div className={styles.bottom}>
          <p>Quigney Culture Festival</p>
          <p>{festivalConfig.editionYear} edition</p>
        </div>
      </div>
    </footer>
  );
}
