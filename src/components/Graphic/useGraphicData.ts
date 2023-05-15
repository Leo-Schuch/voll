import IConsult from "../../types/IConsult";
import IProfessional from "../../types/IProfessional";

interface Props {
  profissionais: IProfessional[] | null;
  consultas: IConsult[] | null;
}

interface IData {
  nome: string;
  consultas: number;
}

const useGraphicData = ({ profissionais, consultas }: Props) => {
  let dados: Array<IData> = [];

  if (profissionais && consultas) {
    dados = profissionais.map((profissional) => ({
      nome: profissional.nome,
      consultas: consultas.filter((consulta) =>
        consulta.profissional.some((prof) => prof.nome === profissional.nome)
      ).length,
    }));
  }
  return dados;
};
export default useGraphicData;
