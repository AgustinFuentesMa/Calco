import type { CSSProperties } from "react";

const espigas = Array.from({ length: 36 }, (_, indice) => indice);
const gotas = Array.from({ length: 24 }, (_, indice) => indice);

export default function SiloSkyline() {
  return (
    <div className="campo-escena" aria-hidden="true">
      <div className="campo-tierra" />
      <div className="campo-rastrojo" />
      {espigas.map((indice) => (
        <svg key={indice} className="campo-espiga"
          style={{ left: `${1 + indice * 2.75}%`, "--crecimiento": `${0.8 + indice * 0.145}s`, "--cosecha": `${7.45 + indice * 0.165}s`, "--altura": `${70 + (indice % 4) * 7}px` } as CSSProperties}
          viewBox="0 0 48 90" preserveAspectRatio="xMidYMax meet" fill="none">
          <path d="M23 90C22 63 21 41 19 19M24 90C28 62 32 48 38 33M22 90C18 66 12 52 8 40" stroke="#8b9d50" strokeWidth="2" />
          <path d="M22 90C17 72 11 63 1 59c6 0 15 1 22 15C18 58 14 52 7 47c9 3 16 10 19 23C29 58 36 52 46 50 37 57 31 68 27 90Z" fill="#718d3f" />
          <path d="M21 90C16 77 10 73 3 71c8-1 15 2 20 11C28 69 35 65 46 65c-9 5-15 13-18 25Z" fill="#a6b85a" />
          <path d="M19 4C11 15 13 29 21 39 27 27 25 13 19 4Z" fill="#e9a82e" />
          <path d="M19 5c-2 12 0 23 2 34 M15 14l7 6m-7 2 8 6m-7 2 7 5" stroke="#f7cd68" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M7 27C3 36 6 47 13 53c3-10 1-19-6-26Z M40 19c-9 5-13 15-12 25 9-4 14-14 12-25Z" fill="#e8a631" />
          <path d="M7 28c1 10 3 17 6 25m-8-17 6 4m24-14-2 9m-2-3 6-3m-8 9 6-3" stroke="#f7cd68" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ))}
      <svg className="campo-nube" viewBox="0 0 125 120" fill="none">
        <path d="M30 55c-12 0-20-7-20-17 0-10 8-17 18-17 4 0 7 1 10 3C43 13 53 8 64 8c14 0 25 8 28 21 3-2 6-2 9-2 9 0 15 6 15 14s-7 14-17 14H30Z" fill="#f4eee0" />
        <path d="M27 49h73" stroke="#d9e5df" strokeWidth="3" strokeLinecap="round" opacity=".8" />
        <g fill="#badde2">
          {gotas.map((indice) => (
            <ellipse key={indice} className="campo-gota"
              cx={28 + (indice % 8) * 9} cy={59 + Math.floor(indice / 8) * 4}
              rx="1.4" ry="3"
              style={{ "--gota-demora": `${-(indice * 0.073)}s` } as CSSProperties} />
          ))}
        </g>
      </svg>
      <svg className="campo-tractor" viewBox="0 0 120 64" fill="none">
        <path d="M15 42V17h34l11 25H15Z" fill="#e2a83d" />
        <path d="M20 20h24l8 18H20V20Z" fill="#f4eee0" opacity=".9" />
        <path d="M10 42h94l-4-15H62l-5 15H10Z" fill="#e2a83d" />
        <path d="M88 27V13h5v14" stroke="#e2a83d" strokeWidth="4" strokeLinecap="round" />
        <path d="M7 45h105" stroke="#f4eee0" strokeWidth="3" strokeLinecap="round" />
        <circle cx="32" cy="47" r="14" fill="#49301e" stroke="#f4eee0" strokeWidth="3" />
        <circle cx="32" cy="47" r="5" fill="#e2a83d" />
        <circle cx="88" cy="49" r="10" fill="#49301e" stroke="#f4eee0" strokeWidth="3" />
        <circle cx="88" cy="49" r="3.5" fill="#e2a83d" />
      </svg>
    </div>
  );
}

