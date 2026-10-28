import type { StaticImageData } from "next/image";
import logoCampoLindo from "@/img/Logos/LogoHomeCampoLindo.png";
import logoDonApiro from "@/img/Logos/LogoHomeDonApiro.png";
import logoSuperOmega from "@/img/Logos/LogoHomeSuperOmega.png";

export type Marca = {
  slug: string;
  nombre: string;
  tag: string;
  descripcion: string;
  color: "maize" | "poroto" | "lenteja";
  logo: StaticImageData;
};

export const marcas: Marca[] = [
  {
    slug: "campo-lindo",
    nombre: "Campo Lindo",
    tag: "Cada día en tu mesa",
    descripcion:
      "El mejor precio y calidad del mercado, pensado para estar en la mesa de todos los argentinos.",
    color: "maize",
    logo: logoCampoLindo,
  },
  {
    slug: "don-apiro",
    nombre: "Don Apiro",
    tag: "Tradición de familia",
    descripcion:
      "En honor al patriarca de la familia: un producto de excelencia y calidad única en el mercado.",
    color: "poroto",
    logo: logoDonApiro,
  },
  {
    slug: "super-omega",
    nombre: "Super Omega",
    tag: "Calidad de exportación",
    descripcion:
      "Especialidades donde se mixturan calidad y presentación para los mercados más exigentes del mundo.",
    color: "lenteja",
    logo: logoSuperOmega,
  },
];
