import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Mapa do Site",
    links: [
      {
        title: "Sobre Nós",
        link: "",
      },
      {
        title: "Serviços",
        link: "",
      },
    ],
  },
  {
    title: "Contato",
    links: [
      {
        title: "Whatsapp",
        link: "",
      },
      {
        title: "E-mail",
        link: "",
      },
      {
        title: "Localização",
        link: "",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="text-white/85 bg-blue space-y-4">
      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <div className="space-y-2 w-60 xl:w-80">
          <div className="relative filter brightness-0 invert w-32 md:w-40 h-8 md:h-10">
            {/* <div className="lg:w-40 xl:w-48 lg:h-9 xl:h-11"> */}
            <Image src={"/logo.png"} alt="Logo da GMD Bus" fill />
          </div>
          <p className="text-white">
            Referência nacional no comércio de micro-ônibus, atuando com
            excelência desde 2011.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 xl:gap-24">
          {footerLinks.map((item, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-white">{item.title}</h4>
              <ul className="space-y-2">
                {item.links.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="md:flex md:justify-between">
        <p>© GMD Bus. Todos os direitos reservados.</p>
        <p>Desenvolvido por Raphael</p>
      </div>
    </footer>
  );
}
