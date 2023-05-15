import IProfessional from "./IProfessional";

export default interface IConsult extends IProfessional {
    id: number,
    data: string,
    horario: string,
    profissional: Array<IProfessional>,
    especialidade: string,
    paciente: string,
    modalidade: string
}