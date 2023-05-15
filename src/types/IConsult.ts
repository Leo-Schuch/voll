import IProfessional from "./IProfessional";

export default interface IConsult extends IProfessional {
    id: number,
    data: string,
    time: string,
    professional: Array<IProfessional>,
    specialty: string,
    modality: string
}