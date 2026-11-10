import { Link, useNavigate } from "react-router-dom";
import { Button, LinkButton } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { homeByPerfil } from "../../config/menus";
import { useAuth } from "../../contexts/AuthContext";
import type { Perfil } from "../../types";

export default function Login() {
  const navigate = useNavigate();
  const { loginComo } = useAuth();

  function entrarComo(perfil: Perfil) {
    loginComo(perfil);
    navigate(homeByPerfil[perfil]);
  }

  return (
    <div className="auth-page">
      <div className="card auth-card">
        <h1 className="auth-card__title">Agendamento de Retorno</h1>
        <p className="card__subtitle">Ambulatório do Hospital Universitário da UFGD</p>

        {/* Por enquanto o botão Entrar entra como atendente. Com o back-end,
            o perfil virá da resposta do servidor. */}
        <form
          className="form-stack"
          onSubmit={(e) => {
            e.preventDefault();
            entrarComo("ATENDENTE");
          }}
        >
          <Input label="CPF" placeholder="000.000.000-00" />
          <Input label="Senha" type="password" placeholder="••••••••" />
          <div className="text-right">
            <Link className="link" to="/recuperar-senha">
              Esqueci minha Senha
            </Link>
          </div>
          <Button type="submit" block>
            Entrar
          </Button>
          <LinkButton to="/criar-conta" variant="secondary" block>
            Criar Conta
          </LinkButton>
        </form>

        <p className="auth-note">
          Atalho de demonstração:{" "}
          <button type="button" className="link" onClick={() => entrarComo("PACIENTE")}>
            Paciente
          </button>{" "}
          |{" "}
          <button type="button" className="link" onClick={() => entrarComo("ATENDENTE")}>
            Atendente
          </button>{" "}
          |{" "}
          <button type="button" className="link" onClick={() => entrarComo("CHEFE")}>
            Chefe do Ambulatório
          </button>
        </p>
      </div>
    </div>
  );
}
