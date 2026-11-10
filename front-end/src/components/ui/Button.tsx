import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Estilo = {
  variant?: "primary" | "secondary" | "danger";
  small?: boolean;
  block?: boolean;
};

function classes({ variant = "primary", small, block }: Estilo) {
  return [
    "btn",
    variant !== "primary" && `btn--${variant}`,
    small && "btn--sm",
    block && "btn--block",
  ]
    .filter(Boolean)
    .join(" ");
}

// Botão comum (ações como salvar, confirmar, filtrar)
export function Button({
  variant,
  small,
  block,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & Estilo) {
  return (
    <button type="button" className={classes({ variant, small, block })} {...rest} />
  );
}

// Botão que leva para outra tela (usa a mesma aparência)
export function LinkButton({
  to,
  children,
  ...estilo
}: Estilo & { to: string; children: ReactNode }) {
  return (
    <Link to={to} className={classes(estilo)}>
      {children}
    </Link>
  );
}
