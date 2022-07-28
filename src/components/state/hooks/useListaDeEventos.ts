import { useRecoilValue } from "recoil";
import { eventosFiltradoState } from "../seletores";

const useListaDeEventos = () => {
   return useRecoilValue(eventosFiltradoState)
}

export default useListaDeEventos;