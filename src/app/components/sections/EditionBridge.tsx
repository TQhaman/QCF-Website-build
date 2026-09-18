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
            Every edition leaves its own memories. QCF can look forward to what is coming next while keeping the photographs, performances and moments from previous years part of the story.
          </p>
        </div>

        <div className={styles.grid}>
          <article className={styles.pastCard}>
            <div className={styles.imageWrap}>
              {past.image ? (
                <Image
                  src={past.image}
                  alt={past.imageAlt ?? `QCF ${past.year}`}
                  fill
                  sizes="(min-width: 900px) 50vw, 100vw"
                  className={styles.image}
                />
              ) : null}
            </div>
            <div className={styles.cardCopy}>
              <p className={styles.cardMeta}>PAST EDITION · {past.dates}</p>
              <h3>Relive {past.year}</h3>
              <p>{past.summary}</p>
              <span className={styles.placeholderLink}>Gallery coming soon</span>
            </div>
          </article>

          <article className={styles.upcomingCard} id="programme">
            <div className={styles.upcomingTopline}>
              <span>UPCOMING</span>
              <span>{upcoming.theme}</span>
            </div>
            <div className={styles.yearDisplay}>{upcoming.year}</div>
            <div className={styles.cardCopy}>
              <p className={styles.cardMeta}>{upcoming.dates}</p>
              <h3>What comes next</h3>
              <p>{upcoming.summary}</p>
              <div className={styles.locationBlock}>
                <span>Festival precinct</span>
                <strong>{upcoming.location}</strong>
              </div>
              <a className={styles.programmeCta} href="#programme-details" aria-disabled="true">
                Programme announcements coming soon
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
