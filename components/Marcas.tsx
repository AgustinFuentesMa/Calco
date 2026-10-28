import Image from "next/image";
import { marcas } from "@/data/marcas";

export default function Marcas() {
  return (
    <section className="marcas" id="marcas">
      <div className="wrap">
        <div className="section-head">
          <span className="mono">Nuestras marcas</span>
          <h2>Tres sellos, un mismo compromiso con el grano.</h2>
        </div>

        <div className="seal-grid">
          {marcas.map((marca) => (
            <div
              key={marca.slug}
              className="seal-card"
              style={{ ["--seal-color" as string]: `var(--${marca.color})` }}
            >
              <div className="seal-logo-box">
                <Image
                  src={marca.logo}
                  alt={marca.nombre}
                  className="seal-logo"
                  priority={false}
                />
              </div>
              <h3>{marca.nombre}</h3>
              <span className="tag mono">{marca.tag}</span>
              <p>{marca.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
