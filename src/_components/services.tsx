import { Button } from "@/_components/button";
import { Bus, CreditCard, Gauge, Handshake, RefreshCcw } from "lucide-react";

const services = [
  {
    icon: (
      <Bus width={40} height={40} className="justify-self-center stroke-blue" />
    ),
    title: "Adquira seu Micro-ônibus",
    description:
      "Encontramos o veículo ideal para o seu transporte com rapidez, segurança e suporte de ponta a ponta",
    button: "Fale com a GMD",
    buttonLink:
      "Olá!+Tenho+interesse+em+adquirir+um+micro-ônibus.+Pode+me+ajudar+a+encontrar+o+ideal?",
  },
  {
    icon: (
      <Handshake
        width={40}
        height={40}
        className="justify-self-center stroke-blue"
      />
    ),
    title: "Venda seu Micro-ônibus",
    description:
      "Valorizamos seu veículo com base no mercado real e cuidamos de toda a negociação",
    button: "Solicitar Avaliação",
    buttonLink: "Oi!+Quero+vender+meu+micro-ônibus.+Como+funciona+a+avaliação?",
  },
  {
    icon: (
      <RefreshCcw
        width={40}
        height={40}
        className="justify-self-center stroke-blue"
      />
    ),
    title: "Troca Facilitada",
    description:
      "Renove sua frota com facilidade. Avaliação justa e agilidade na negociação",
    button: "Consultar Troca",
    buttonLink:
      "Olá!+Tenho+interesse+em+trocar+meu+veículo.+Como+posso+consultar+as+opções+disponíveis?",
  },
  {
    icon: (
      <CreditCard
        width={40}
        height={40}
        className="justify-self-center stroke-blue"
      />
    ),
    title: "Financiamento Especializado",
    description:
      "Facilitamos a sua compra com crédito sob medida e apoio no processo",
    button: "Simular Financiamento",
    buttonLink:
      "Oi!+Quero+simular+um+financiamento+para+compra+de+micro-ônibus.",
  },
  {
    icon: (
      <Gauge
        width={40}
        height={40}
        className="justify-self-center stroke-blue"
      />
    ),
    title: "Avaliação de Veículos",
    description:
      "Descubra o valor real do seu ônibus com quem entende do mercado de verdade",
    button: "Agendar Avaliação",
    buttonLink: "Olá!+Gostaria+de+agendar+uma+avaliação+do+meu+ônibus.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="flex flex-col text-center items-center">
      <h2 className="w-80 md:w-auto text-blue">
        Compre, venda ou troque com quem realmente entende de ônibus
      </h2>
      <p className="w-80 md:w-auto">
        Da compra ao financiamento, oferecemos apoio completo em todas as etapas
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-6 gap-4">
        {services.map((item, index) => {
          const grid = index <= 2 ? "md:col-span-2" : "md:col-span-3";

          return (
            <div
              key={index}
              className={`${grid} border rounded-lg p-4 space-y-2 flex flex-col items-center border-blue/50`}
            >
              {item.icon}
              <h3 className="text-blue">{item.title}</h3>
              <p className="px-4 md:px-0 flex-1">{item.description}</p>
              <Button
                label={item.button}
                url={`https://api.whatsapp.com/send?phone=5515996183121&text=${item.buttonLink}`}
                styles="w-full"
                isPrimary
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
