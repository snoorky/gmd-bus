import Image from "next/image";
import { Button } from "./button";
import { Clock, Headset, ShieldCheck, Wrench } from "lucide-react";

const benefits = [
  {
    icon: <Wrench width={32} height={32} className="text-red" />,
    description: "Equipe especializada em ônibus",
  },
  {
    icon: <Clock width={32} height={32} className="text-red" />,
    description: "Atendimento rápido, com foco em tempo de parada reduzido",
  },
  {
    icon: <ShieldCheck width={32} height={32} className="text-red" />,
    description: "Serviços com garantia e qualidade técnica comprovada",
  },
  {
    icon: <Headset width={32} height={32} className="text-red" />,
    description: "Atendimento direto e sem burocracia",
  },
];

const services = [
  {
    image: "air.png",
    title: "Manutenção Ar-condicionado",
    description: "Serviço preciso, rápido e confiável para o conforto dos seus passageiros",
    buttonLabel: "Agendar Serviço",
    buttonText:
      "Olá!+Gostaria+de+agendar+um+serviço+de+manutenção+de+ar-condicionado+para+meu+ônibus",
  },
  {
    image: "brush.jpg",
    title: "Funilaria e Pintura",
    description: "Retoques e pintura profissional para deixar seu ônibus como novo",
    buttonLabel: "Solicitar Orçamento",
    buttonText: "Oi!+Gostaria+de+solicitar+um+orçamento+para+pequenos+reparos+e+pintura",
  },
];

export default function Maintenance() {
  return (
    <section className="relative">
      <Image
        src="/service-background.png"
        className="absolute object-cover object-[55%_center] transform scale-x-[-1]"
        alt="Imagem de background"
        fill
      />
      <div className="absolute w-screen h-full bg-blue/40 inset-0"></div>
      <div className="relative flex flex-col xl:flex-row justify-between items-center text-center text-white">
        <div className="flex flex-col items-center justify-center xl:items-start xl:text-left xl:w-[50%] space-y-4 md:space-y-6">
          <div className="relative w-[209px] md:w-[249px] xl:w-[299px] h-[46px] md:h-[54px] xl:h-[65px]">
            <Image
              src="/logo-service.webp"
              sizes="(max-width: 767px) 209px, (max-width: 1023px) 249px, (max-width: 1279px) 299px, 350px"
              alt="GMD Service"
              fill
            />
          </div>
          <p>
            Cuidamos do seu veículo com a mesma seriedade com que você cuida da sua operação, com
            serviços rápidos, confiáveis e feitos por quem entende do assunto — nossa equipe garante
            qualidade com agilidade para que seu ônibus esteja sempre pronto para rodar.
          </p>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4 xl:grid-cols-1">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-center flex-col xl:flex-row gap-2">
                {item.icon}
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <Button
            url="https://api.whatsapp.com/send?phone=5515981377486&text=Olá!+Gostaria+de+falar+com+um+especialista+da+GMD+Bus"
            label="Entrar em Contato"
            isPrimary
          />
        </div>
        <div className="grid grid-cols-2 my-6 md:my-12 gap-3 md:gap-6 xl:w-[60%]">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl justify-between overflow-hidden pb-2 md:pb-4 border border-orange bg-blue/50"
            >
              <div>
                <div className="relative w-[170px] md:w-[340px] lg:w-[440px] xl:w-[400px] 2xl:w-[500px] h-[115px] md:h-[230px] lg:h-[276px] xl:h-[240px] 2xl:h-[286px]">
                  <Image
                    src={`/${item.image}`}
                    sizes="(max-width: 767px) 170px, (max-width: 1023px) 340px, (max-width: 1279px) 440px, 600px"
                    className="absolute object-cover"
                    alt={item.title}
                    loading="lazy"
                    fill
                  />
                </div>
                <div className="p-1.5 md:p-6">
                  <h3 className="whitespace-pre-line md:whitespace-normal">{item.title}</h3>
                  <p className="text-white/75">{item.description}</p>
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
        </div>
      </div>
    </section>
  );
}
