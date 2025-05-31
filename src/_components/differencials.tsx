import { ShieldCheck, Handshake, Rocket } from "lucide-react";

const differencials = [
  {
    icon: "ShieldCheck",
    title: "Veículos com Garantia",
    description:
      "Só trabalhamos com ônibus de procedência e qualidade comprovada",
  },
  {
    icon: "Handshake",
    title: "Atendimento Transparente",
    description: "Aqui, você fala direto com quem entende do assunto",
  },
  {
    icon: "Rocket",
    title: "Negociação Descomplicada",
    description: "Processo claro, rápido e sem dor de cabeça",
  },
];

const iconMap = { ShieldCheck, Handshake, Rocket };

export default function Differencials() {
  return (
    <section className="bg-black/5 flex flex-col xl:flex-row gap-4 md:gap-8 xl:gap-4">
      <h2 className="text-center md:text-start w-64 md:w-auto xl:w-2xl m-auto">
        Soluções para quem transporta com seriedade
      </h2>
      <div className="flex flex-col md:flex-row gap-2">
        {differencials.map((item, index) => {
          const IconComponent = iconMap[item.icon as keyof typeof iconMap];

          return (
            <div
              key={index}
              className="flex flex-col flex-1 items-center space-y-1 p-4 xl:p-5 rounded-lg text-center bg-blue text-white"
            >
              <IconComponent
                width={32}
                height={32}
                className="justify-self-center"
              />
              <h4>{item.title}</h4>
              <p className="text-white/75 md:text-base">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
