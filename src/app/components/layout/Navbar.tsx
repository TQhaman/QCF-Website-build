"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { festivalConfig } from "@/app/data/festival";
import type { LinkItem } from "@/app/types/festival";
import styles from "./Navbar.module.css";

type NavbarProps = {
  navItems: LinkItem[];
  cta: LinkItem;
  ticketUrl: string | null;
};

export function Navbar({ navItems, cta, ticketUrl }: NavbarProps) {
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
          <Link
            className={styles.brand}
            href="/"
            aria-label="Quigney Culture Festival home"
            onClick={closeMenu}
          >
            <Image
              className={styles.brandLogo}
              src={festivalConfig.media.logoGreen.src}
              alt={festivalConfig.media.logoGreen.alt}
              width={festivalConfig.media.logoGreen.width}
              height={festivalConfig.media.logoGreen.height}
              sizes="72px"
            />
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

            <a
              className={styles.cta}
              href={ticketUrl ?? cta.href}
              onClick={closeMenu}
              target={ticketUrl ? "_blank" : undefined}
              rel={ticketUrl ? "noopener noreferrer" : undefined}
              aria-label={ticketUrl ? "Get QCF tickets (opens in a new tab)" : undefined}
            >
              {ticketUrl ? "Get tickets" : cta.label}
              {ticketUrl ? <span aria-hidden="true">↗</span> : null}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
