import Link from "next/link";

interface ButtonProps {
  label: string;
  href: string;
  isPrimary?: boolean;
  isFullWidth?: boolean;
}

export function Button({
  label,
  href,
  isPrimary = false,
  isFullWidth = false,
}: ButtonProps) {
  const isPrimaryClass = isPrimary ? "btn-primary" : "btn-secondary";
  const isFullWidthClass = isFullWidth && "w-full";

  return (
    <Link
      className={`button ${isPrimaryClass} ${isFullWidthClass}`}
      href={href}
    >
      {label}
    </Link>
  );
}
