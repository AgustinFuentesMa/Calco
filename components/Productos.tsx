"use client";

import { useState } from "react";
import Image from "next/image";
import { productos, type MarcaSlug } from "@/data/productos";

const TABS: { slug: MarcaSlug; label: string; color: "maize" | "poroto" }[] = [
  { slug: "campo-lindo", label: "Campo Lindo", color: "maize" },
  { slug: "don-apiro", label: "Don Apiro", color: "poroto" },
];

export default function Productos() {
  const [activa, setActiva] = useState<MarcaSlug>("campo-lindo");
  const tabActiva = TABS.find((t) => t.slug === activa)!;

  return (
    <section className="productos" id="productos">
      <div className="wrap">
        <div className="section-head on-light">
          <span className="mono">Catálogo</span>
          <h2>Nuestros productos, marca por marca.</h2>
          <p>
            Los mismos quince granos, con el estándar de cada línea. Elegí una
            marca para ver su catálogo completo.
          </p>
        </div>

        <div className="marca-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.slug}
              className={`marca-tab${activa === tab.slug ? " active" : ""}`}
              style={{ ["--tab-color" as string]: `var(--${tab.color})` }}
              onClick={() => setActiva(tab.slug)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="prod-photo-grid">
          {productos.map((producto) => (
            <div className="prod-photo-card" key={producto.slug}>
              <div className="prod-photo-img">
                <Image
                  src={producto.imagenes[activa]}
                  alt={`${producto.nombre} — ${tabActiva.label}`}
                  fill
                  sizes="(max-width: 900px) 50vw, 20vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}