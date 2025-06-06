import Image from "next/image";
import { Button } from "./button";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 xl:gap-32">
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:w-[65%] xl:w-[45%]">
        <div>
          <h4 className="text-red">Bem-vindo à GMD Bus</h4>
          <h2>Mais de 15 anos de experiência no comércio de ônibus</h2>
        </div>
        <div className="space-y-2">
          <p>
            Com mais de 15 anos de estrada, a GMD | Bus é referência nacional no comércio de
            micro-ônibus multimarcas, construímos uma reputação sólida baseada na confiança e no
            atendimento personalizado.
          </p>
          <p>
            Nosso objetivo é facilitar sua negociação oferecendo as melhores condições e um suporte
            completo para que sua empresa realize um exelente negócio.
          </p>
        </div>
        <Button
          url="https://api.whatsapp.com/send?phone=5515981377486&text=Olá!+Gostaria+de+falar+com+um+especialista+da+GMD+Bus"
          label="Solicite uma Consultoria Gratuita"
          isPrimary
        />
      </div>
      <div className="relative flex w-full md:w-[50%] h-80 md:h-96 xl:h-[30rem]">
        <div className="absolute border-8 border-white -top-2 -right-2 overflow-hidden rounded-2xl w-[98%] h-[98%]">
          <Image
            src="/about-background.png"
            className="absolute object-cover"
            alt="Imagem de background"
            fill
          />
        </div>
        <div className="absolute border-8 border-white -bottom-2 -left-2 overflow-hidden rounded-2xl w-[60%] h-[40%]">
          <Image
            src="/about-background-secondary.jpg"
            className="absolute object-cover"
            alt="Imagem de background"
            fill
          />
        </div>
        <div className="w-1/2 h-full rounded-2xl bg-red"></div>
        <div className="w-1/2 h-full rounded-2xl bg-blue"></div>
      </div>
    </section>
  );
}
