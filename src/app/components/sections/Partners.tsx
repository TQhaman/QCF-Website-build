import Image from "next/image";
import { festivalConfig } from "@/app/data/festival";
import styles from "./Partners.module.css";

export function Partners() {
  const { partners } = festivalConfig;
  const hasPartners = partners.items.length > 0;

  return (
    <section
      className={styles.section}
      id="partners"
      aria-labelledby="partners-title"
    >
      <div className="shell">
        <header className={styles.header}>
          <p className={styles.eyebrow}>{partners.eyebrow}</p>

          <div className={styles.headerGrid}>
            <h2 id="partners-title">{partners.title}</h2>
            <p>{partners.intro}</p>
          </div>
        </header>

        {hasPartners ? (
          <ul className={styles.partnerGrid} aria-label="TQCF partners and supporters">
            {partners.items.map((partner) => {
              const content = (
                <>
                  {partner.category ? (
                    <span className={styles.category}>{partner.category}</span>
                  ) : null}

                  {partner.logo ? (
                    <Image
                      className={styles.logo}
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={280}
                      height={100}
                    />
                  ) : (
                    <strong className={styles.partnerName}>{partner.name}</strong>
                  )}
                </>
              );

              return (
                <li className={styles.partner} key={partner.name}>
                  {partner.href ? (
                    <a
                      className={styles.partnerContent}
                      href={partner.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {content}
                      <span className={styles.external} aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <div className={styles.partnerContent}>{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <div className={styles.emptyState}>
            <p className={styles.emptyLabel}>2027 partnerships</p>
            <p>{partners.emptyState}</p>

            <div className={styles.categoryBlock}>
              <p className={styles.categoryLabel}>Partnership areas</p>
              <div className={styles.categories}>
                {partners.futureCategories.map((category) => (
                  <span key={category}>{category}</span>
                ))}
              </div>
            </div>

            <span className={styles.emptyMark} aria-hidden="true">TQCF</span>
          </div>
        )}
      </div>
    </section>
  );
}
