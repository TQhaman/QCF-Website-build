import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { BackToTop } from "@/app/components/shared/BackToTop";
import { archive2026 } from "@/app/data/archive2026";
import { festivalConfig } from "@/app/data/festival";
import { absoluteUrl } from "@/app/lib/site";
import type { ArchiveArtist, ArchiveMedia, ArchiveStory, ArchiveVendor } from "@/app/types/archive";
import styles from "./Archive.module.css";

const data = archive2026;
const title = `${data.seo.title} | ${festivalConfig.name}`;

export const metadata: Metadata = {
  title: data.seo.title,
  description: data.seo.description,
  alternates: { canonical: "/2026" },
  keywords: [festivalConfig.name, "TQCF 2026", "Quigney", "KuGompo City", "festival archive"],
  openGraph: {
    type: "website", locale: festivalConfig.locale.replace("-", "_"),
    siteName: festivalConfig.name, url: absoluteUrl("/2026"), title,
    description: data.seo.description,
    images: [{ url: absoluteUrl("/2026/opengraph-image"), width: 1200, height: 630, alt: data.seo.imageAlt }],
  },
  twitter: {
    card: "summary_large_image", title, description: data.seo.description,
    images: [absoluteUrl("/2026/opengraph-image")],
  },
};

function ArchiveFigure({ media, sizes, preload = false, className = "", artworkLink }: {
  media: ArchiveMedia; sizes: string; preload?: boolean; className?: string;
  artworkLink?: { label: string; href: string };
}) {
  const { image } = media;
  return (
    <figure className={`${styles.figure} ${className}`}>
      <Image
        className={styles.photo}
        data-monochrome={media.monochrome || undefined}
        src={image.src} alt={image.alt} width={image.width} height={image.height}
        sizes={sizes} preload={preload}
        style={{ objectPosition: image.objectPosition }}
      />
      <figcaption>
        {media.caption}
        {image.credit ? <span className={styles.credit}>{image.credit}</span> : null}
      </figcaption>
      {artworkLink ? (
        <a className={styles.artworkLink} href={artworkLink.href} target="_blank" rel="noopener noreferrer" aria-label={`${artworkLink.label} (opens in a new tab)`}>
          {artworkLink.label} <span aria-hidden="true">↗</span>
        </a>
      ) : null}
    </figure>
  );
}

function SectionHeading({ story }: { story: Pick<ArchiveStory, "id" | "eyebrow" | "title" | "copy"> }) {
  return (
    <header className={styles.sectionHeading}>
      <div>
        <p className={styles.eyebrow}>{story.eyebrow}</p>
        <h2 id={`${story.id}-title`}>{story.title}</h2>
      </div>
      <p className={styles.intro}>{story.copy}</p>
    </header>
  );
}

