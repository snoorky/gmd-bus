import { DifferencialsBox } from "@/_components/differencialsBox";

const differencials = [
  {
    title: "Veículos com Garantia",
    icon: "ShieldCheck",
  },
  {
    title: "Atendimento Transparente",
    icon: "Handshake",
  },
  {
    title: "Negociação Descomplicada",
    icon: "Rocket",
  },
];

export default function Differencials() {
  return (
    <section className="content-padding bg-black/5 flex flex-col md:flex-row gap-2 md:gap-6">
      <div className="flex gap-2">
        {differencials.map((item, index) => (
          <DifferencialsBox
            key={index}
            icon={item.icon as "ShieldCheck" | "Handshake" | "Rocket"}
            title={item.title}
          />
        ))}
      </div>
      <h2 className="text-center md:text-end m-auto w-60 md:w-88">
        Soluções para quem transporta com seriedade
      </h2>
    </section>
  );
}
