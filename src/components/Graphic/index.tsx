import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import IConsult from "../../types/IConsult";
import IProfessional from "../../types/IProfessional";
import useGraphicData from "./useGraphicData";
import styled from "styled-components";

interface Props {
  profissionais: IProfessional[] | null;
  consultas: IConsult[] | null;
}

interface IData {
  nome: string;
  consultas: number;
}

const SectionStyled = styled.section`
    background-color: var(--branco);
    border-radius: 16px;
`;

function Graphic({ profissionais, consultas }: Props) {
  let data: Array<IData> = useGraphicData({ profissionais, consultas });
  return (
    <SectionStyled>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
        >
          <XAxis type="number"></XAxis>
          <YAxis type="category" dataKey="nome"></YAxis>
          <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
        </BarChart>
      </ResponsiveContainer>
    </SectionStyled>
  );
}

export default Graphic;
