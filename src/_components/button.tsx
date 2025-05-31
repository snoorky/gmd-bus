import Link from "next/link";

interface ButtonProps {
  label: string;
  target?: string;
  styles?: string;
  url: string;
  isPrimary?: boolean;
}

export function Button({
  label,
  target = "_blank",
  styles,
  url,
  isPrimary,
}: ButtonProps) {
  return (
    <Link
      href={url}
      target={target}
      className={`${styles} ${isPrimary ? "btn-primary" : "btn-secondary"}`}
    >
      {label}
    </Link>
  );
}
