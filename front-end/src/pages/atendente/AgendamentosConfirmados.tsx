import { useState } from "react";
import { Badge } from "../../components/ui/Badge";
import { Table } from "../../components/ui/Table";
import { useAsync } from "../../hooks/useAsync";
import { listarConfirmados } from "../../services/api";

export default function AgendamentosConfirmados() {
  const { data: confirmados } = useAsync(listarConfirmados, []);
  const [busca, setBusca] = useState("");

  const filtrados = confirmados.filter((r) =>
    r.paciente.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <div className="card">
      <div className="card-toolbar">
        <h2 className="card__title">Agendamentos Confirmados</h2>
        <input
          className="input"
          placeholder="Buscar paciente"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>
      <Table
        rows={filtrados}
        getKey={(r) => r.id}
        columns={[
          { header: "Data e Horário", width: 22, render: (r) => r.dataHora },
          { header: "Paciente", width: 28, render: (r) => r.paciente },
          { header: "Médico", width: 26, render: (r) => r.medico },
          { header: "Status", width: 24, render: () => <Badge>Confirmado</Badge> },
        ]}
      />
    </div>
  );
}
