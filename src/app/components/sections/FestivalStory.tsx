import Image from "next/image";
import { festivalConfig } from "@/app/data/festival";
import styles from "./FestivalStory.module.css";

export function FestivalStory() {
  return (
    <section
      className={styles.section}
      id="festival"
      aria-labelledby="festival-story-title"
    >
      <div className="shell">
        <header className={styles.header}>
          <p className={styles.eyebrow}>TQCF / More than a stage</p>

          <h2 id="festival-story-title">A festival shaped by Quigney.</h2>

          <p>
            At TQCF, the streets, the people and every form of creative
            expression are part of the festival.
          </p>
        </header>

        <div className={styles.timeline}>
          {festivalConfig.storyBeats.map((beat, index) => (
            <article
              className={styles.beat}
              key={beat.kicker}
              data-reverse={index % 2 === 1}
            >
              <div
                className={styles.media}
                data-tone={beat.tone}
                data-has-image={Boolean(beat.image)}
                data-orientation={beat.image?.orientation}
              >
                {beat.image ? (
                  <Image
                    className={styles.image}
                    src={beat.image.src}
                    alt={beat.image.alt}
                    fill
                    sizes="(min-width: 58rem) 55vw, calc(100vw - 1.5rem)"
                    style={{ objectPosition: beat.image.objectPosition }}
                  />
                ) : null}
                <span className={styles.mediaIndex}>0{index + 1}</span>
                <span className={styles.mediaLabel}>{beat.mediaLabel}</span>
              </div>

              <div className={styles.copy}>
                <p className={styles.kicker}>{beat.kicker}</p>
                <h3>{beat.title}</h3>
                <p>{beat.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
