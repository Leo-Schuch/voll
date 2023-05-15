import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import IConsult from "../../types/IConsult";
import styled from "@emotion/styled";

const StyledCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    color: "var(--azul-escuro)",
    fontSize: 18,
    fontWeight: 700,
    fontFamily: "var(--fonte-principal)",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontFamily: "var(--fonte-principal)",
  }
}));

const StyledLane = styled(TableRow)(() => ({
  [`&:nth-of-type(odd)`]: {
    backgroundColor: "var(--cinza-claro)",
    align: "right"
  }
}))

function Tabela({ consults }: { consults: IConsult[] | null }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized-table">
          <TableHead>
            <TableRow>
              <StyledCell>Data</StyledCell>
              <StyledCell>Horário</StyledCell>
              <StyledCell>Profissional</StyledCell>
              <StyledCell>Especialidade</StyledCell>
              <StyledCell>Paciente</StyledCell>
              <StyledCell>Modalidade</StyledCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {consults?.map((line) => {
              return (
                <StyledLane>
                  <TableCell component="th" scope="row">
                    {new Date(line.data).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{line.horario}</TableCell>
                  <TableCell>{line.profissional[0].nome}</TableCell>
                  <TableCell>{line.profissional[0].especialidade}</TableCell>
                  <TableCell>{line.paciente}</TableCell>
                  <TableCell>{line.modalidade}</TableCell>
                </StyledLane>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Tabela;
