import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { Table } from "../../components/ui/Table";
import { useAsync } from "../../hooks/useAsync";
import { medicos } from "../../mocks/data";
import { listarConfirmados } from "../../services/api";

export default function Agendamentos() {
  const { data: confirmados } = useAsync(listarConfirmados, []);

  return (
    <>
      <div className="card">
        <div className="filter-bar">
          <Select label="Médico" options={["Todos", ...medicos]} />
          <Input label="De" placeholder="01/12/2026" />
          <Input label="Até" placeholder="31/12/2026" />
          <Button>Filtrar</Button>
        </div>
      </div>

      <div className="card">
        <h2 className="card__title">Agendamentos Confirmados</h2>
        <Table
          rows={confirmados}
          getKey={(r) => r.id}
          columns={[
            { header: "Data e Horário", width: 20, render: (r) => r.dataHora },
            { header: "Paciente", width: 28, render: (r) => r.paciente },
            { header: "Médico", width: 26, render: (r) => r.medico },
            { header: "Status", width: 26, render: () => <Badge>Confirmado</Badge> },
          ]}
        />
      </div>
    </>
  );
}
