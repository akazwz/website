import type { Locale } from "./locale.ts";

// Dates are spelled out here rather than through Intl, so the build (Node) and the browser
// write exactly the same text: a difference would break hydration.

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parts(iso: string) {
  const [year = "", month = "1", day = "1"] = iso.split("-");
  return { year, month: Number(month), day: Number(day) };
}

// "Apr 20, 2026" / "2026年4月20日".
export function formatDate(locale: Locale, iso: string) {
  const { year, month, day } = parts(iso);
  return locale === "zh" ? `${year}年${month}月${day}日` : `${months[month - 1]} ${day}, ${year}`;
}

// The same date without its year, for a list already grouped by year: "Apr 20" / "4月20日".
export function formatDay(locale: Locale, iso: string) {
  const { month, day } = parts(iso);
  return locale === "zh" ? `${month}月${day}日` : `${months[month - 1]} ${day}`;
}
