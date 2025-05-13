import Link from "next/link";
import { Button } from "./button";

export function Menu() {
  return (
    <div className="flex items-center space-x-8">
      <nav className="hidden sm:block">
        <ul className="flex items-center space-x-8">
          <li>
            <Link href={"#servicos"}>Serviços</Link>
          </li>
          <li>
            <Link href={"#sobre"}>Sobre</Link>
          </li>
        </ul>
      </nav>
      <Button label="Entre em Contato" href="" isPrimary />
    </div>
  );
}
