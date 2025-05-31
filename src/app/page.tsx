import About from "@/_components/about";
import Differencials from "@/_components/differencials";
import Footer from "@/_components/footer";
import Header from "@/_components/header";
import Hero from "@/_components/hero";
import Maintenance from "@/_components/maintenance";
import Services from "@/_components/services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Differencials />
      <Services />
      <Maintenance />
      <About />
      <Footer />
    </>
  );
}
