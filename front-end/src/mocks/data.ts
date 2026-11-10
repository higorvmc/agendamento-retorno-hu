// Dados de exemplo para montar as telas sem back-end.
// Quando a API real existir, estes dados deixam de ser usados.
import type {
  Indicador,
  Paciente,
  Perfil,
  Relatorio,
  Retorno,
  Usuario,
  UsuarioListado,
} from "../types";

const CAMILA = "Dra. Camila Andrade";
const PAULO = "Dr. Paulo Menezes";
const BEATRIZ = "Dra. Beatriz Lima";

export const medicos = [CAMILA, PAULO, BEATRIZ];

export const usuariosDemo: Record<Perfil, Usuario> = {
  PACIENTE: { id: "p1", nome: "Maria das Dores Silva", perfil: "PACIENTE" },
  ATENDENTE: { id: "a1", nome: "Mariana Souza", perfil: "ATENDENTE" },
  CHEFE: { id: "c1", nome: "Dr. Ricardo Fonseca", perfil: "CHEFE" },
};

export const pacientesMock: Paciente[] = [
  { id: "1", nome: "João Pedro Alves", cpf: "111.222.333-44" },
  { id: "2", nome: "Maria das Dores Silva", cpf: "222.333.444-55" },
  { id: "3", nome: "Carlos Eduardo Souza", cpf: "333.444.555-66" },
  { id: "4", nome: "Ana Clara Ferreira", cpf: "444.555.666-77" },
  { id: "5", nome: "José Antônio Ribeiro", cpf: "555.666.777-88" },
];

export const retornosMock: Retorno[] = [
  // Pedidos aguardando data e horário
  { id: "r1", paciente: "João Pedro Alves", medico: CAMILA, dataPedido: "03/11/2026", status: "SOLICITADO" },
  { id: "r2", paciente: "Maria das Dores Silva", medico: PAULO, dataPedido: "04/11/2026", status: "SOLICITADO" },
  { id: "r3", paciente: "Carlos Eduardo Souza", medico: BEATRIZ, dataPedido: "05/11/2026", status: "SOLICITADO" },
  { id: "r4", paciente: "Ana Clara Ferreira", medico: CAMILA, dataPedido: "06/11/2026", status: "SOLICITADO" },
  { id: "r5", paciente: "José Antônio Ribeiro", medico: PAULO, dataPedido: "06/11/2026", status: "SOLICITADO" },
  // Confirmados
  { id: "r6", paciente: "Maria das Dores Silva", medico: PAULO, dataPedido: "28/10/2026", dataHora: "10/12/2026 às 09:30", status: "CONFIRMADO" },
  { id: "r7", paciente: "João Pedro Alves", medico: CAMILA, dataPedido: "29/10/2026", dataHora: "11/12/2026 às 14:00", status: "CONFIRMADO" },
  { id: "r8", paciente: "Carlos Eduardo Souza", medico: BEATRIZ, dataPedido: "30/10/2026", dataHora: "12/12/2026 às 10:30", status: "CONFIRMADO" },
  { id: "r9", paciente: "Ana Clara Ferreira", medico: CAMILA, dataPedido: "30/10/2026", dataHora: "15/12/2026 às 08:00", status: "CONFIRMADO" },
  { id: "r10", paciente: "José Antônio Ribeiro", medico: PAULO, dataPedido: "31/10/2026", dataHora: "16/12/2026 às 15:30", status: "CONFIRMADO" },
  // Aguardando confirmação do paciente
  { id: "r11", paciente: "Maria das Dores Silva", medico: CAMILA, dataPedido: "05/11/2026", dataHora: "15/12/2026 às 14:00", status: "AGUARDANDO_CONFIRMACAO" },
  // Pedidos de cancelamento
  { id: "r12", paciente: "Carlos Eduardo Souza", medico: BEATRIZ, dataPedido: "05/11/2026", dataHora: "12/12/2026 às 10:00", status: "CANCELAMENTO_SOLICITADO", motivoCancelamento: "Conflito de horário" },
  { id: "r13", paciente: "Ana Clara Ferreira", medico: CAMILA, dataPedido: "06/11/2026", dataHora: "11/12/2026 às 14:00", status: "CANCELAMENTO_SOLICITADO", motivoCancelamento: "Problema de transporte" },
  { id: "r14", paciente: "José Antônio Ribeiro", medico: PAULO, dataPedido: "07/11/2026", dataHora: "15/12/2026 às 08:00", status: "CANCELAMENTO_SOLICITADO", motivoCancelamento: "Já resolvido em outra consulta" },
  { id: "r15", paciente: "João Pedro Alves", medico: BEATRIZ, dataPedido: "08/11/2026", dataHora: "16/12/2026 às 15:30", status: "CANCELAMENTO_SOLICITADO", motivoCancelamento: "Conflito de horário" },
];

export const usuariosListadosMock: UsuarioListado[] = [
  { id: "u1", nome: "Mariana Souza", perfil: "Atendente", ativo: true },
  { id: "u2", nome: "Paulo Henrique Lima", perfil: "Atendente", ativo: true },
  { id: "u3", nome: "Fernanda Costa", perfil: "Administrador", ativo: true },
  { id: "u4", nome: "Lucas Martins", perfil: "Atendente", ativo: true },
];

export const relatoriosMock: Relatorio[] = [
  { id: "1", nome: "Desempenho do Ambulatório", periodo: "Outubro/2026", formato: "PDF" },
  { id: "2", nome: "Retornos por Médico", periodo: "Outubro/2026", formato: "PDF" },
  { id: "3", nome: "Cancelamentos e Faltas", periodo: "Outubro/2026", formato: "PDF" },
];

export const indicadoresMock: Indicador[] = [
  { label: "Retornos Agendados", valor: "128" },
  { label: "Taxa de Comparecimento", valor: "86%" },
  { label: "Cancelamentos", valor: "14" },
];
