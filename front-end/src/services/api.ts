// Camada de acesso aos dados.
// Hoje devolve dados de exemplo; quando o back-end existir, basta trocar o
// corpo destas funções por chamadas reais (fetch) mantendo os mesmos nomes
// e tipos de retorno. As páginas não precisam mudar.
import {
  indicadoresMock,
  pacientesMock,
  relatoriosMock,
  retornosMock,
  usuariosDemo,
  usuariosListadosMock,
} from "../mocks/data";
import type {
  Indicador,
  Paciente,
  Relatorio,
  Retorno,
  StatusRetorno,
  UsuarioListado,
} from "../types";

function porStatus(status: StatusRetorno) {
  return async (): Promise<Retorno[]> =>
    retornosMock.filter((r) => r.status === status);
}

export const listarPedidos = porStatus("SOLICITADO");
export const listarConfirmados = porStatus("CONFIRMADO");
export const listarCancelamentos = porStatus("CANCELAMENTO_SOLICITADO");

export async function listarRetornosDoPaciente(): Promise<Retorno[]> {
  const nome = usuariosDemo.PACIENTE.nome;
  return retornosMock.filter(
    (r) =>
      r.paciente === nome &&
      (r.status === "AGUARDANDO_CONFIRMACAO" || r.status === "CONFIRMADO"),
  );
}

export async function listarPacientes(): Promise<Paciente[]> {
  return pacientesMock;
}

export async function listarUsuarios(): Promise<UsuarioListado[]> {
  return usuariosListadosMock;
}

export async function listarRelatorios(): Promise<Relatorio[]> {
  return relatoriosMock;
}

export async function listarIndicadores(): Promise<Indicador[]> {
  return indicadoresMock;
}
