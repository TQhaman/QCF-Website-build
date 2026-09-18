"use client";

import Link from "next/link";
import { useState } from "react";
import type { LinkItem } from "@/app/types/festival";
import styles from "./Navbar.module.css";

type NavbarProps = {
  navItems: LinkItem[];
  cta: LinkItem;
};

export function Navbar({ navItems, cta }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className={styles.wrap}>
      <div className={styles.editionBar}>
        <div className="shell">
          <p>
            <strong>QCF 2027</strong>
            <span>26–27 FEB</span>
            <span>QUIGNEY · EAST LONDON</span>
          </p>
        </div>
      </div>

      <div className="shell">
        <div className={styles.bar}>
          <Link className={styles.brand} href="/" onClick={closeMenu}>
            <span className={styles.brandMark} aria-hidden="true">Q</span>
            <span className={styles.brandText}>
              <strong>QUIGNEY</strong>
              <span>CULTURE FESTIVAL</span>
            </span>
          </Link>

          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className={styles.menuLabel}>MENU</span>
            <span className={styles.menuIcon} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>

          <div className={styles.panel} data-open={isOpen} id="primary-navigation">
            <nav className={styles.nav} aria-label="Primary">
              {navItems.map((item) => (
                <a key={item.href} className={styles.link} href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
            </nav>

            <a className={styles.cta} href={cta.href} onClick={closeMenu}>
              {cta.label}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
