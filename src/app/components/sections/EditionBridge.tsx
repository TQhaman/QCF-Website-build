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
            Relive the moments that shaped TQCF, then see where the festival goes next.
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
              <h3>Relive {past.year}</h3>
              <p>{past.summary}</p>
              <span className={styles.placeholderLink}>Gallery coming soon</span>
            </div>
          </article>

          <article className={styles.upcomingCard}>
            <div className={styles.upcomingTopline}>
              <span>UPCOMING</span>
              <span>{upcoming.theme}</span>
            </div>
            <div className={styles.yearDisplay}>{upcoming.year}</div>
            <div className={styles.cardCopy}>
              <p className={styles.cardMeta}>{upcoming.dates}</p>
              <h3>See what&apos;s next</h3>
              <p>{upcoming.summary}</p>
              <div className={styles.locationBlock}>
                <span>Festival precinct</span>
                <strong>{upcoming.location}</strong>
              </div>
              <span className={styles.programmeCta}>
                Programme announcements coming soon
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
