import Image from "next/image";
import { Button } from "./button";

const services = [
  {
    image: "adquira",
    title: "Adquira seu Ônibus",
    description: "Encontramos o veículo ideal para o seu transporte com rapidez e segurança",
    buttonLabel: "Fale com a GMD",
    buttonText: "Olá!+Tenho+interesse+em+adquirir+um+ônibus.+Pode+me+ajudar+a+encontrar+o+ideal?",
  },
  {
    image: "venda",
    title: "Venda seu Ônibus",
    description: "Valorizamos seu veículo com base no mercado e cuidamos de toda a negociação",
    buttonLabel: "Solicitar Avaliação",
    buttonText: "Oi!+Quero+vender+meu+ônibus.+Como+funciona+a+avaliação?",
  },
  {
    image: "troca",
    title: "Troca Facilitada",
    description: "Renove sua frota com facilidade. Avaliação justa e agilidade na negociação",
    buttonLabel: "Consultar Troca",
    buttonText:
      "Olá!+Tenho+interesse+em+trocar+meu+veículo.+Como+posso+consultar+as+opções+disponíveis?",
  },
  {
    image: "financiamento",
    title: "Financiamento",
    description: "Facilitamos a sua compra com crédito sob medida e apoio no processo",
    buttonLabel: "Simular Financiamento",
    buttonText: "Oi!+Quero+simular+um+financiamento+para+compra+de+ônibus",
  },
  {
    image: "avaliacao",
    title: "Avaliação de Veículos",
    description: "Descubra o valor real do seu ônibus com quem entende do mercado de verdade",
    buttonLabel: "Agendar Avaliação",
    buttonText: "Olá!+Gostaria+de+agendar+uma+avaliação+do+meu+ônibus",
  },
];

export default function Services() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative z-1 flex flex-col text-center">
        <h2 className="text-blue">Comércio de Ônibus</h2>
        <p className="m-auto w-72 md:w-auto font-medium">
          Multimarcas • Zero KM e Seminovos • Rodoviários • Urbanos • Escolares • Rurais • Motorhome
          e outros
        </p>
        <h4 className="leading-5 md:leading-7 lg:leading-8 w-64 md:w-auto m-auto">
          Atendimento completo e direto para quem quer negociar ônibus com confiança
        </h4>
        <div className="grid gap-4 md:gap-6 grid-cols-2 xl:grid-cols-3 my-6 md:my-12">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl justify-between overflow-hidden pb-2 md:pb-4 border border-orange bg-white"
            >
              <div>
                <div className="relative w-[170px] md:w-[340px] lg:w-[440px] xl:w-[400px] 2xl:w-[800px] h-[115px] md:h-[230px] lg:h-[276px] xl:h-[240px] 2xl:h-[356px]">
                  <Image
                    src={`/${item.image}.png`}
                    sizes="(max-width: 767px) 170px, (max-width: 1023px) 340px, (max-width: 1279px) 440px, 800px"
                    className="absolute object-cover"
                    alt={item.title}
                    loading="lazy"
                    fill
                  />
                </div>
                <div className="p-2 md:p-6">
                  <h3 className="text-blue">{item.title}</h3>
                  <p className="text-dark">{item.description}</p>
                </div>
              </div>
              <div className="px-2 md:px-6">
                <Button
                  url={`https://api.whatsapp.com/send?phone=5515981377486&text=${item.buttonText}`}
                  label={item.buttonLabel}
                  isPrimary
                />
              </div>
            </div>
          ))}
          <div
            className="relative flex flex-col rounded-2xl justify-between overflow-hidden p-2 md:p-6 border border-orange bg-cover bg-top"
            style={{ backgroundImage: "url('/especialista.jpg'" }}
          >
            <div className="absolute w-full h-full bg-black/50 inset-0 z-0"></div>
            <div className="z-1 space-y-2 md:space-y-4 h-full">
              <h3 className="text-white">Fale com a GMD agora</h3>
              <p className="text-white/80 md:w-56 m-auto">
                Nos chame no WhatsApp e tire suas dúvidas com agilidade.
              </p>
            </div>
            <div className="z-1">
              <Button
                url="https://api.whatsapp.com/send?phone=5515981377486&text=Olá!+Gostaria+de+falar+com+um+especialista+da+GMD+Bus"
                label="Iniciar Atendimento"
                isPrimary
              />
            </div>
          </div>
        </div>
      </section>
      <div
        className="absolute opacity-50 z-[-999] left-[-60%] top-[-40%] w-full h-full bg-contain bg-left bg-no-repeat"
        style={{ backgroundImage: "url('/element.png')" }}
      ></div>
      <div
        className="absolute opacity-50 z-[-999] right-[-60%] bottom-[-40%] w-full h-full bg-contain bg-left bg-no-repeat"
        style={{ backgroundImage: "url('/element.png')" }}
      ></div>
    </div>
  );
}