function ArtistRecord({ artist }: { artist: ArchiveArtist }) {
  const recordMedia = artist.poster ?? artist.image;
  return (
    <details className={styles.artistRecord}>
      <summary>
        <span>
          <span className={styles.recordMeta}>{data.announcements.recordLabel}</span>
          <span className={styles.artistName}>{artist.name}</span>
          {artist.roleOrGenre ? <span className={styles.recordRole}>{artist.roleOrGenre}</span> : null}
        </span>
        <span className={styles.expand} aria-hidden="true">+</span>
      </summary>
      <div className={styles.recordBody}>
        {recordMedia ? (
          <>
            <ArchiveFigure
              media={{ image: recordMedia, caption: artist.announcedDate ? `${data.announcements.announcedLabel} · ${artist.announcedDate}` : data.announcements.recordLabel }}
              sizes="(min-width: 64rem) 400px, (min-width: 48rem) calc((100vw - 5rem) / 2), (min-width: 28rem) 400px, calc(100vw - 1.5rem)"
            />
            {artist.poster ? <a className={styles.artworkLink} href={artist.poster.src} target="_blank" rel="noopener noreferrer" aria-label={`${data.announcements.artworkLabel}: ${artist.name} (opens in a new tab)`}>{data.announcements.artworkLabel} <span aria-hidden="true">↗</span></a> : null}
          </>
        ) : null}
        {artist.performanceDate ? <p>{artist.performanceDate}</p> : null}
        {artist.venue ? <p>{artist.venue}</p> : null}
        {artist.story ? <p>{artist.story}</p> : null}
        {artist.setHighlights?.length ? <div><h3>{data.announcements.setLabel}</h3><ul>{artist.setHighlights.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}
        {artist.house87Connection ? <div><h3>{data.announcements.connectionLabel}</h3><p>{artist.house87Connection}</p></div> : null}
        {artist.quote ? <blockquote><p>{artist.quote}</p>{artist.quoteAttribution ? <cite>{artist.quoteAttribution}</cite> : null}</blockquote> : null}
        {artist.gallery?.length ? <div className={styles.recordGallery}>{artist.gallery.map((media) => <ArchiveFigure key={media.image.src} media={media} sizes="(min-width: 48rem) 200px, 45vw" />)}</div> : null}
        {artist.videoUrl ? <a className={styles.artworkLink} href={artist.videoUrl} target="_blank" rel="noopener noreferrer">{data.announcements.videoLabel} <span aria-hidden="true">↗</span></a> : null}
        {artist.credit ? <p className={styles.credit}>{artist.credit}</p> : null}
      </div>
    </details>
  );
}

function VendorRecord({ vendor }: { vendor: ArchiveVendor }) {
  return (
    <article className={styles.vendorRecord}>
      {vendor.image ? <ArchiveFigure media={{ image: vendor.image, caption: vendor.name }} sizes="(min-width: 48rem) 400px, calc(100vw - 1.5rem)" /> : null}
      <h3>{vendor.name}</h3>
      {vendor.category ? <p className={styles.eyebrow}>{vendor.category}</p> : null}
      {vendor.whatTheyBrought ? <p>{vendor.whatTheyBrought}</p> : null}
      {vendor.story ? <p>{vendor.story}</p> : null}
      {vendor.quote ? <blockquote><p>{vendor.quote}</p>{vendor.quoteAttribution ? <cite>{vendor.quoteAttribution}</cite> : null}</blockquote> : null}
      {vendor.gallery?.length ? <div className={styles.recordGallery}>{vendor.gallery.map((media) => <ArchiveFigure key={media.image.src} media={media} sizes="(min-width: 48rem) 200px, 45vw" />)}</div> : null}
      {vendor.websiteOrSocial ? <a className={styles.artworkLink} href={vendor.websiteOrSocial} target="_blank" rel="noopener noreferrer">{vendor.name} <span aria-hidden="true">↗</span></a> : null}
      {vendor.credit ? <p className={styles.credit}>{vendor.credit}</p> : null}
    </article>
  );
}

export default function Archive2026Page() {
  const artistColumns = [data.announcements.artists.slice(0, 6), data.announcements.artists.slice(6)];
  // Evidence stays on the server. Only explicit public content enters the DOM.
  return (
    <>
      <a className="skipLink" href="#main-content">Skip to content</a>
      <Navbar navItems={data.globalNav} ticketUrl={festivalConfig.contact.ticketUrl} editionBar={data.editionBar} ticketLabel={data.ticketLabel} />
      <main id="main-content" className={styles.archive}>
        <section className={styles.hero} aria-labelledby="archive-title">
          <div className="shell">
            <p className={styles.eyebrow}>{data.hero.eyebrow}</p>
            <div className={styles.heroGrid}>
              <div>
                <h1 id="archive-title">{data.hero.title}</h1>
                <p className={styles.subtitle}>{data.hero.subtitle}</p>
                <div className={styles.heroFacts}>
                  <p>{data.dates}</p><p>{festivalConfig.event.location.primary}</p><p>{data.locality}</p>
                </div>
                <p className={styles.heroIntro}>{data.hero.intro}</p>
                <div className={styles.actions}>
                  <a className={styles.primaryAction} href={data.hero.archiveCta.href}>{data.hero.archiveCta.label} <span aria-hidden="true">↓</span></a>
                  <Link className={styles.textAction} href={data.hero.homeCta.href}>{data.hero.homeCta.label}</Link>
                </div>
              </div>
              <ArchiveFigure media={data.hero.media} sizes="(min-width: 89rem) 672px, (min-width: 64rem) calc((100vw - 5rem) / 2), (min-width: 48rem) calc(100vw - 3rem), calc(100vw - 1.5rem)" preload className={styles.heroVisual} />
            </div>
          </div>
        </section>

        <section className={styles.numbers} aria-labelledby="numbers-title">
          <div className="shell">
            <h2 className={styles.eyebrow} id="numbers-title">{data.numbers.label}</h2>
            <dl className={styles.factGrid}>
              {data.numbers.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
            </dl>
          </div>
        </section>

        <nav className={styles.subnav} aria-label={data.navLabel}>
          <div className="shell"><ul>{data.navItems.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}</ul></div>
        </nav>

        <section className={styles.section} id="highlights" aria-labelledby="highlights-title">
          <div className="shell">
            <SectionHeading story={{ id: "highlights", eyebrow: data.highlights.eyebrow, title: data.highlights.title, copy: data.highlights.intro }} />
            <div className={styles.highlights}>
              {data.highlights.items.map((highlight, index) => <article key={highlight.id}>
                <ArchiveFigure media={highlight.media} sizes={index === 0 ? "(min-width: 89rem) 784px, (min-width: 48rem) calc(58.33vw - 2.917rem), calc(100vw - 1.5rem)" : "(min-width: 89rem) 560px, (min-width: 48rem) calc(41.67vw - 2.083rem), calc(100vw - 1.5rem)"} />
                <div className={styles.highlightCopy}><h3>{highlight.title}</h3><p>{highlight.copy}</p></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.announcements}`} id="artists" aria-labelledby="artists-title">
          <div className="shell">
            <div className={styles.artistIntro}>
              <SectionHeading story={{ id: "artists", eyebrow: data.announcements.eyebrow, title: data.announcements.title, copy: data.announcements.intro }} />
              <ArchiveFigure media={data.announcements.media} sizes="(min-width: 29.5rem) 448px, calc(100vw - 1.5rem)" />
            </div>
            <div className={styles.artistColumns}>
              {artistColumns.map((column) => <div key={column[0].id}>{column.map((artist) => <ArtistRecord key={artist.id} artist={artist} />)}</div>)}
            </div>
          </div>
        </section>

        <section className={styles.section} id={data.fashion.id} aria-labelledby={`${data.fashion.id}-title`}>
          <div className="shell">
            <SectionHeading story={data.fashion} />
            <div className={styles.fashionGrid}>
              {data.fashion.media.map((media, index) => <ArchiveFigure
                key={media.image.src}
                media={media}
                sizes={index === 0 ? "(min-width: 19.5rem) 288px, calc(100vw - 1.5rem)" : "(min-width: 89rem) 1056px, (min-width: 48rem) calc(100vw - 23rem), calc(100vw - 1.5rem)"}
                artworkLink={media.image.src === data.fashionArtworkCta.href ? data.fashionArtworkCta : undefined}
              />)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.food}`} id={data.food.id} aria-labelledby={`${data.food.id}-title`}>
          <div className="shell">
            <SectionHeading story={data.food} />
            <div className={styles.foodGrid}>{data.food.media.map((media, index) => <ArchiveFigure key={media.image.src} media={media} sizes={index === 0 ? "(min-width: 89rem) 784px, (min-width: 48rem) calc(58.33vw - 2.917rem), calc(100vw - 1.5rem)" : "(min-width: 89rem) 560px, (min-width: 48rem) calc(41.67vw - 2.083rem), calc(100vw - 1.5rem)"} />)}</div>
            {data.vendors.length ? <div className={styles.vendorGrid}>{data.vendors.map((vendor) => <VendorRecord key={vendor.id} vendor={vendor} />)}</div> : null}
          </div>
        </section>

        <section className={styles.section} id={data.community.id} aria-labelledby={`${data.community.id}-title`}>
          <div className="shell">
            <SectionHeading story={data.community} />
            <div className={styles.communityGrid}>
              <ArchiveFigure media={data.community.media[0]} sizes="(min-width: 89rem) 1088px, (min-width: 48rem) calc(100vw - 21rem), calc(100vw - 1.5rem)" />
              <ArchiveFigure media={data.community.media[1]} sizes="(min-width: 48rem) 256px, 200px" />
            </div>
          </div>
        </section>

        <section className={styles.closing} aria-labelledby="archive-closing-title">
          <div className={`shell ${styles.closingContent}`}>
            <div>
              <h2 id="archive-closing-title">{data.closing.title}</h2>
              <p>{data.closing.copy}</p>
            </div>
            <div className={styles.actions}>
              <Link className={styles.primaryAction} href={data.closing.homeCta.href}>
                {data.closing.homeCta.label} <span aria-hidden="true">→</span>
              </Link>
              {festivalConfig.contact.ticketUrl ? (
                <a className={styles.textAction} href={festivalConfig.contact.ticketUrl} target="_blank" rel="noopener noreferrer" aria-label={`${data.ticketLabel} for TQCF (opens in a new tab)`}>
                  {data.ticketLabel} <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </div>
          </div>
        </section>
      </main>
      <Footer date={data.dates} location={data.location} editionYear={data.year} exploreItems={data.globalNav} ticketLabel={data.ticketLabel} />
      <BackToTop />
    </>
  );
}
