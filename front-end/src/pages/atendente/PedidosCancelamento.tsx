import { Badge } from "../../components/ui/Badge";
import { Table } from "../../components/ui/Table";
import { useAsync } from "../../hooks/useAsync";
import { listarCancelamentos } from "../../services/api";

export default function PedidosCancelamento() {
  const { data: pedidos } = useAsync(listarCancelamentos, []);

  return (
    <div className="card">
      <div className="card-toolbar">
        <h2 className="card__title">Pedidos de Cancelamento</h2>
        <Badge variant="danger">Cancelamento solicitado</Badge>
      </div>
      <Table
        rows={pedidos}
        getKey={(r) => r.id}
        columns={[
          { header: "Data do Pedido", width: 16, render: (r) => r.dataPedido },
          { header: "Paciente", width: 22, render: (r) => r.paciente },
          { header: "Médico", width: 20, render: (r) => r.medico },
          { header: "Consulta Agendada", width: 18, render: (r) => r.dataHora },
          { header: "Motivo", width: 24, render: (r) => r.motivoCancelamento },
        ]}
      />
    </div>
  );
}
