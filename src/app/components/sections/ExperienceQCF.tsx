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
          <p className={styles.eyebrow}>QCF / Across the precinct</p>

          <div className={styles.headerGrid}>
            <h2 id="experience-title">
              There&apos;s more than one way into QCF.
            </h2>

            <p>
              Come for a performance and find food, fashion, art, makers
              and people along the way. QCF is designed as a festival you
              move through, not an experience that happens on one stage.
            </p>
          </div>
        </header>

        <div className={styles.grid}>
          {festivalConfig.experiences.map((experience, index) => (
            <article
              className={`${styles.card} ${styles[experience.layout]}`}
              data-tone={experience.tone}
              key={experience.label}
            >
              <div
                className={styles.media}
                data-has-image={Boolean(experience.image)}
                data-orientation={experience.image?.orientation}
              >
                {experience.image ? (
                  <Image
                    className={styles.image}
                    src={experience.image.src}
                    alt={experience.image.alt}
                    fill
                    sizes={
                      experience.layout === "feature"
                        ? "(min-width: 70rem) 45vw, (min-width: 48rem) 58vw, calc(100vw - 1.5rem)"
                        : "(min-width: 70rem) 35vw, (min-width: 48rem) 42vw, calc(100vw - 1.5rem)"
                    }
                    style={{ objectPosition: experience.image.objectPosition }}
                  />
                ) : null}
                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.mediaLabel}>
                  {experience.mediaLabel}
                </span>
              </div>

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
