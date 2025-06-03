import { Button } from "@/_components/button";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="relative w-screen h-auto pt-6 text-white">
      <Image
        src="/hero.png"
        className="absolute object-cover object-center"
        alt="Imagem de background"
        fill
        priority
      />
      <div className="absolute w-screen h-full bg-blue/50 inset-0"></div>
      <div className="relative flex flex-col items-center text-center">
        <div className="relative w-[128px] md:w-[168px] xl:w-[198px] h-[37px] md:h-[49px] xl:h-[58px]">
          <Image
            src={"/logo.webp"}
            sizes="(max-width: 767px) 128px, (max-width: 1023px) 168px, (max-width: 1279px) 198px, 250px"
            alt="Logo da GMD Bus"
            fill
            priority
          />
        </div>
        <h1 className="xl:w-3xl">
          É tudo sobre <strong>Ônibus</strong>
        </h1>
        <h6 className="md:w-xl lg:w-3xl">
          Especialistas no comércio de micro-ônibus: compramos, vendemos, trocamos e financiamos com
          transparência e agilidade
        </h6>
        <Button
          url="https://api.whatsapp.com/send?phone=5515981377486&text=Olá!+Gostaria+de+falar+com+um+consultor+sobre+seguro,+plano+de+saúde+ou+consórcio+sob+medida"
          label="Fale com um Especialista"
          isPrimary
        />
      </div>
    </main>
  );
}
