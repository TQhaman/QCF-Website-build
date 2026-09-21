import { festivalConfig } from "@/app/data/festival";
import type { FestivalContact, LinkItem } from "@/app/types/festival";
import styles from "./StayUpdated.module.css";

export function StayUpdated() {
  const { stayUpdated } = festivalConfig;
  const contact: FestivalContact = festivalConfig.contact;
  const socialLinks = [
    contact.instagramUrl
      ? { label: "Instagram", href: contact.instagramUrl }
      : null,
    contact.facebookUrl
      ? { label: "Facebook", href: contact.facebookUrl }
      : null,
    contact.tiktokUrl
      ? { label: "TikTok", href: contact.tiktokUrl }
      : null,
  ].filter((item): item is LinkItem => item !== null);

  return (
    <section
      className={styles.section}
      id="stay-updated"
      aria-labelledby="stay-updated-title"
    >
      <div className="shell">
        <header className={styles.header}>
          <p className={styles.eyebrow}>{stayUpdated.eyebrow}</p>
          <h2 id="stay-updated-title">{stayUpdated.title}</h2>
          <p className={styles.intro}>{stayUpdated.intro}</p>
        </header>

        <div className={styles.actions}>
          <div className={styles.actionGroup}>
            <p className={styles.actionLabel}>Festival updates</p>
            {contact.newsletterUrl ? (
              <a className={styles.action} href={contact.newsletterUrl}>
                {stayUpdated.newsletterLabel}
                <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className={styles.pendingAction}>
                {stayUpdated.newsletterPendingLabel}
              </span>
            )}
          </div>

          <div className={styles.actionGroup}>
            <p className={styles.actionLabel}>Follow QCF</p>
            {socialLinks.length > 0 ? (
              <nav className={styles.socialLinks} aria-label="QCF social media">
                {socialLinks.map((link) => (
                  <a
                    className={styles.action}
                    href={link.href}
                    key={link.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </nav>
            ) : (
              <p className={styles.socialPending}>
                {stayUpdated.socialPendingLabel}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
