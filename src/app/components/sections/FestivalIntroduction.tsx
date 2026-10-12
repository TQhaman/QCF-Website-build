import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { festivalConfig } from "@/app/data/festival";
import { FestivalMotif } from "@/app/components/shared/FestivalMotif";
import styles from "./Landing.module.css";

export function FestivalIntroduction() {
  const { storyIntro, landing } = festivalConfig;
  const image = landing.introImage;

  return (
    <section className={styles.introduction} id="festival" aria-labelledby="introduction-title">
      <div className="shell">
        <FestivalMotif />
        <div className={styles.introGrid}>
          <div className={styles.introCopy}>
            <p className={styles.eyebrow}>{storyIntro.eyebrow}</p>
            <h2 id="introduction-title">{storyIntro.title}</h2>
            <p>{storyIntro.copy}</p>
            <Link className={styles.action} href={landing.discoverCta.href as Route}>
              {landing.discoverCta.label} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <figure className={styles.introMedia}>
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height}
              sizes="(min-width: 86rem) 576px, (min-width: 48rem) 43vw, calc(100vw - 1.5rem)" />
            <figcaption>TQCF {image.year}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
