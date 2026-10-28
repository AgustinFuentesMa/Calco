import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marcas from "@/components/Marcas";
import Productos from "@/components/Productos";
import QuienesSomos from "@/components/QuienesSomos";
import Footer from "@/components/Footer";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Marcas />
      <Productos />
      <QuienesSomos />
      <Contacto />
      <Footer />
    </>
  );
}

