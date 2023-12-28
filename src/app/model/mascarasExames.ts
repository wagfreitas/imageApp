export interface mascarasExames {
    mascara: string;
    exames: posicaoExameModel[];
    examesnormais: ExamesNormais;

    laudos: laudoAlteradoModel[];
    laudosmin: LaudosMin[];
    laudosnorm: LaudosNormais
}
export interface posicaoExameModel {
    exames: string;
    btncolor: string;
}

export interface ExamesNormais {
  laudosnormais: string;
  btncolor: string;
}
export interface laudoAlteradoModel {
    descricao: string;
    btncolor: string;
    laudos: string;
}
export interface LaudosMin {
    laudosmin: string;
    btncolor: string;
}

export interface LaudosNormais {
  descricao: string;
  btincolor: string;
}
