import type { Perfil } from "../types";

export type MenuItem = { to: string; label: string };

// Itens do menu lateral de cada perfil
export const menuByPerfil: Record<Perfil, MenuItem[]> = {
  PACIENTE: [{ to: "/paciente/retornos", label: "Meus Retornos" }],
  ATENDENTE: [
    { to: "/atendente/pedidos", label: "Pedidos de Agendamento" },
    { to: "/atendente/confirmados", label: "Agendamentos Confirmados" },
    { to: "/atendente/cancelamentos", label: "Pedidos de Cancelamento" },
    { to: "/atendente/pacientes", label: "Cadastrar Paciente" },
  ],
  CHEFE: [
    { to: "/chefe/agendamentos", label: "Agendamentos" },
    { to: "/chefe/relatorios", label: "Relatórios" },
    { to: "/chefe/usuarios", label: "Cadastrar Usuários" },
  ],
};

// Primeira tela de cada perfil depois do login
export const homeByPerfil: Record<Perfil, string> = {
  PACIENTE: "/paciente/retornos",
  ATENDENTE: "/atendente/pedidos",
  CHEFE: "/chefe/agendamentos",
};

export const perfilLabel: Record<Perfil, string> = {
  PACIENTE: "Paciente",
  ATENDENTE: "Atendente",
  CHEFE: "Chefe do Ambulatório",
};
