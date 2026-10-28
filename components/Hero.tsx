import SiloSkyline from "./SiloSkyline";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <HeroCarousel />

      <svg className="grain-noise" width="100%" height="100%">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      <div className="wrap hero-inner">
        <span className="eyebrow mono">Tucumán · desde el campo</span>
        <h1>
          De la chacra a tu mesa,
          <br />
          sin intermediarios en el camino.
        </h1>
        <p className="lead">
          Somos la única empresa del país que produce el 100% de lo que envasa:
          arroz, avena, legumbres y maíz cultivados, elaborados y empaquetados en
          Tucumán.
        </p>
        <div className="cta-row">
          <a href="#productos" className="btn-primary">
            Ver productos →
          </a>
          <a href="#quienes" className="btn-ghost">
            Conocer la empresa
          </a>
        </div>
      </div>

      <SiloSkyline />
    </section>
  );
}