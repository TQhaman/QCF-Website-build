import { festivalConfig } from "@/app/data/festival";
import styles from "./ProgrammePreview.module.css";

export function ProgrammePreview() {
  const { programmePreview } = festivalConfig;

  return (
    <section
      className={styles.section}
      id="programme"
      aria-labelledby="programme-title"
    >
      <div className="shell">
        <header className={styles.header}>
          <p className={styles.eyebrow}>
            {programmePreview.eyebrow}
          </p>

          <div className={styles.headerGrid}>
            <h2 id="programme-title">
              {programmePreview.title}
            </h2>

            <p>
              {programmePreview.intro}
            </p>
          </div>
        </header>

        <div className={styles.schedule}>
          {programmePreview.days.map((programmeDay, index) => (
            <article
              className={styles.day}
              key={programmeDay.date}
            >
              <div className={styles.dayTop}>
                <span className={styles.dayNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.shortDate}>
                  {programmeDay.shortDate}
                </span>
              </div>

              <div className={styles.dayBody}>
                <div>
                  <p className={styles.dayLabel}>
                    Festival day
                  </p>

                  <h3>{programmeDay.day}</h3>

                  <p className={styles.fullDate}>
                    {programmeDay.date}
                  </p>
                </div>

                <p className={styles.status}>
                  {programmeDay.status}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.categories}>
          <div className={styles.categoryIntro}>
            <p className={styles.categoryEyebrow}>
              Across TQCF
            </p>

            <h3>
              Explore the programme your way.
            </h3>
          </div>

          <div className={styles.categoryList}>
            {programmePreview.categories.map(
              (category, index) => (
                <div
                  className={styles.category}
                  key={category.name}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{category.name}</p>
                </div>
              )
            )}
          </div>
        </div>

        <footer className={styles.footer}>
          <p>
            Artists, venues and performance times are still to come.
          </p>

          <span className={styles.comingSoon}>
            2027 programme coming soon
          </span>
        </footer>
      </div>
    </section>
  );
}
