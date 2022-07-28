import { useSetRecoilState } from "recoil";
import { IEvento } from "../../../interfaces/IEvento";
import { listadeEventosState } from "../atom";

const useExcluirEvento = () => {
   const setListaDeEventos = useSetRecoilState<IEvento[]>(listadeEventosState)
   return (evento: IEvento) => {
      return setListaDeEventos(listaAntiga => [...listaAntiga.filter(event => event.id !== evento.id)])
   }
}

export default useExcluirEvento;