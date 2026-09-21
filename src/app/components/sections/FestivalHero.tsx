import Image from "next/image";
import { festivalConfig } from "@/app/data/festival";
import styles from "./FestivalHero.module.css";

export function FestivalHero() {
  const { contact, hero } = festivalConfig;

  return (
    <section className={styles.hero}>
      <div className="shell">
        <div className={styles.topline}>
          <p>{hero.kicker}</p>
          <p>{festivalConfig.editionTheme} · {festivalConfig.editionYear} EDITION</p>
        </div>

        <div className={styles.titleBlock}>
          <span className={styles.the}>THE</span>
          <h1>
            <span>QUIGNEY</span>
            <span>CULTURE</span>
            <span>FESTIVAL</span>
          </h1>
          <span className={styles.year}>2027</span>
        </div>

        <div className={styles.rule} aria-hidden="true" />

        <div className={styles.detailsGrid}>
          <div className={styles.dateBlock}>
            <span>26</span>
            <span className={styles.dateConnector}>—</span>
            <span>27</span>
            <small>FEB / 2027</small>
          </div>

          <div className={styles.statement}>
            <p>{hero.statement}</p>
            <div className={styles.actions}>
              {contact.ticketUrl ? (
                <a
                  className={styles.primaryAction}
                  href={contact.ticketUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Get QCF tickets (opens in a new tab)"
                >
                  Get tickets <span aria-hidden="true">↗</span>
                </a>
              ) : null}
              <a
                className={contact.ticketUrl ? styles.textAction : styles.primaryAction}
                href="#programme"
              >
                Explore 2027
              </a>
              <a className={styles.textAction} href="#editions">Relive 2026 <span aria-hidden="true">↘</span></a>
            </div>
          </div>

          <div className={styles.location}>
            <span className={styles.locationLabel}>Festival precinct</span>
            <strong>Caxton &amp; Burns Streets</strong>
            <p>Quigney · East London · Eastern Cape</p>
          </div>
        </div>

        <figure className={styles.heroMedia}>
          <div className={styles.heroImageFrame}>
            <Image
              className={styles.heroImage}
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              sizes="(min-width: 86rem) 1376px, (min-width: 48rem) calc(100vw - 3rem), calc(100vw - 1.5rem)"
              preload
              style={{ objectPosition: hero.image.objectPosition }}
            />
          </div>
          <figcaption>
            <span>QCF {hero.image.year}</span>
            <span>Festival atmosphere</span>
          </figcaption>
        </figure>

        <div
          className={styles.posterStrip}
          aria-label="QCF themes: street, culture, people and place"
        >
          <span>STREET</span>
          <span>CULTURE</span>
          <span>PEOPLE</span>
          <span>PLACE</span>
        </div>
      </div>
    </section>
  );
}
