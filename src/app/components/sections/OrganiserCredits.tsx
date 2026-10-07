import Image from "next/image";
import { festivalConfig } from "@/app/data/festival";
import styles from "./OrganiserCredits.module.css";

export function OrganiserCredits() {
  return (
    <section className={styles.section} aria-label="Festival organisers">
      <div className="shell">
        <div className={styles.grid}>
          {festivalConfig.organiserCredits.map((credit) => (
            <article
              className={styles.credit}
              data-has-media={Boolean(credit.image)}
              key={credit.heading}
            >
              <div className={styles.headingGroup}>
                <h2>{credit.heading}</h2>
                <p className={styles.role}>{credit.role}</p>
              </div>
              <p className={styles.copy}>{credit.copy}</p>

              {credit.image && credit.mediaLabel ? (
                <figure className={styles.creditMedia}>
                  <div className={styles.mediaFrame}>
                    <Image
                      className={styles.mediaImage}
                      src={credit.image.src}
                      alt={credit.image.alt}
                      fill
                      loading="lazy"
                      sizes="(min-width: 89rem) 348px, (min-width: 70rem) max(256px, calc(30vw - 79.2px)), (min-width: 48rem) calc(50vw - 104px), calc(100vw - 24px)"
                      style={{ objectPosition: credit.image.objectPosition }}
                    />
                  </div>
                  <figcaption className={styles.mediaLabel}>
                    {credit.mediaLabel}
                  </figcaption>
                </figure>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
