import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Footer() {
  return (
    <>
      <footer className="footer" data-screen-label="Footer">
        <div className="foot-decor" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>

        <div className="footer-inner">
          <div className="foot-col">
            <h5>Shenzhen (HQ)</h5>
            <p>
              Guangdong Province
              <br />
              China
            </p>
          </div>
          <div className="foot-col">
            <h5>Hong Kong</h5>
            <p>Hong Kong SAR</p>
          </div>
          <div className="foot-col">
            <h5>Rome</h5>
            <p>Italy</p>
          </div>
          <div className="foot-col">
            <h5>Addis Ababa</h5>
            <p>Ethiopia</p>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <p>
              info@moveasttrading.com
              <br />
              +39 06 4200 1212
            </p>
          </div>

          <div className="foot-col menu">
            <h5>Services</h5>
            <Link href="/services/sourcing">Strategic Sourcing</Link>
            <Link href="/services/technology-transfer">Technology Transfer</Link>
            <Link href="/services/supply-chain">Supply Chain Management</Link>
          </div>
          <div className="foot-col menu">
            <h5>Sectors</h5>
            <Link href="/sectors/mobility">Mobility &amp; Transport</Link>
            <Link href="/sectors/renewable-energy">Renewable Energy</Link>
            <Link href="/sectors/medical-devices">Medical Devices</Link>
            <Link href="/sectors/industrial-machinery">Industrial Machinery</Link>
          </div>
          <div className="foot-col menu">
            <h5>Resources</h5>
            <Link href="/blog">Blog</Link>
            <Link href="/blog/ethiopia-djibouti-railway-china-africa-procurement">EDR case study</Link>
            <Link href="/blog/how-to-choose-china-sourcing-agent">China sourcing guide</Link>
          </div>
          <div className="foot-col menu">
            <h5>Company</h5>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>

        <div className="foot-awards">
          <div className="foot-award">
            ISO 9001<span className="sm">Certified 2025</span>
          </div>
          <div className="foot-award">
            China Sourcing<span className="sm">Partner 2025</span>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} MoveEast Trading</span>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <span className="spacer" />
          <div className="credits">
            <span>Design by MoveEast Studio</span>
            <span>Built in Shenzhen &amp; Rome</span>
          </div>
          <div className="foot-social">
            <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v2c.7-1.2 2-2.3 4-2.3 3 0 4 2 4 5V20h-4v-4.5c0-1.5-.5-2.5-2-2.5s-2 1-2 2.5V20h-4z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      <ThemeToggle />
    </>
  );
}
