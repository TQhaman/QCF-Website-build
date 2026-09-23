import { festivalConfig } from "@/app/data/festival";
import { SocialIcon } from "@/app/components/shared/SocialIcon";
import type { FestivalContact } from "@/app/types/festival";
import styles from "./StayUpdated.module.css";

export function StayUpdated() {
  const { stayUpdated } = festivalConfig;
  const contact: FestivalContact = festivalConfig.contact;
  const hasConfirmedChannels = Boolean(
    contact.instagramUrl || contact.tiktokUrl || contact.whatsappUrl,
  );

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

        {hasConfirmedChannels || contact.newsletterUrl ? (
          <div className={styles.actions}>
            {hasConfirmedChannels ? (
              <div className={styles.actionGroup}>
                <p className={styles.actionLabel}>Follow TQCF</p>
                <nav className={styles.channelLinks} aria-label="Follow TQCF">
                  {contact.instagramUrl ? (
                    <a
                      className={styles.iconLink}
                      href={contact.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="TQCF on Instagram"
                    >
                      <SocialIcon platform="instagram" className={styles.icon} />
                    </a>
                  ) : null}

                  {contact.tiktokUrl ? (
                    <a
                      className={styles.iconLink}
                      href={contact.tiktokUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="TQCF on TikTok"
                    >
                      <SocialIcon platform="tiktok" className={styles.icon} />
                    </a>
                  ) : null}

                  {contact.whatsappUrl && contact.whatsappDisplay ? (
                    <a
                      className={styles.whatsappLink}
                      href={contact.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Message TQCF on WhatsApp at ${contact.whatsappDisplay}`}
                    >
                      <SocialIcon platform="whatsapp" className={styles.icon} />
                      <span>{contact.whatsappDisplay}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </nav>
              </div>
            ) : null}

            {contact.newsletterUrl ? (
              <div className={styles.actionGroup}>
                <p className={styles.actionLabel}>Festival updates</p>
                <a className={styles.action} href={contact.newsletterUrl}>
                  {stayUpdated.newsletterLabel}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
