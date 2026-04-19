/**
 * Header server shell — renders the client interactive tree.
 * Il motivo della split: l'header ha stato client (mega menu, drawer, theme) ma il layout è uniforme.
 * Qui server renderiamo solo l'entry point; il client component fa il resto.
 */

import { HeaderInteractive } from "./HeaderInteractive";

export function Header() {
  return <HeaderInteractive />;
}
