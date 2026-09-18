import { festivalConfig } from "@/app/data/festival";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="shell">
        <div className={styles.top}>
          <div>
            <p className={styles.kicker}>Quigney Culture Festival</p>
            <p className={styles.statement}>Culture in the street. Place in the story.</p>
          </div>
          <p className={styles.edition}>{festivalConfig.dates}<br />{festivalConfig.location}</p>
        </div>

        <div className={styles.links}>
          {festivalConfig.navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </div>

        <div className={styles.bottom}>
          <p>QCF {festivalConfig.editionYear} · Quigney, East London</p>
          <p>Contact, social and ticketing links will be added once confirmed by the festival team.</p>
        </div>
      </div>
    </footer>
  );
}
