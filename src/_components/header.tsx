import { Button } from "@/_components/button";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    icon: (
      <Image
        src={"/icons/whatsapp.svg"}
        alt="WhatsApp"
        width={24}
        height={24}
      />
    ),
    title: "(15) 99618-3121",
    link: "https://api.whatsapp.com/send?phone=5515996183121&text=Oi!+Vi+o+site+da+GMD+e+quero+falar+com+um+atendente.+Pode+me+chamar?",
  },
  {
    icon: <Mail width={24} height={24} />,
    title: "contato@gmdbus.com.br",
    link: "mailto:contato@gmdbus.com.br",
  },
  {
    icon: <MapPin width={24} height={24} />,
    title: "Rodovia Raposo Tavares, Sorocaba/SP",
    link: "https://www.google.com/maps/dir//GMD+Bus+%7C+GMD+Corretora+-+Rua+Dorli+Nunes+25,+Rod.+Raposo+Tavares,+km+95+-+Caputera,+Sorocaba+-+SP,+18017-376/@-23.5139979,-47.4651656,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cf619faeedfa6d:0x7816b5bb13f39c75!2m2!1d-47.4239659!2d-23.5140033?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D",
  },
];

export default function Header() {
  return (
    <header>
      <ul className="hidden md:flex justify-between md:px-12 lg:px-24 text-white bg-blue">
        {links.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              target="_blank"
              className="flex items-center gap-2"
            >
              {item.icon}{" "}
              <span className="text-base xl:text-lg">{item.title}</span>
            </Link>
          </li>
        ))}
        <li className="flex">
          <Link href="" className="px-0">
            <Image
              src={"/icons/facebook.svg"}
              alt="Facebook"
              width={24}
              height={24}
            />
          </Link>
          <Link href="">
            <Image
              src={"/icons/instagram.svg"}
              alt="Instagram"
              width={24}
              height={24}
            />
          </Link>
        </li>
      </ul>
      <div className="container-padding flex justify-between items-center">
        <div className="relative w-[128px] md:w-[168px] xl:w-[198px] h-[37px] md:h-[49px] xl:h-[58px]">
          <Image
            src={"/logo.png"}
            alt="Logo da GMD Bus"
            sizes="(max-width: 767px) 128px, (max-width: 1023px) 168px, (max-width: 1279px) 198px, 250px"
            fill
            priority
          />
        </div>
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex">
            <ul className="flex">
              <li>
                <Link href={"#servicos"}>Serviços</Link>
              </li>
              <li>
                <Link href={"#sobre"}>Sobre</Link>
              </li>
            </ul>
          </nav>
          <Button
            label="Entre em Contato"
            url="https://api.whatsapp.com/send?phone=5515996183121&text=Oi!+Vi+o+site+da+GMD+e+quero+falar+com+um+atendente.+Pode+me+chamar?"
            isPrimary
          />
        </div>
      </div>
    </header>
  );
}
