import type { ReactNode } from "react";

type Props = { children: ReactNode; variant?: "success" | "danger" };

// Etiqueta de status (ex.: Confirmado, Cancelamento solicitado)
export function Badge({ children, variant = "success" }: Props) {
  return (
    <span className={variant === "danger" ? "badge badge--danger" : "badge"}>
      {children}
    </span>
  );
}
