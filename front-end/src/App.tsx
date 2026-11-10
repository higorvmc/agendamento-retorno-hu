import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import AgendamentosConfirmados from "./pages/atendente/AgendamentosConfirmados";
import CadastrarPaciente from "./pages/atendente/CadastrarPaciente";
import PedidosAgendamento from "./pages/atendente/PedidosAgendamento";
import PedidosCancelamento from "./pages/atendente/PedidosCancelamento";
import CriarConta from "./pages/auth/CriarConta";
import Login from "./pages/auth/Login";
import RecuperarSenha from "./pages/auth/RecuperarSenha";
import Agendamentos from "./pages/chefe/Agendamentos";
import CadastrarUsuarios from "./pages/chefe/CadastrarUsuarios";
import Relatorios from "./pages/chefe/Relatorios";
import MeusRetornos from "./pages/paciente/MeusRetornos";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* Telas de acesso */}
      <Route path="/login" element={<Login />} />
      <Route path="/criar-conta" element={<CriarConta />} />
      <Route path="/recuperar-senha" element={<RecuperarSenha />} />

      {/* Paciente */}
      <Route element={<ProtectedRoute perfil="PACIENTE" />}>
        <Route element={<AppShell />}>
          <Route path="/paciente/retornos" element={<MeusRetornos />} />
        </Route>
      </Route>

      {/* Atendente */}
      <Route element={<ProtectedRoute perfil="ATENDENTE" />}>
        <Route element={<AppShell />}>
          <Route path="/atendente/pedidos" element={<PedidosAgendamento />} />
          <Route path="/atendente/confirmados" element={<AgendamentosConfirmados />} />
          <Route path="/atendente/cancelamentos" element={<PedidosCancelamento />} />
          <Route path="/atendente/pacientes" element={<CadastrarPaciente />} />
        </Route>
      </Route>

      {/* Chefe do Ambulatório */}
      <Route element={<ProtectedRoute perfil="CHEFE" />}>
        <Route element={<AppShell />}>
          <Route path="/chefe/agendamentos" element={<Agendamentos />} />
          <Route path="/chefe/relatorios" element={<Relatorios />} />
          <Route path="/chefe/usuarios" element={<CadastrarUsuarios />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
