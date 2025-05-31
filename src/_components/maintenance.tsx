import { Button } from "@/_components/button";
import { AirVent, Paintbrush } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: <AirVent width={40} height={40} />,
    title: "Manutenção de Ar-condicionado",
    description:
      "Serviço preciso, rápido e confiável para o conforto dos seus passageiros",
    button: "Agendar Serviço",
    buttonLink:
      "Olá!+Gostaria+de+agendar+um+serviço+de+manutenção+de+ar-condicionado+para+meu+ônibus.",
  },
  {
    icon: <Paintbrush width={40} height={40} />,
    title: "Pequenos Reparos e Pintura",
    description:
      "Retoques e pintura profissional para deixar seu ônibus como novo",
    button: "Solicitar Orçamento",
    buttonLink:
      "Oi!+Gostaria+de+solicitar+um+orçamento+para+pequenos+reparos+e+pintura.",
  },
];

export default function Maintenance() {
  return (
    <section
      className="flex flex-col xl:flex-row xl:gap-4 items-center text-center bg-cover bg-left bg-no-repeat bg-blue text-white"
      style={{ backgroundImage: "url('/element.png')" }}
    >
      <div className="flex flex-col items-center xl:items-start text-center xl:text-start">
        <div className="xl:-translate-x-5 relative w-[209px] md:w-[249px] xl:w-[299px] h-[72px] md:h-[86px] xl:h-[103px]">
          <Image
            src={"/service.png"}
            alt="GMD Service"
            sizes="(max-width: 767px) 209px, (max-width: 1023px) 249px, (max-width: 1279px) 299px, 350px"
            fill
          />
        </div>
        <h4 className="md:w-md">
          Manutenção e cuidados para manter seu ônibus em perfeito estado, com a
          qualidade e agilidade que sua operação exige
        </h4>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center border rounded-lg p-4 space-y-2 border-white/50 bg-blue"
          >
            {item.icon}
            <h3 className="">{item.title}</h3>
            <p className="px-8 text-white/75">{item.description}</p>
            <Button
              label={item.button}
              url={`https://api.whatsapp.com/send?phone=5515996183121&text=${item.buttonLink}`}
              styles="w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
