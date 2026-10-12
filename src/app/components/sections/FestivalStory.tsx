import Image from "next/image";
import { festivalConfig } from "@/app/data/festival";
import styles from "./FestivalStory.module.css";

export function FestivalStory({ showIntro = true }: { showIntro?: boolean }) {
  const Heading = showIntro ? "h3" : "h2";
  return (
    <section
      className={styles.section}
      id="festival"
      aria-labelledby="festival-story-title"
    >
      <div className="shell">
        {showIntro ? (
          <header className={styles.header}>
            <p className={styles.eyebrow}>{festivalConfig.storyIntro.eyebrow}</p>
            <h2 id="festival-story-title">{festivalConfig.storyIntro.title}</h2>
            <p>{festivalConfig.storyIntro.copy}</p>
          </header>
        ) : (
          <p id="festival-story-title" className="srOnly">Street, culture, people and place</p>
        )}

        <div className={styles.timeline}>
          {festivalConfig.storyBeats.map((beat, index) => (
            <article
              className={styles.beat}
              key={beat.kicker}
              data-reverse={index % 2 === 1}
            >
              <figure
                className={styles.media}
                data-tone={beat.tone}
                data-has-image={Boolean(beat.image)}
                data-orientation={beat.image?.orientation}
                style={
                  beat.image?.orientation === "portrait"
                    ? { aspectRatio: `${beat.image.width} / ${beat.image.height}` }
                    : undefined
                }
              >
                {beat.image ? (
                  <Image
                    className={styles.image}
                    src={beat.image.src}
                    alt={beat.image.alt}
                    fill
                    sizes={
                      beat.image.orientation === "portrait"
                        ? "(min-width: 58rem) 18.68rem, (min-width: 23.5rem) 22rem, calc(100vw - 1.5rem)"
                        : "(min-width: 58rem) 55vw, calc(100vw - 1.5rem)"
                    }
                    style={{ objectPosition: beat.image.objectPosition }}
                  />
                ) : null}
                <figcaption className={styles.mediaLabel}>
                  {beat.mediaLabel}
                </figcaption>
              </figure>

              <div className={styles.copy}>
                <p className={styles.kicker}>{beat.kicker}</p>
                <Heading>{beat.title}</Heading>
                <p>{beat.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
