import type { SelectHTMLAttributes } from "react";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: string[];
};

// Lista de opções com rótulo
export function Select({ label, options, ...rest }: Props) {
  return (
    <label className="field">
      {label}
      <select className="input" {...rest}>
        {options.map((opcao) => (
          <option key={opcao}>{opcao}</option>
        ))}
      </select>
    </label>
  );
}
