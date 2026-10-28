import type { StaticImageData } from "next/image";

// Campo Lindo
import cl_arroz from "@/img/Productos/CampoLindo/prod_campolindo_Arroz.jpg";
import cl_avena from "@/img/Productos/CampoLindo/prod_campolindo_Avena.jpg";
import cl_burgol from "@/img/Productos/CampoLindo/prod_campolindo_Burgol.jpg";
import cl_garbanzo from "@/img/Productos/CampoLindo/prod_campolindo_Garbanzo.jpg";
import cl_lenteja from "@/img/Productos/CampoLindo/prod_campolindo_Lenteja.jpg";
import cl_maizAmarillo from "@/img/Productos/CampoLindo/prod_campolindo_MaizAmarillo.jpg";
import cl_maizBlanco from "@/img/Productos/CampoLindo/prod_campolindo_MaizBlanco.jpg";
import cl_maizPizingallo from "@/img/Productos/CampoLindo/prod_campolindo_MaizPizingallo.jpg";
import cl_polenta from "@/img/Productos/CampoLindo/prod_campolindo_Polenta.jpg";
import cl_porotoAlubia from "@/img/Productos/CampoLindo/prod_campolindo_PorotoAlubia.jpg";
import cl_porotoColorado from "@/img/Productos/CampoLindo/prod_campolindo_PorotoColorado.jpg";
import cl_porotoNegro from "@/img/Productos/CampoLindo/prod_campolindo_PorotoNegro.jpg";
import cl_porotoPallares from "@/img/Productos/CampoLindo/prod_campolindo_PorotoPallares.jpg";
import cl_soja from "@/img/Productos/CampoLindo/prod_campolindo_Soja.jpg";
import cl_trigo from "@/img/Productos/CampoLindo/prod_campolindo_Trigo.jpg";

// Don Apiro
import da_arroz from "@/img/Productos/DonApiro/prod_donapiro_Arroz.jpg";
import da_avena from "@/img/Productos/DonApiro/prod_donapiro_Avena.jpg";
import da_burgol from "@/img/Productos/DonApiro/prod_donapiro_Burgol.jpg";
import da_garbanzo from "@/img/Productos/DonApiro/prod_donapiro_Garbanzo.jpg";
import da_lenteja from "@/img/Productos/DonApiro/prod_donapiro_Lenteja.jpg";
import da_maizAmarillo from "@/img/Productos/DonApiro/prod_donapiro_MaizAmarillo.jpg";
import da_maizBlanco from "@/img/Productos/DonApiro/prod_donapiro_MaizBlanco.jpg";
import da_maizPizingallo from "@/img/Productos/DonApiro/prod_donapiro_MaizPizingallo.jpg";
import da_polenta from "@/img/Productos/DonApiro/prod_donapiro_Polenta.jpg";
import da_porotoAlubia from "@/img/Productos/DonApiro/prod_donapiro_PorotoAlubia.jpg";
import da_porotoColorado from "@/img/Productos/DonApiro/prod_donapiro_PorotoColorado.jpg";
import da_porotoNegro from "@/img/Productos/DonApiro/prod_donapiro_PorotoNegro.jpg";
import da_porotoPallares from "@/img/Productos/DonApiro/prod_donapiro_PorotoPallares.jpg";
import da_soja from "@/img/Productos/DonApiro/prod_donapiro_Soja.jpg";
import da_trigo from "@/img/Productos/DonApiro/prod_donapiro_TrigoCandealPelado.jpg";

export type MarcaSlug = "campo-lindo" | "don-apiro";

export type Producto = {
  slug: string;
  nombre: string;
  imagenes: Record<MarcaSlug, StaticImageData>;
};

export const productos: Producto[] = [
  { slug: "arroz", nombre: "Arroz", imagenes: { "campo-lindo": cl_arroz, "don-apiro": da_arroz } },
  { slug: "avena", nombre: "Avena", imagenes: { "campo-lindo": cl_avena, "don-apiro": da_avena } },
  { slug: "burgol", nombre: "Burgol", imagenes: { "campo-lindo": cl_burgol, "don-apiro": da_burgol } },
  { slug: "garbanzo", nombre: "Garbanzo", imagenes: { "campo-lindo": cl_garbanzo, "don-apiro": da_garbanzo } },
  { slug: "lenteja", nombre: "Lenteja", imagenes: { "campo-lindo": cl_lenteja, "don-apiro": da_lenteja } },
  { slug: "maiz-amarillo", nombre: "Maíz Amarillo", imagenes: { "campo-lindo": cl_maizAmarillo, "don-apiro": da_maizAmarillo } },
  { slug: "maiz-blanco", nombre: "Maíz Blanco", imagenes: { "campo-lindo": cl_maizBlanco, "don-apiro": da_maizBlanco } },
  { slug: "maiz-pizingallo", nombre: "Maíz Pizingallo", imagenes: { "campo-lindo": cl_maizPizingallo, "don-apiro": da_maizPizingallo } },
  { slug: "polenta", nombre: "Polenta", imagenes: { "campo-lindo": cl_polenta, "don-apiro": da_polenta } },
  { slug: "poroto-alubia", nombre: "Poroto Alubia", imagenes: { "campo-lindo": cl_porotoAlubia, "don-apiro": da_porotoAlubia } },
  { slug: "poroto-colorado", nombre: "Poroto Colorado", imagenes: { "campo-lindo": cl_porotoColorado, "don-apiro": da_porotoColorado } },
  { slug: "poroto-negro", nombre: "Poroto Negro", imagenes: { "campo-lindo": cl_porotoNegro, "don-apiro": da_porotoNegro } },
  { slug: "poroto-pallares", nombre: "Poroto Pallares", imagenes: { "campo-lindo": cl_porotoPallares, "don-apiro": da_porotoPallares } },
  { slug: "soja", nombre: "Soja", imagenes: { "campo-lindo": cl_soja, "don-apiro": da_soja } },
  { slug: "trigo", nombre: "Trigo", imagenes: { "campo-lindo": cl_trigo, "don-apiro": da_trigo } },
];