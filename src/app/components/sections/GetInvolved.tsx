import { festivalConfig } from "@/app/data/festival";
import styles from "./GetInvolved.module.css";

export function GetInvolved() {
  const { getInvolved } = festivalConfig;

  return (
    <section
      className={styles.section}
      id="get-involved"
      aria-labelledby="get-involved-title"
    >
      <div className="shell">
        <header className={styles.header}>
          <p className={styles.eyebrow}>{getInvolved.eyebrow}</p>

          <div className={styles.headerGrid}>
            <h2 id="get-involved-title">{getInvolved.title}</h2>
            <p>{getInvolved.intro}</p>
          </div>
        </header>

        <div className={styles.grid}>
          {getInvolved.paths.map((path) => (
            <article
              className={styles.card}
              data-tone={path.tone}
              key={path.number}
            >
              <div className={styles.cardTop}>
                <span>{path.number}</span>
                <span>{path.label}</span>
              </div>

              <div className={styles.cardBody}>
                <h3>{path.title}</h3>
                <p>{path.copy}</p>
              </div>

              <div className={styles.cardFooter}>
                <p className={styles.status}>{path.status}</p>

                {path.href ? (
                  <a className={styles.action} href={path.href}>
                    {path.ctaLabel}
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className={styles.disabledAction}>{path.ctaLabel}</span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.note}>
          <p className={styles.noteLabel}>2027 participation</p>
          <p>
            Application forms, deadlines, eligibility requirements and contact
            details will be added once confirmed by the QCF team.
          </p>
        </div>
      </div>
    </section>
  );
}
