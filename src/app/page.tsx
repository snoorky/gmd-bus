import About from "@/_layout/about";
import Differencials from "@/_layout/differencials";
import Footer from "@/_layout/footer";
import Header from "@/_layout/header";
import Hero from "@/_layout/hero";
import Maintenance from "@/_layout/maintenance";
import Services from "@/_layout/services";

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
