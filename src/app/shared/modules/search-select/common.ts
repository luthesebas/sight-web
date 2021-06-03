export function trimToNull(value: string): string | null {
  if (value == null) {
    return null;
  }
  const trimmedValue = value.trim();
  return (trimmedValue === '') ? null : trimmedValue;
}
