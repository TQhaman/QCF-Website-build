import { groupProgrammeEntries } from "@/app/lib/programme";
import { externalLinkAttributes } from "@/app/lib/links";
import type { ProgrammeDay, ProgrammeEntry } from "@/app/types/festival";
import styles from "./ProgrammePreview.module.css";

export function ProgrammeSchedule({ days, entries, siteUrl }: {
  days: readonly ProgrammeDay[];
  entries: readonly ProgrammeEntry[];
  siteUrl: string;
}) {
  const groups = groupProgrammeEntries(days, entries);

  return (
    <div className={styles.publishedSchedule}>
      {groups.length > 1 ? (
        <nav aria-label="Jump to a programme day">
          <ul className={styles.dayJumps}>
            {groups.map(({ day, id }) => (
              <li key={id}>
                <a href={`#${id}`}>{day.day} · {day.shortDate}</a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      {groups.map(({ day, id, entries }) => (
        <section key={id} className={styles.publishedDay} aria-labelledby={id}>
          <h3 id={id} tabIndex={-1}>{day.day} <span>{day.date}</span></h3>
          <ol className={styles.entryList}>
            {entries.map((entry) => {
              const external = entry.ticketUrl
                ? externalLinkAttributes(entry.ticketUrl, siteUrl)
                : undefined;

              return (
                <li key={entry.id} className={styles.entry}>
                  <p className={styles.entryTime}>
                    <time dateTime={entry.startTime}>{entry.startTime}</time>
                    {entry.endTime ? (
                      <> – <time dateTime={entry.endTime}>{entry.endTime}</time></>
                    ) : null}
                  </p>
                  <div className={styles.entryDetails}>
                    <h4>{entry.title}</h4>
                    <p className={styles.entryCategory}>{entry.category}</p>
                    {entry.venue?.trim() ? <p>{entry.venue}</p> : null}
                    {entry.description?.trim() ? <p>{entry.description}</p> : null}
                    {entry.ticketUrl ? (
                      <a
                        className={styles.entryLink}
                        href={entry.ticketUrl}
                        {...external}
                        aria-label={`Tickets for ${entry.title}${external ? " (opens in a new tab)" : ""}`}
                      >
                        Tickets {external ? <span aria-hidden="true">↗</span> : null}
                      </a>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}
