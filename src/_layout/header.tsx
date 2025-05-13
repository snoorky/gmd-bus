import {
  email,
  facebook,
  instagram,
  local,
  whatsapp,
} from "@/_components/icons";
import { Menu } from "@/_components/menu";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    icon: whatsapp(),
    title: "(15) 99618-3121",
    link: "",
  },
  {
    icon: email(),
    title: "contato@gmdbus.com.br",
    link: "",
  },
  {
    icon: local(),
    title: "Rodovia Raposo Tavares KM 95, Sorocaba/SP",
    link: "",
  },
];

export default function Header() {
  return (
    <header>
      <ul className="hidden md:flex justify-between items-center container-padding py-2 text-white fill-white bg-blue">
        {links.map((item, index) => (
          <li key={index}>
            <Link href={item.link} className="flex items-center space-x-2">
              {item.icon} <span>{item.title}</span>
            </Link>
          </li>
        ))}
        <li className="flex items-center space-x-2">
          <Link href={""}>{facebook()}</Link>
          <Link href={""}>{instagram()}</Link>
        </li>
      </ul>
      <div className="container-padding flex justify-between items-center">
        <div className="relative w-32 md:w-40 h-8 md:h-10">
          {/* <div className="lg:w-40 xl:w-48 lg:h-9 xl:h-11"> */}
          <Image src={"/logo.png"} alt="Logo da GMD Bus" fill priority />
        </div>
        <Menu />
      </div>
    </header>
  );
}
