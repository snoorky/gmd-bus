import { Button } from "@/_components/button";
import { Bus, CreditCard, Gauge, Handshake, RefreshCcw } from "lucide-react";

const services = [
  {
    title: "Adquira seu micro-ônibus",
    icon: "Bus",
    description:
      "Encontramos o ônibus ideal para sua necessidade, com agilidade e suporte do início ao fim",
  },
  {
    title: "Venda seu micro-ônibus",
    icon: "Handshake",
    description:
      "Valorizamos seu veículo e cuidamos da negociação para garantir o melhor retorno",
  },
  {
    title: "Troca facilitada",
    icon: "RefreshCcw",
    description:
      "Renove sua frota com agilidade. Oferecemos avaliação justa e negociação ágil",
  },
  {
    title: "Financiamento especializado",
    icon: "CreditCard",
    description:
      "Ajudamos você a viabilizar sua compra com condições realistas e apoio no crédito",
  },
  {
    title: "Avaliação de veículos",
    icon: "Gauge",
    description:
      "Saiba quanto vale seu veículo com quem conhece o mercado de ponta a ponta",
  },
];

const iconMap = { Bus, CreditCard, Gauge, Handshake, RefreshCcw };

export default function Services() {
  return (
    <section className="text-center">
      <div className="m-auto w-60 md:w-auto mb-10">
        <h2>Comércio de Ônibus com quem entende do negócio</h2>
        <p className="text-gray">
          Compre, venda ou financie seu micro-ônibus com segurança e apoio total
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {services.map((item, index) => {
          const IconComponent = iconMap[item.icon as keyof typeof iconMap];

          let grid;
          if (index <= 2) {
            grid = "md:col-span-2";
          }
          if (index > 2) {
            grid = "md:col-span-3";
          }

          return (
            <div
              key={index}
              className={`border border-blue/50 rounded-xl p-4 flex flex-col items-center space-y-2 ${grid}`}
            >
              <IconComponent width={32} height={32} className="stroke-blue" />
              <h3 className="font-semibold text-blue">{item.title}</h3>
              <p className="flex-1">{item.description}</p>
              <Button label="Entre em Contato" href="" isPrimary isFullWidth />
            </div>
          );
        })}
      </div>
    </section>
  );
}
