"use client";

import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/#projetos", id: "projetos", label: "Projetos", number: "01" },
  { href: "/#sobre", id: "sobre", label: "Sobre", number: "02" },
  { href: "/#contato", id: "contato", label: "Contato", number: "03" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const menuRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const themeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const current = document.documentElement.dataset.theme;
      if (current === "light" || current === "dark") setTheme(current);
    }, 0);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = [document.querySelector<HTMLElement>(".hero"), ...links.map((link) => document.getElementById(link.id))].filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(() => {
      const marker = window.innerHeight * 0.22;
      const current = sections.find((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= marker && bounds.bottom >= marker;
      });
      setActiveSection(current?.id || null);
    }, { rootMargin: "-21% 0px -77% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 701px)");
    const onDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener("change", onDesktop);
    const firstLink = menuRef.current?.querySelector("a");
    firstLink?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
      if (event.key === "Tab") {
        const first = themeButtonRef.current;
        const items = menuRef.current?.querySelectorAll("a");
        const last = items?.[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => { window.removeEventListener("keydown", onKeyDown); desktop.removeEventListener("change", onDesktop); document.body.style.overflow = previousOverflow; };
  }, [menuOpen]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="wordmark" onClick={() => setMenuOpen(false)} aria-label="Igor Mazeti, página inicial">igor<span>.mazeti</span><i aria-hidden="true" /></Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((link) => <Link key={link.href} href={link.href} aria-current={pathname === "/" && activeSection === link.id ? "location" : undefined}><small>{link.number}</small>{link.label}</Link>)}
        </nav>
        <div className="header-actions">
          <button ref={themeButtonRef} className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Ativar modo ${theme === "dark" ? "claro" : "escuro"}`} title={`Ativar modo ${theme === "dark" ? "claro" : "escuro"}`}>
            <span aria-hidden="true">{theme === "dark" ? "☼" : "☾"}</span>
          </button>
          <button ref={menuButtonRef} className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>
            <span aria-hidden="true">{menuOpen ? "×" : "☷"}</span>
          </button>
        </div>
      </div>
      <nav ref={menuRef} id="mobile-menu" className="mobile-menu" aria-label="Navegação mobile" hidden={!menuOpen}>
        {links.map((link) => <Link key={link.href} href={link.href} aria-current={pathname === "/" && activeSection === link.id ? "location" : undefined} onClick={() => setMenuOpen(false)}><small>{link.number}</small>{link.label}<span aria-hidden="true"><ArrowIcon /></span></Link>)}
      </nav>
    </header>
  );
}
