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
              <div className={styles.media}>
                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.mediaLabel}>
                  {experience.mediaLabel}
                </span>
              </div>

              <div className={styles.copy}>
                <p className={styles.label}>
                  {experience.label}
                </p>

                <h3>{experience.title}</h3>

                <p className={styles.description}>
                  {experience.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}