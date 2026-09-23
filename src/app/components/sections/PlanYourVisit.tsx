import { festivalConfig } from "@/app/data/festival";
import styles from "./PlanYourVisit.module.css";

export function PlanYourVisit() {
  const { contact, visit } = festivalConfig;

  return (
    <section
      className={styles.section}
      id="visit"
      aria-labelledby="visit-title"
    >
      <div className="shell">
        <header className={styles.header}>
          <p className={styles.eyebrow}>{visit.eyebrow}</p>

          <div className={styles.headerGrid}>
            <h2 id="visit-title">{visit.title}</h2>
            <p>{visit.intro}</p>
          </div>
        </header>

        <div className={styles.content}>
          <dl className={styles.facts}>
            {visit.facts.map((fact) => (
              <div className={styles.fact} key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <aside className={styles.ticketPanel} aria-label="Ticket information">
            <p className={styles.ticketLabel}>Tickets</p>

            {contact.ticketUrl ? (
              <a
                className={styles.ticketAction}
                href={contact.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get TQCF tickets (opens in a new tab)"
              >
                {visit.ticketLabel}
                <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <p className={styles.ticketPending}>{visit.ticketPending}</p>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
