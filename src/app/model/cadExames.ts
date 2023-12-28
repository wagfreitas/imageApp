export interface cadExames {
  cpf: string;
  data: string;
  descricao: string;
  equipamento: string;
  firstName: string;
  hora: string;
  horaConsulta: string;
  laudo: string;
  medico: string;
  meunr: string;
  min: string;
  niver: string;
  observacao: string;
  sexo: string;
  status: string;
  tecnico: string;
  unidade: string;
  idade: { anos: string; meses: string; dias: string };
  tipoexame: tipoExames[];
}

export interface tipoExames {
  id: string;
}

export interface idade {
  anos: string;
  meses: string;
  dias: string;
}

export interface examesLaudos {
  tipoExame:string;
  idade:  string,
  laudoObs: string;
  laudos: [];
  laudosmin: [];
  laudosnorm: [];
  laudosnormais: [];
  nome: string;
  local: string
}
