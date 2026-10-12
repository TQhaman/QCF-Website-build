import Link from "next/link";
import type { Route } from "next";
import { festivalConfig } from "@/app/data/festival";
import styles from "./Landing.module.css";

export function PlanYourFestival() {
  return (
    <section className={styles.plan} aria-labelledby="plan-festival-title">
      <div className="shell">
        <h2 id="plan-festival-title">{festivalConfig.landing.planTitle}</h2>
        <div className={styles.planGrid}>
          {festivalConfig.landing.planItems.map((item) => (
            <article id={item.id} key={item.id}>
              <Link className={styles.planLink} href={item.href as Route}>
                <div>
                  <h3 id={"headingId" in item ? item.headingId : undefined}>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
