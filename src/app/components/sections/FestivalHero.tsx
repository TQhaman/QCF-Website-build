import Image from "next/image";
import { festivalConfig } from "@/app/data/festival";
import styles from "./FestivalHero.module.css";

export function FestivalHero() {
  const { hero } = festivalConfig;
  const { dates, location } = festivalConfig.event;

  return (
    <section className={styles.hero}>
      <div className="shell">
        <div className={styles.topline}>
          <p>{hero.kicker}</p>
          <p>{festivalConfig.editionYear} EDITION</p>
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
            <span>{dates.startDay}</span>
            <span className={styles.dateConnector}>—</span>
            <span>{dates.endDay}</span>
            <small>{dates.monthShort} / {festivalConfig.editionYear}</small>
          </div>

          <div className={styles.statement}>
            <p>{hero.statement}</p>
            <div className={styles.actions}>
              <a
                className={styles.primaryAction}
                href={hero.programmeCta.href}
              >
                {hero.programmeCta.label}
              </a>
              <a className={styles.textAction} href={hero.archiveCta.href}>
                {hero.archiveCta.label}
              </a>
            </div>
          </div>

          <div className={styles.location}>
            <span className={styles.locationLabel}>Festival precinct</span>
            <strong>{location.primary}</strong>
            <p>{location.suburb} · {location.displayCity} · {location.region}</p>
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
            <span>TQCF {hero.image.year}</span>
            <span>Festival atmosphere</span>
          </figcaption>
        </figure>

        <div
          className={styles.posterStrip}
          aria-label="TQCF themes: street, culture, people and place"
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
