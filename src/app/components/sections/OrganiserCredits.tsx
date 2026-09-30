import { festivalConfig } from "@/app/data/festival";
import styles from "./OrganiserCredits.module.css";

export function OrganiserCredits() {
  return (
    <section className={styles.section} aria-label="Festival organisers">
      <div className="shell">
        <div className={styles.grid}>
          {festivalConfig.organiserCredits.map((credit) => (
            <article className={styles.credit} key={credit.heading}>
              <div className={styles.headingGroup}>
                <h2>{credit.heading}</h2>
                <p className={styles.role}>{credit.role}</p>
              </div>
              <p className={styles.copy}>{credit.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
