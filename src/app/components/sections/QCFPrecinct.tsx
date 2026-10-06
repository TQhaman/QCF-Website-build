import Image from "next/image";
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
            <h2 id="precinct-title">{precinct.title}</h2>

            <div className={styles.intro}>
              <p>{precinct.intro}</p>

              <div className={styles.location}>
                <span>Festival streets</span>
                <strong>{precinct.location.primary}</strong>
                <p>{precinct.location.secondary}</p>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.mapBlock}>
          <figure className={styles.mapFigure}>
            <Image
              className={styles.mapImage}
              src={precinct.mapImage.src}
              alt={precinct.mapImage.alt}
              width={precinct.mapImage.width}
              height={precinct.mapImage.height}
              sizes="(min-width: 64rem) 608px, (min-width: 48rem) calc(100vw - 370px), (min-width: 40rem) 608px, calc(100vw - 26px)"
            />
            <figcaption className={styles.mapCaption}>
              <p>{precinct.mapCaption}</p>
              <a
                className={styles.mapLink}
                href={precinct.mapImage.src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${precinct.mapFullSizeLabel} (opens in a new tab)`}
              >
                {precinct.mapFullSizeLabel}
                <span aria-hidden="true">↗</span>
              </a>
            </figcaption>
          </figure>

          <aside className={styles.mapInfo}>
            <p className={styles.smallLabel}>Festival map</p>
            <h3>{precinct.mapTitle}</h3>
            <p>
              Move between stages, food, markets, art and visitor facilities
              across Caxton and Burns Streets. The full festival map is coming
              with the 2027 programme.
            </p>

            <div className={styles.futureLayers}>
              <span>Stages</span>
              <span>Food</span>
              <span>Markets</span>
              <span>Art</span>
              <span>Facilities</span>
            </div>

            <a className={styles.visitLink} href={precinct.visitCta.href}>
              {precinct.visitCta.label}
              <span aria-hidden="true">↓</span>
            </a>
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

      </div>
    </section>
  );
}
