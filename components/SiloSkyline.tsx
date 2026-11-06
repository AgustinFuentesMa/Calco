import type { CSSProperties } from "react";

const espigas = Array.from({ length: 12 }, (_, indice) => indice);

export default function SiloSkyline() {
  return (
    <div className="campo-escena" aria-hidden="true">
      <div className="campo-tierra" />
      {espigas.map((indice) => (
        <svg key={indice} className="campo-espiga"
          style={{ left: `${4 + indice * 8}%`, "--crecimiento": `${0.8 + indice * 0.43}s` } as CSSProperties}
          viewBox="0 0 30 80" fill="none">
          <path d="M15 79V17 M15 66C10 58 5 58 3 57 M15 54C20 47 25 47 28 46" stroke="#a6b86b" strokeWidth="3" strokeLinecap="round" />
          <g fill="#e2a83d">
            <ellipse cx="15" cy="13" rx="3.2" ry="8" />
            <ellipse cx="10" cy="22" rx="3.2" ry="7" transform="rotate(-35 10 22)" />
            <ellipse cx="20" cy="22" rx="3.2" ry="7" transform="rotate(35 20 22)" />
            <ellipse cx="10" cy="33" rx="3.2" ry="7" transform="rotate(-35 10 33)" />
            <ellipse cx="20" cy="33" rx="3.2" ry="7" transform="rotate(35 20 33)" />
            <ellipse cx="10" cy="44" rx="3.2" ry="7" transform="rotate(-35 10 44)" />
            <ellipse cx="20" cy="44" rx="3.2" ry="7" transform="rotate(35 20 44)" />
          </g>
        </svg>
      ))}
      <svg className="campo-regadera" viewBox="0 0 125 120" fill="none">
        <path d="M35 38c-5-20 4-28 19-28 13 0 20 9 19 25" stroke="#f4eee0" strokeWidth="5" strokeLinecap="round" />
        <path d="M22 37h54l-5 36c-1 6-5 9-11 9H39c-6 0-10-3-11-9l-6-36Z" fill="#e2a83d" />
        <path d="M75 51h13l14-15 6 5-16 21H74" fill="#e2a83d" />
        <path d="M100 31l13 10" stroke="#f4eee0" strokeWidth="5" strokeLinecap="round" />
        <g className="campo-gotas" fill="#badde2">
          <path d="M101 52c0 3-4 8-4 11a4 4 0 0 0 8 0c0-3-4-8-4-11Z" />
          <path d="M112 58c0 3-3 6-3 9a3 3 0 0 0 6 0c0-3-3-6-3-9Z" />
          <path d="M91 63c0 3-3 6-3 9a3 3 0 0 0 6 0c0-3-3-6-3-9Z" />
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

