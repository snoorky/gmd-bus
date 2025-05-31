import { PhoneCall, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Mapa do Site",
    links: [
      {
        icon: "",
        title: "Sobre Nós",
        link: "#sobre",
      },
      {
        icon: "",
        title: "Serviços",
        link: "#servicos",
      },
    ],
  },
  {
    title: "Contato",
    links: [
      {
        icon: <PhoneCall width={24} height={24} />,
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
        title: "Rodovia Raposo Tavares KM 95, Sorocaba/SP",
        link: "https://www.google.com/maps/dir//GMD+Bus+%7C+GMD+Corretora+-+Rua+Dorli+Nunes+25,+Rod.+Raposo+Tavares,+km+95+-+Caputera,+Sorocaba+-+SP,+18017-376/@-23.5139979,-47.4651656,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cf619faeedfa6d:0x7816b5bb13f39c75!2m2!1d-47.4239659!2d-23.5140033?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="text-white/85 bg-blue">
      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <div className="space-y-4 w-72 xl:w-auto">
          <div className="relative brightness-0 invert w-[128px] md:w-[168px] xl:w-[198px] h-[37px] md:h-[49px] xl:h-[58px]">
            <Image
              src={"/logo.png"}
              alt="Logo da GMD Bus"
              sizes="(max-width: 767px) 128px, (max-width: 1023px) 168px, (max-width: 1279px) 198px, 250px"
              fill
            />
          </div>
          <p className="text-white md:w-64 xl:w-96">
            Referência nacional no comércio de micro-ônibus, atuando com
            excelência desde 2011.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 xl:gap-32">
          {footerLinks.map((item, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-white">{item.title}</h4>
              {item.links.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="flex gap-2 text-white/75 px-0 py-0 items-center justify-start"
                >
                  {item.icon} {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <hr className="my-4" />
      <div className="md:flex md:gap-2">
        <p>© GMD Bus. Todos os direitos reservados.</p>
        <p>Desenvolvido por Snoorky Studio</p>
      </div>
    </footer>
  );
}
