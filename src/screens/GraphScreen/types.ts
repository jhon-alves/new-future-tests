export type TRentability = {
  Cliente: [
    {
      DataPosicao: string,
      ValorAplicado: number,
      ValorBruto: number,
      ValorLiquido: number,
      ValorResultado: number,
      Rentabilidade: number
    },
  ],
  Indices: {
    DóLAR: [
      {
        DataPregao: string,
        Rentabilidade: number
      }
    ],
    CDI: [
      {
        DataPregao: string,
        Rentabilidade: number
      }
    ],
    IBOVESPA: [
      {
        DataPregao: string,
        Rentabilidade: number
      }
    ],
    IPCA: [
      {
        DataPregao: string,
        Rentabilidade: number
      }
    ],
    IFIX: [
      {
        DataPregao: string,
        Rentabilidade: number
      }
    ]
  }
};
