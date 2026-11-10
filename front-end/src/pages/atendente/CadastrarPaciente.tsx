import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Table } from "../../components/ui/Table";
import { useAsync } from "../../hooks/useAsync";
import { listarPacientes } from "../../services/api";

export default function CadastrarPaciente() {
  const { data: pacientes } = useAsync(listarPacientes, []);

  return (
    <div className="grid-2">
      <div className="card">
        <h2 className="card__title">Dados do Paciente</h2>
        <form className="form-stack" onSubmit={(e) => e.preventDefault()}>
          <Input label="Nome Completo" placeholder="Nome do paciente" />
          <Input label="CPF" placeholder="000.000.000-00" />
          <Input label="Data de Nascimento" placeholder="dd/mm/aaaa" />
          <Input label="Telefone" type="tel" placeholder="(67) 90000-0000" />
          <Input label="E-mail" type="email" placeholder="paciente@email.com" />
          <div className="row">
            <Button type="submit">Salvar</Button>
            <Button type="reset" variant="secondary">
              Limpar
            </Button>
          </div>
        </form>
      </div>

      <div className="card">
        <div className="card-toolbar">
          <h2 className="card__title">Pacientes Cadastrados</h2>
          <input className="input" placeholder="Buscar paciente" />
        </div>
        <Table
          rows={pacientes}
          getKey={(p) => p.id}
          columns={[
            { header: "Nome", width: 40, render: (p) => p.nome },
            { header: "CPF", width: 28, render: (p) => p.cpf },
            {
              header: "Ação",
              width: 32,
              render: () => (
                <Button small variant="secondary">
                  Editar
                </Button>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
