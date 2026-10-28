import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marcas from "@/components/Marcas";
import Productos from "@/components/Productos";
import QuienesSomos from "@/components/QuienesSomos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Marcas />
      <Productos />
      <QuienesSomos />
      <Footer />
    </>
  );
}
