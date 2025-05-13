import { ShieldCheck, Handshake, Rocket } from "lucide-react";

interface DifferencialsBoxProps {
  icon: "ShieldCheck" | "Handshake" | "Rocket";
  title: string;
}

const iconMap = {
  ShieldCheck,
  Handshake,
  Rocket,
};

export function DifferencialsBox({ title, icon }: DifferencialsBoxProps) {
  const IconComponent = iconMap[icon];
  return (
    <div className="rounded-lg bg-blue/75 p-3 flex-1 md:flex-auto flex flex-col items-center justify-center space-y-2 text-center text-white">
      <IconComponent />
      <p>{title}</p>
    </div>
  );
}
