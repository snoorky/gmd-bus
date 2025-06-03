import About from "@/_components/about";
import Footer from "@/_components/footer";
import Hero from "@/_components/hero";
import Maintenance from "@/_components/maintenance";
import Services from "@/_components/services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Maintenance />
      <About />
      <Footer />
    </>
  );
}
