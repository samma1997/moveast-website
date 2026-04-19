/**
 * Inline script per impostare data-theme PRIMA del mount React,
 * evitando flash of wrong theme (FOUC).
 * Viene iniettato in <head> del layout pubblico.
 */

const THEME_SCRIPT = `
(function(){
  try {
    var stored = localStorage.getItem("moveeast-theme");
    var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = stored || (systemDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />;
}
