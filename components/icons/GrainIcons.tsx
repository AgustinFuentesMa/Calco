import type { SVGProps } from "react";

/**
 * Set de íconos de línea propios de Calco: uno por tipo de grano.
 * Todos comparten el mismo estilo (stroke, sin relleno) para que se vean
 * como parte de un mismo sistema. Si más adelante quieren reemplazar
 * alguno por una foto real, solo hay que cambiar el componente que lo usa
 * (ver components/Productos.tsx) sin tocar el resto.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 1.4,
} as const;

export function ArrozIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(20 12 12)" />
    </svg>
  );
}

export function AvenaIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v18M8 7l4-2 4 2M8 12l4-2 4 2M8 17l4-2 4 2" />
    </svg>
  );
}

export function BurgolIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="8" cy="9" r="2" />
      <circle cx="15" cy="8" r="2" />
      <circle cx="11" cy="15" r="2" />
      <circle cx="17" cy="16" r="2" />
    </svg>
  );
}

export function GarbanzoIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4c4 0 6 4 6 8s-2 8-6 8-6-4-6-8 2-8 6-8Z" />
      <path d="M12 4c-1 2-1 4 0 6" />
    </svg>
  );
}

export function LentejaIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="12" rx="8" ry="5" />
      <path d="M4 12h16" />
    </svg>
  );
}

export function MaizIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2c3 4 4 9 4 13a4 4 0 0 1-8 0c0-4 1-9 4-13Z" />
      <path d="M9 8h6M8.5 11h7M8.5 14h7" />
    </svg>
  );
}

export function PizingalloIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 16c-2-2-2-5 0-7 1-2 3-1 4 0 1-1 3-2 4 0 2 2 2 5 0 7-2 2-6 2-8 0Z" />
    </svg>
  );
}

export function PolentaIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="10" width="14" height="9" rx="1" />
      <path d="M5 10l7-6 7 6" />
    </svg>
  );
}

export function PorotoIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c3 3 5 6 5 9a5 5 0 0 1-10 0c0-3 2-6 5-9Z" />
    </svg>
  );
}

export function SojaIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="10" r="3" />
      <circle cx="15" cy="14" r="3" />
    </svg>
  );
}

export function TrigoIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2v20M12 5l-3 2M12 5l3 2M12 9l-3 2M12 9l3 2M12 13l-3 2M12 13l3 2" />
    </svg>
  );
}

export const GRAIN_ICONS: Record<string, (props: IconProps) => JSX.Element> = {
  arroz: ArrozIcon,
  avena: AvenaIcon,
  burgol: BurgolIcon,
  garbanzo: GarbanzoIcon,
  lenteja: LentejaIcon,
  maiz: MaizIcon,
  pizingallo: PizingalloIcon,
  polenta: PolentaIcon,
  poroto: PorotoIcon,
  soja: SojaIcon,
  trigo: TrigoIcon,
};
