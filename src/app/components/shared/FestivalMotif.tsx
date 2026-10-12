import styles from "./FestivalMotif.module.css";

export function FestivalMotif() {
  return (
    <div className={styles.motif} aria-label="Street, culture, people and place">
      <span>Street</span>
      <span>Culture</span>
      <span>People</span>
      <span>Place</span>
    </div>
  );
}
