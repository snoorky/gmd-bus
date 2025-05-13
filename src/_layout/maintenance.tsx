import { Button } from "@/_components/button";
import { AirVent, Paintbrush } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Manutenção de Ar-condicionado",
    icon: "AirVent",
    description:
      "Cuidamos do sistema de ar-condicionado do seu ônibus com precisão e rapidez.",
  },
  {
    title: "Pequenos Reparos e Pintura",
    icon: "Paintbrush",
    description:
      "Retoques, consertos e pintura profissional para deixar seu veículo impecável.",
  },
];

const iconMap = { AirVent, Paintbrush };

export default function Maintenance() {
  return (
    <section
      className="bg-blue flex flex-col items-center text-center text-white bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/element.png')" }}
    >
      <div className="relative w-40 h-20">
        <Image src={"/service.png"} alt="GMD Service" fill />
      </div>
      <p className="mb-4">
        Serviços especializados para manter seu ônibus em excelênte estado, com
        qualidade, agilidade e confiança
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        {services.map((item, index) => {
          const IconComponent = iconMap[item.icon as keyof typeof iconMap];

          return (
            <div
              key={index}
              className="border border-white/50 bg-blue rounded-xl p-4 flex flex-col items-center space-y-2"
            >
              <IconComponent width={32} height={32} />
              <h3 className="font-semibold">{item.title}</h3>
              <p>{item.description}</p>
              <Button label="Entre em Contato" href="" isFullWidth />
            </div>
          );
        })}
      </div>
    </section>
  );
}
