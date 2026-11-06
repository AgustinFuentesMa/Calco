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
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuAbierto) return;
    const cerrarConEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuAbierto(false);
    };
    window.addEventListener("keydown", cerrarConEscape);
    return () => window.removeEventListener("keydown", cerrarConEscape);
  }, [menuAbierto]);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}${menuAbierto ? " menu-open" : ""}`}>
      <nav className="wrap" aria-label="Navegación principal">
        <div className="logo">
          <img className="logo-fracoga" src={logo.src} alt="Logo" />
        </div>
        <div id="menu-principal" className={`nav-links${menuAbierto ? " open" : ""}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuAbierto(false)}>
              {l.label}
            </a>
          ))}
        </div>
        <button type="button" className="nav-toggle" aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-controls="menu-principal" aria-expanded={menuAbierto} onClick={() => setMenuAbierto((abierto) => !abierto)}>
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}

