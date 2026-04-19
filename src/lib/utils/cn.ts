/**
 * classNames helper — concatena classi condizionalmente senza dipendenze.
 * Più leggero di `clsx` per il nostro uso.
 */
export function cn(...args: Array<string | false | null | undefined>): string {
  return args.filter(Boolean).join(" ");
}
