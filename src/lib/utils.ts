/** Joins class names, skipping empty values (shadcn-style helper, without Tailwind merging). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
