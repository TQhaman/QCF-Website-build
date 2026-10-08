"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { festivalConfig } from "@/app/data/festival";
import type { LinkItem } from "@/app/types/festival";
import styles from "./Navbar.module.css";

type NavbarProps = {
  navItems: LinkItem[];
  ticketUrl: string | null;
  editionBar?: { name: string; dates: string; location: string; wrap?: boolean };
  ticketLabel?: string;
};

export function Navbar({
  navItems,
  ticketUrl,
  editionBar = {
    name: "TQCF 2027",
    dates: "26 – 27 FEB",
    location: "QUIGNEY · KUGOMPO CITY",
  },
  ticketLabel = "Get tickets",
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className={styles.wrap}>
      <div className={styles.editionBar} data-wrap={editionBar.wrap || undefined}>
        <div className="shell">
          <p>
            <strong>{editionBar.name}</strong>
            <span>{editionBar.dates}</span>
            <span>{editionBar.location}</span>
          </p>
        </div>
      </div>

      <div className="shell">
        <div className={styles.bar}>
          <Link
            className={styles.brand}
            href="/"
            aria-label="The Quigney Culture Festival home"
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
            ref={menuButtonRef}
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

            {ticketUrl ? (
              <a
                className={styles.cta}
                href={ticketUrl}
                onClick={closeMenu}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${ticketLabel} for TQCF (opens in a new tab)`}
              >
                {ticketLabel}
                <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
