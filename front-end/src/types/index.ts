export type Perfil = "PACIENTE" | "ATENDENTE" | "CHEFE";

export type StatusRetorno =
  | "SOLICITADO" // paciente pediu, atendente ainda não propôs data
  | "AGUARDANDO_CONFIRMACAO" // atendente propôs data, paciente ainda não confirmou
  | "CONFIRMADO"
  | "CANCELAMENTO_SOLICITADO";

export type Usuario = {
  id: string;
  nome: string;
  perfil: Perfil;
};

export type Retorno = {
  id: string;
  paciente: string;
  medico: string;
  dataPedido: string; // ex.: "03/11/2026"
  dataHora?: string; // ex.: "10/12/2026 às 09:30" (vazio até o atendente propor)
  status: StatusRetorno;
  motivoCancelamento?: string;
};

export type Paciente = {
  id: string;
  nome: string;
  cpf: string;
};

export type UsuarioListado = {
  id: string;
  nome: string;
  perfil: "Atendente" | "Administrador";
  ativo: boolean;
};

export type Relatorio = {
  id: string;
  nome: string;
  periodo: string;
  formato: string;
};

export type Indicador = {
  label: string;
  valor: string;
};
