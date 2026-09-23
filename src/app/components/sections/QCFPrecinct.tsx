import { festivalConfig } from "@/app/data/festival";
import styles from "./QCFPrecinct.module.css";

export function QCFPrecinct() {
  const { precinct } = festivalConfig;

  return (
    <section
      className={styles.section}
      id="precinct"
      aria-labelledby="precinct-title"
    >
      <div className="shell">
        <header className={styles.header}>
          <p className={styles.eyebrow}>{precinct.eyebrow}</p>

          <div className={styles.headerGrid}>
            <h2 id="precinct-title">
              Discover the
              <br />
              TQCF Precinct.
            </h2>

            <div className={styles.intro}>
              <p>{precinct.intro}</p>

              <div className={styles.location}>
                <span>Festival precinct</span>
                <strong>{precinct.location.primary}</strong>
                <p>{precinct.location.secondary}</p>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.mapBlock}>
          <div className={styles.mapPlaceholder}>
            <div className={`${styles.street} ${styles.streetOne}`}>
              <span>CAXTON STREET</span>
            </div>

            <div className={`${styles.street} ${styles.streetTwo}`}>
              <span>BURNS STREET</span>
            </div>

            <div className={styles.mapCentre}>
              <span className={styles.mapLabel}>TQCF</span>
              <strong>
                FESTIVAL
                <br />
                PRECINCT
              </strong>
            </div>

            <div className={styles.mapNote}>
              <span>Precinct map</span>
              <p>
                The full precinct map is coming with the 2027 programme.
              </p>
            </div>
          </div>

          <aside className={styles.mapInfo}>
            <p className={styles.smallLabel}>Explore the precinct</p>
            <h3>Know where you&apos;re going before you arrive.</h3>
            <p>
              Move between stages, food, markets, art and visitor facilities
              across Caxton and Burns Streets. The full precinct map is coming
              with the 2027 programme.
            </p>

            <div className={styles.futureLayers}>
              <span>Stages</span>
              <span>Food</span>
              <span>Markets</span>
              <span>Art</span>
              <span>Facilities</span>
            </div>
          </aside>
        </div>

        <div className={styles.features}>
          {precinct.features.map((feature) => (
            <article className={styles.feature} key={feature.number}>
              <div className={styles.featureTop}>
                <span>{feature.number}</span>
                <span>{feature.label}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>

        <div className={styles.mediaCallout}>
          <div>
            <p className={styles.smallLabel}>TQCF in the streets</p>
            <h3>
              See the precinct
              <br />
              come alive.
            </h3>
          </div>

          <p>
            From performances and food to markets and gathering spaces, TQCF
            makes the streets part of the festival.
          </p>
        </div>
      </div>
    </section>
  );
}
