"use client";

import { useEffect, useState } from "react";
import logo from "../img/Logos/LogoPie1.png";

const LINKS = [
  { href: "#inicio", label: "Home" },
  { href: "#marcas", label: "Marcas" },
  { href: "#productos", label: "Productos" },
  { href: "#quienes", label: "Quiénes somos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <nav className="wrap">
        <div className="logo">
          <img className="logo-fracoga" src={logo.src} alt="Logo" />
        </div>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <button className="nav-toggle" aria-label="Menú">
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
