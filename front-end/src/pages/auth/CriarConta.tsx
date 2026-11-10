import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Checkbox } from "../../components/ui/Checkbox";
import { Input } from "../../components/ui/Input";

export default function CriarConta() {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <div className="card auth-card">
        <h1 className="auth-card__title">Criar Conta</h1>
        <p className="card__subtitle">Preencha seus dados para acessar o sistema</p>

        <form
          className="form-stack"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/login");
          }}
        >
          <Input label="Nome Completo" placeholder="Seu nome" />
          <Input label="CPF" placeholder="000.000.000-00" />
          <Input label="Senha" type="password" placeholder="••••••••" />
          <Input label="Data de Nascimento" placeholder="dd/mm/aaaa" />
          <Input label="E-mail" type="email" placeholder="nome@email.com" />
          <Input label="Telefone (WhatsApp)" type="tel" placeholder="(67) 90000-0000" />
          <Checkbox label="Aceito receber avisos sobre meus retornos por WhatsApp" />
          <Button type="submit" block>
            Criar
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
