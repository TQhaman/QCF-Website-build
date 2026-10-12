import { festivalConfig } from "@/app/data/festival";
import Link from "next/link";
import type { Route } from "next";
import styles from "./EditionBridge.module.css";

export function EditionBridge({ compact = false }: { compact?: boolean }) {
  const past = festivalConfig.editions.find((edition) => edition.status === "past");
  const upcoming = festivalConfig.editions.find((edition) => edition.status === "upcoming");

  if (!past || !upcoming) return null;

  return (
    <section className={[styles.section, compact && styles.compact].filter(Boolean).join(" ")} id="editions" aria-labelledby="editions-title">
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
            <div className={styles.pastTopline}>
              <span>PAST EDITION</span>
              <span>· {past.year}</span>
            </div>

            {!compact ? <div className={styles.pastYear} aria-hidden="true">
              {past.year}
            </div> : null}

            <div className={styles.cardCopy}>
              <p className={styles.cardMeta}>PAST EDITION · {past.dates}</p>
              <h3>{past.title}</h3>
              <p>{past.summary}</p>
              {past.ctaHref ? (
                <Link className={styles.archiveButton} href={past.ctaHref as Route}>
                  {past.ctaLabel}
                  <span aria-hidden="true">→</span>
                </Link>
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
            {!compact ? <div className={styles.yearDisplay}>{upcoming.year}</div> : null}
            <div className={styles.cardCopy}>
              <p className={styles.cardMeta}>{upcoming.dates}</p>
              <h3>{upcoming.title}</h3>
              <p>{upcoming.summary}</p>
              <div className={styles.locationBlock}>
                <span>Festival precinct</span>
                <strong>{upcoming.location}</strong>
              </div>
              {upcoming.ctaHref ? (
                <Link className={styles.programmeCta} href={upcoming.ctaHref as Route}>
                  {upcoming.ctaLabel}
                </Link>
              ) : (
                <span className={styles.programmeCta}>{upcoming.ctaLabel}</span>
              )}
              {compact ? (
                <Link className={styles.archiveButton} href={festivalConfig.landing.upcomingCta.href as Route}>
                  {festivalConfig.landing.upcomingCta.label} <span aria-hidden="true">→</span>
                </Link>
              ) : null}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
