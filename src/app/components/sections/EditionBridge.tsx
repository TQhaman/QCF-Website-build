import Image from "next/image";
import { festivalConfig } from "@/app/data/festival";
import styles from "./EditionBridge.module.css";

export function EditionBridge() {
  const past = festivalConfig.editions.find((edition) => edition.status === "past");
  const upcoming = festivalConfig.editions.find((edition) => edition.status === "upcoming");

  if (!past || !upcoming) return null;

  return (
    <section className={styles.section} id="editions" aria-labelledby="editions-title">
      <div className="shell">
        <div className={styles.headingRow}>
          <div>
            <p className={styles.eyebrow}>Festival editions</p>
            <h2 id="editions-title">The story continues.</h2>
          </div>
          <p className={styles.intro}>
            Each edition leaves its own memories. Relive the inaugural festival
            through its people, performances and street moments while looking
            ahead to TQCF 2027.
          </p>
        </div>

        <div className={styles.grid}>
          <article className={styles.pastCard}>
            <div className={styles.imageWrap}>
              {past.image ? (
                <Image
                  src={past.image.src}
                  alt={past.image.alt}
                  fill
                  sizes="(min-width: 900px) 50vw, 100vw"
                  className={styles.image}
                  style={{ objectPosition: past.image.objectPosition }}
                />
              ) : null}
            </div>
            <div className={styles.cardCopy}>
              <p className={styles.cardMeta}>PAST EDITION · {past.dates}</p>
              <h3>{past.title}</h3>
              <p>{past.summary}</p>
              {past.ctaHref ? (
                <a className={styles.editionCta} href={past.ctaHref}>
                  {past.ctaLabel}
                </a>
              ) : (
                <span className={styles.editionCta}>{past.ctaLabel}</span>
              )}
            </div>
          </article>

          <article className={styles.upcomingCard}>
            <div className={styles.upcomingTopline}>
              <span>UPCOMING</span>
              <span>· {upcoming.year} EDITION</span>
            </div>
            <div className={styles.yearDisplay}>{upcoming.year}</div>
            <div className={styles.cardCopy}>
              <p className={styles.cardMeta}>{upcoming.dates}</p>
              <h3>{upcoming.title}</h3>
              <p>{upcoming.summary}</p>
              <div className={styles.locationBlock}>
                <span>Festival precinct</span>
                <strong>{upcoming.location}</strong>
              </div>
              {upcoming.ctaHref ? (
                <a className={styles.programmeCta} href={upcoming.ctaHref}>
                  {upcoming.ctaLabel}
                </a>
              ) : (
                <span className={styles.programmeCta}>{upcoming.ctaLabel}</span>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
