import Image from "next/image";
import { festivalConfig } from "@/app/data/festival";
import { SocialIcon } from "@/app/components/shared/SocialIcon";
import type { FestivalContact } from "@/app/types/festival";
import styles from "./Footer.module.css";

export function Footer() {
  const contact: FestivalContact = festivalConfig.contact;
  const hasConnectItems = Boolean(
    contact.instagramUrl ||
      contact.tiktokUrl ||
      contact.facebookUrl ||
      contact.whatsappUrl ||
      contact.email,
  );

  return (
    <footer className={styles.footer} id="visit">
      <div className="shell">
        <div className={styles.footerGrid}>
          <div className={styles.brand}>
            <div className={styles.brandLockup}>
              <span className={styles.brandLogoPanel}>
                <Image
                  className={styles.brandLogo}
                  src={festivalConfig.media.logoBlack.src}
                  alt={festivalConfig.media.logoBlack.alt}
                  width={festivalConfig.media.logoBlack.width}
                  height={festivalConfig.media.logoBlack.height}
                  sizes="112px"
                />
              </span>
            </div>

            <p className={styles.statement}>{festivalConfig.footer.tagline}</p>

            <div className={styles.festivalDetails}>
              <p>{festivalConfig.dates}</p>
              <p>{festivalConfig.location}</p>
            </div>

            {contact.ticketUrl ? (
              <a
                className={styles.ticketAction}
                href={contact.ticketUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Get QCF tickets (opens in a new tab)"
              >
                Get tickets <span aria-hidden="true">↗</span>
              </a>
            ) : null}
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

          {hasConnectItems ? (
            <div className={styles.linkColumn}>
              <p className={styles.columnLabel}>Connect</p>

              <div className={styles.socialIcons}>
                {contact.instagramUrl ? (
                  <a
                    className={styles.iconLink}
                    href={contact.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="QCF on Instagram"
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
                    aria-label="QCF on TikTok"
                  >
                    <SocialIcon platform="tiktok" className={styles.icon} />
                  </a>
                ) : null}
              </div>

              {contact.whatsappUrl && contact.whatsappDisplay ? (
                <a
                  className={styles.contactLink}
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Message QCF on WhatsApp at ${contact.whatsappDisplay}`}
                >
                  <SocialIcon platform="whatsapp" className={styles.contactIcon} />
                  <span>{contact.whatsappDisplay}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ) : null}

              {contact.facebookUrl ? (
                <a
                  className={styles.contactLink}
                  href={contact.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Facebook</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ) : null}

              {contact.email ? (
                <a className={styles.contactLink} href={`mailto:${contact.email}`}>
                  <span>Email QCF</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </div>
          ) : null}

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
