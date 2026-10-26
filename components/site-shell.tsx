"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  ["Home", "/"], ["About", "/about"], ["Skills", "/skills"],
  ["Projects", "/projects"], ["Education", "/education"],
  ["Experience", "/experience"], ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("rp-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextDark = saved ? saved === "dark" : prefersDark;
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
    setDark(nextDark);
  }, []);

  function toggleTheme() {
    const nextDark = !dark;
    setDark(nextDark);
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
    window.localStorage.setItem("rp-theme", nextDark ? "dark" : "light");
  }

  return <header className="site-header">
    <Link className="brand" href="/" aria-label="Rohit Patil, home"><span className="brand-mark">R</span><span className="brand-name">ROHIT PATIL<small>DEVELOPER &amp; CREATOR</small></span></Link>
    <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}><span></span><span></span></button>
    <nav id="primary-navigation" className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
      {navigation.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setMenuOpen(false)}>{label}</Link>)}
    </nav>
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} title={dark ? "Switch to light theme" : "Switch to dark theme"}><span aria-hidden="true">{dark ? "☼" : "◐"}</span></button>
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><Link className="footer-brand" href="/">RP<span>.</span></Link><p>Thoughtful code. Meaningful experiences.</p><div className="footer-links"><Link href="/projects">Selected work</Link><Link href="/contact">Say hello <span aria-hidden="true">↗</span></Link></div><small>© {new Date().getFullYear()} Rohit Patil · Made with care in India</small></footer>;
}