import type { ReactNode } from "react";

export type Column<T> = {
  header: string;
  width?: number; // largura da coluna em %
  render: (linha: T) => ReactNode;
};

type Props<T> = {
  columns: Column<T>[];
  rows: T[];
  getKey: (linha: T) => string;
};

// Tabela padrão: você descreve as colunas e passa as linhas
export function Table<T>({ columns, rows, getKey }: Props<T>) {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.header} style={c.width ? { width: `${c.width}%` } : undefined}>
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((linha) => (
            <tr key={getKey(linha)}>
              {columns.map((c) => (
                <td key={c.header}>{c.render(linha)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
