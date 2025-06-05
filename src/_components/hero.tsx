import Image from "next/image";

export default function Hero() {
  return (
    <main className="relative w-screen h-auto pt-6 text-white">
      <Image
        src="/hero-background.png"
        className="absolute object-cover object-center"
        alt="Imagem de background"
        fill
        priority
      />
      <div className="absolute w-screen h-full bg-blue/15 inset-0"></div>
      <div className="flex flex-col items-center justify-between text-center">
        <div className="relative w-[128px] md:w-[168px] xl:w-[198px] h-[37px] md:h-[49px] xl:h-[58px]">
          <Image
            src="/logos.webp"
            sizes="(max-width: 767px) 128px, (max-width: 1023px) 168px, (max-width: 1279px) 198px, 250px"
            alt="Logo da GMD Bus"
            fill
            priority
          />
        </div>
        <h1 className="xl:w-3xl absolute top-14 xl:top-2">
          É tudo sobre <strong>Ônibus</strong>
        </h1>
        <div className="absolute bottom-8">
          <h6>Empresa especializada no comércio de ônibus</h6>
          <h6>Compra | Venda | Troca | Avaliação | Financiamento</h6>
          <h6>Referência nacional em micro-Ônibus</h6>
        </div>
      </div>
    </main>
  );
}
