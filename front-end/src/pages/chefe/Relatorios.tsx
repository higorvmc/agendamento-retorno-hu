import { Button } from "../../components/ui/Button";
import { Table } from "../../components/ui/Table";
import { useAsync } from "../../hooks/useAsync";
import { listarIndicadores, listarRelatorios } from "../../services/api";

export default function Relatorios() {
  const { data: indicadores } = useAsync(listarIndicadores, []);
  const { data: relatorios } = useAsync(listarRelatorios, []);

  return (
    <>
      <div className="kpi-grid">
        {indicadores.map((i) => (
          <div className="card" key={i.label}>
            <span className="kpi__label">{i.label}</span>
            <span className="kpi__value">{i.valor}</span>
          </div>
        ))}
      </div>

      <div className="card">
        <h2 className="card__title">Relatórios Disponíveis</h2>
        <Table
          rows={relatorios}
          getKey={(r) => r.id}
          columns={[
            { header: "Relatório", width: 42, render: (r) => r.nome },
            { header: "Período", width: 24, render: (r) => r.periodo },
            { header: "Formato", width: 14, render: (r) => r.formato },
            {
              header: "Ação",
              width: 20,
              render: () => <Button small>Baixar</Button>,
            },
          ]}
        />
      </div>
    </>
  );
}
