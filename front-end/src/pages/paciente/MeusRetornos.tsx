import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { useAsync } from "../../hooks/useAsync";
import { listarRetornosDoPaciente } from "../../services/api";

export default function MeusRetornos() {
  const { data: retornos } = useAsync(listarRetornosDoPaciente, []);

  return (
    <>
      <div className="row-between">
        <p className="card__subtitle">Acompanhe e confirme seus retornos</p>
        <Button>Solicitar Retorno</Button>
      </div>

      {retornos.map((r) => {
        const aguardando = r.status === "AGUARDANDO_CONFIRMACAO";
        return (
          <div className="card" key={r.id}>
            <h2 className="card__title">Retorno com {r.medico}</h2>
            <p className="card__subtitle">
              {aguardando ? `Data proposta: ${r.dataHora}` : r.dataHora}
            </p>
            <p style={{ margin: "12px 0" }}>
              {aguardando ? (
                <Badge variant="danger">Aguardando sua confirmação</Badge>
              ) : (
                <Badge>Confirmado</Badge>
              )}
            </p>
            <div className="row">
              {aguardando && <Button>Confirmar</Button>}
              <Button variant="danger">Solicitar Cancelamento</Button>
            </div>
          </div>
        );
      })}
    </>
  );
}
