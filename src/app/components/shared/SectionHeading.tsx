import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`${styles.root} ${align === "center" ? styles.center : ""}`.trim()}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
