import { Button } from "@/_components/button";

export default function Hero() {
  return (
    <main
      className="flex flex-col items-baseline justify-center text-white bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <h1>É tudo sobre Ônibus</h1>
      <p className="mt-2 mb-6 w-52 md:w-60 lg:w-80">
        Especialistas no comércio de ônibus, conectando empresas ao veículo
        ideal com agilidade e confiança há mais de 15 anos.
      </p>
      <Button label="Entre em Contato" href="" />
    </main>
  );
}
