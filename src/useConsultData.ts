import IConsult from "./types/IConsult";
import useFetch from "./useFetch";

const useDataConsult = () => {
    return useFetch<IConsult[]>({url: 'consultas'});
}

export default useDataConsult;