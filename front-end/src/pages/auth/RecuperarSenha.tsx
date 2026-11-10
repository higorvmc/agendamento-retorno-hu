import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

export default function RecuperarSenha() {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <div className="card auth-card">
        <h1 className="auth-card__title">Recuperar Senha</h1>
        <p className="card__subtitle">Informe seu CPF e defina uma nova senha</p>

        <form
          className="form-stack"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/login");
          }}
        >
          <Input label="CPF" placeholder="000.000.000-00" />
          <Input label="Nova Senha" type="password" placeholder="••••••••" />
          <Input label="Confirmar Senha" type="password" placeholder="••••••••" />
          <Button type="submit" block>
            Mudar Senha
          </Button>
          <div className="text-center">
            <Link className="link" to="/login">
              Voltar ao login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
