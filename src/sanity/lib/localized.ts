import type { Locale } from "@/lib/i18n/dictionaries";
import type { LocalizedValue } from "@/sanity/lib/types";

export function getLocalizedValue(
  value: LocalizedValue | null | undefined,
  locale: Locale,
): string {
  return (
    value?.[locale]?.trim() ||
    value?.es?.trim() ||
    Object.values(value ?? {}).find((translation) => translation?.trim()) ||
    ""
  );
}