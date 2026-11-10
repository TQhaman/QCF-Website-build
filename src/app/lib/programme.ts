import type { ProgrammeDay, ProgrammeEntry } from "@/app/types/festival";

const programmeTime = /^(?:[01]\d|2[0-3]):[0-5]\d$/;

export function groupProgrammeEntries(
  days: readonly ProgrammeDay[],
  entries: readonly ProgrammeEntry[],
) {
  const groups = days.map((day, index) => ({
    day,
    id: `programme-day-${index + 1}`,
    entries: [] as ProgrammeEntry[],
  }));
  const byDay = new Map(groups.map((group) => [group.day.day, group]));
  const ids = new Set<string>();

  for (const entry of entries) {
    const group = byDay.get(entry.day);
    if (!group) {
      throw new Error(`Programme entry "${entry.id}" has an unsupported day: "${entry.day}".`);
    }
    if (!programmeTime.test(entry.startTime) ||
      (entry.endTime !== undefined && !programmeTime.test(entry.endTime))) {
      throw new Error(`Programme entry "${entry.id}" requires valid 24-hour HH:MM times.`);
    }
    if (!entry.id.trim() || ids.has(entry.id)) {
      throw new Error(`Programme entries require unique, non-empty IDs: "${entry.id}".`);
    }
    if (entry.ticketUrl && !isProgrammeTicketUrl(entry.ticketUrl)) {
      throw new Error(`Programme entry "${entry.id}" requires a valid ticket URL.`);
    }
    ids.add(entry.id);
    group.entries.push(entry);
  }

  return groups.filter((group) => group.entries.length > 0).map((group) => ({
    ...group,
    entries: group.entries.sort((a, b) => a.startTime.localeCompare(b.startTime)),
  }));
}

function isProgrammeTicketUrl(href: string) {
  if (/[\\\s]/.test(href)) return false;
  if (href.startsWith("/")) return !href.startsWith("//");
  if (!/^https?:\/\//i.test(href)) return false;
  return URL.canParse(href);
}
