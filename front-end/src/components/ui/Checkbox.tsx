import type { InputHTMLAttributes } from "react";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
};

// Caixa de seleção com texto ao lado
export function Checkbox({ label, ...rest }: Props) {
  return (
    <label className="field checkbox-field">
      <input type="checkbox" {...rest} />
      {label}
    </label>
  );
}
