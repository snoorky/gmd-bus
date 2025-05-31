import { Button } from "@/_components/button";

export default function Hero() {
  return (
    <main
      className="flex flex-col items-start justify-center space-y-4 md:space-y-6 bg-cover bg-no-repeat bg-center text-white"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <h1>É tudo sobre Ônibus</h1>
      <p className="w-80 md:w-96 text-white/75">
        Há mais de 15 anos conectando empresas ao micro-ônibus ideal, com
        agilidade, confiança e total transparência.
      </p>
      <Button
        label="Fale com um Especialista"
        url="https://api.whatsapp.com/send?phone=5515996183121&text=Oi!+Vi+o+site+da+GMD+e+quero+falar+com+um+atendente.+Pode+me+chamar?"
      />
    </main>
  );
}
