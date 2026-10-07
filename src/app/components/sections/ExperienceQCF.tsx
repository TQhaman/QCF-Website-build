import Image from "next/image";
import { festivalConfig } from "@/app/data/festival";
import styles from "./ExperienceQCF.module.css";

export function ExperienceQCF() {
  return (
    <section
      className={styles.section}
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="shell">
        <header className={styles.header}>
          <p className={styles.eyebrow}>TQCF / Across the precinct</p>

          <div className={styles.headerGrid}>
            <h2 id="experience-title">
              There’s more than one way into TQCF.
            </h2>

            <p>
              Come for a performance and discover food, fashion, art, makers
              and people along the way. TQCF is a festival you move through —
              not one experienced from a single stage.
            </p>
          </div>
        </header>

        <div className={styles.grid}>
          {festivalConfig.experiences.map((experience) => (
            <article
              className={`${styles.card} ${styles[experience.layout]}`}
              data-tone={experience.tone}
              key={experience.label}
            >
              {experience.image ? (
                <figure className={styles.mediaGroup}>
                  <div
                    className={styles.media}
                    data-orientation={experience.image.orientation}
                    style={
                      experience.image.orientation === "portrait"
                        ? { aspectRatio: `${experience.image.width} / ${experience.image.height}` }
                        : undefined
                    }
                  >
                    <Image
                      className={styles.image}
                      src={experience.image.src}
                      alt={experience.image.alt}
                      fill
                      loading="lazy"
                      sizes={
                        experience.layout === "feature"
                          ? "(min-width: 89rem) 796px, (min-width: 48rem) calc(58.333vw - 34.667px), calc(100vw - 24px)"
                          : "(min-width: 89rem) 564px, (min-width: 48rem) calc(41.667vw - 29.333px), calc(100vw - 24px)"
                      }
                      style={{ objectPosition: experience.image.objectPosition }}
                    />
                  </div>
                  <figcaption className={styles.mediaLabel}>
                    {experience.mediaLabel}
                  </figcaption>
                </figure>
              ) : null}

              <div className={styles.copy}>
                <p className={styles.label}>{experience.label}</p>

                <h3>{experience.title}</h3>

                <p className={styles.description}>{experience.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
