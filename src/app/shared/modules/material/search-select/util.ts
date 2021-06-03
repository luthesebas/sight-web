export function trimToNull(value: string): string | null {
  return (value == null) ? null : value.trim();
}
