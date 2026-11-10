import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & { label: string };

// Campo de texto com rótulo
export function Input({ label, ...rest }: Props) {
  return (
    <label className="field">
      {label}
      <input className="input" {...rest} />
    </label>
  );
}
