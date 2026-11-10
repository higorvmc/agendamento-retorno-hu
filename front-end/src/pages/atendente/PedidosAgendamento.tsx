import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Modal } from "../../components/ui/Modal";
import { Table } from "../../components/ui/Table";
import { useAsync } from "../../hooks/useAsync";
import { listarPedidos } from "../../services/api";
import type { Retorno } from "../../types";

export default function PedidosAgendamento() {
  const { data: pedidos } = useAsync(listarPedidos, []);
  const [selecionado, setSelecionado] = useState<Retorno | null>(null);

  function fechar() {
    setSelecionado(null);
  }

  return (
    <>
      <div className="card">
        <h2 className="card__title">Pedidos de Agendamento</h2>
        <p className="card__subtitle">Retornos aguardando data e horário</p>
        <Table
          rows={pedidos}
          getKey={(r) => r.id}
          columns={[
            { header: "Data do Pedido", width: 20, render: (r) => r.dataPedido },
            { header: "Paciente", width: 30, render: (r) => r.paciente },
            { header: "Médico", width: 28, render: (r) => r.medico },
            {
              header: "Ação",
              width: 22,
              render: (r) => (
                <Button small onClick={() => setSelecionado(r)}>
                  Adicionar Horário
                </Button>
              ),
            },
          ]}
        />
      </div>

      {selecionado && (
        <Modal title="Adicionar Data e Horário" onClose={fechar}>
          <p className="card__subtitle">
            {selecionado.paciente} · {selecionado.medico}
          </p>
          <Input label="Data disponível" placeholder="15/12/2026" />
          <Input label="Horário disponível" placeholder="14:00" />
          <div className="row">
            <Button onClick={fechar}>Salvar</Button>
            <Button variant="secondary" onClick={fechar}>
              Cancelar
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}
