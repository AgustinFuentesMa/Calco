export default function SiloSkyline() {
  return (
    <>
    <svg
      className="silo-skyline"
      viewBox="0 0 1200 140"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0,140 L0,90 L60,90 L60,70 L100,70 L100,90 L160,90 L160,40 A20,20 0 0 1 200,40 L200,90 L260,90 L260,55 A18,18 0 0 1 296,55 L296,90 L360,90 L360,30 A24,24 0 0 1 408,30 L408,90 L470,90 L470,60 L520,60 L520,90 L600,90 L600,20 A26,26 0 0 1 652,20 L652,90 L720,90 L720,50 L760,50 L760,90 L840,90 L840,35 A22,22 0 0 1 884,35 L884,90 L960,90 L960,65 L1010,65 L1010,90 L1080,90 L1080,45 A20,20 0 0 1 1120,45 L1120,90 L1200,90 L1200,140 Z"
        fill="var(--loam-2)"
        opacity="0.9"
      />
    </svg>
    <svg className="campo-tractor" viewBox="0 0 120 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
    </>
  );
}

