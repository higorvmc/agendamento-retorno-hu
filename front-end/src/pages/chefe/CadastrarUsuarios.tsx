import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { Table } from "../../components/ui/Table";
import { useAsync } from "../../hooks/useAsync";
import { listarUsuarios } from "../../services/api";

export default function CadastrarUsuarios() {
  const { data: usuarios } = useAsync(listarUsuarios, []);

  return (
    <div className="grid-2">
      <div className="card">
        <h2 className="card__title">Novo Usuário</h2>
        <form className="form-stack" onSubmit={(e) => e.preventDefault()}>
          <Input label="Nome Completo" placeholder="Nome do usuário" />
          <Input label="CPF" placeholder="000.000.000-00" />
          <Input label="E-mail" type="email" placeholder="usuario@ufgd.edu.br" />
          <Input label="Senha Provisória" type="password" placeholder="••••••••" />
          <Select label="Perfil" options={["Atendente", "Administrador"]} />
          <Button type="submit">Cadastrar</Button>
        </form>
      </div>

      <div className="card">
        <h2 className="card__title">Usuários Cadastrados</h2>
        <Table
          rows={usuarios}
          getKey={(u) => u.id}
          columns={[
            { header: "Nome", width: 40, render: (u) => u.nome },
            { header: "Perfil", width: 30, render: (u) => u.perfil },
            {
              header: "Status",
              width: 30,
              render: (u) =>
                u.ativo ? <Badge>Ativo</Badge> : <Badge variant="danger">Inativo</Badge>,
            },
          ]}
        />
      </div>
    </div>
  );
}
