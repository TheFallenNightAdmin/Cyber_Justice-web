import { Link, useLocation } from "wouter";
import { type ReactNode } from "react";
import { SITE_CONFIG } from "../data/config";

export function Nav() {
  const [location] = useLocation();

  const links = [
    { name: "HOME",  path: "/"      },
    { name: "CASES", path: "/cases" },
    { name: "TOOLS", path: "/tools" },
  ];

  return (
    <nav className="nav">
      <Link href="/" className="nav-brand">
        CYBER_JUSTICE
      </Link>
      <div className="nav-links">
        {links.map((link) => (
          <Link
            key={link.path + link.name}
            href={link.path}
            className={`nav-link ${location === link.path ? "active" : ""}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        UNIT: {SITE_CONFIG.unit}&nbsp;&nbsp;/&nbsp;&nbsp;EST. {SITE_CONFIG.established}&nbsp;&nbsp;/&nbsp;&nbsp;COMMUNITY OPERATED INTELLIGENCE
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout-wrapper">
      <Nav />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}
