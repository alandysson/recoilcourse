import { useSetRecoilState } from "recoil";
import { IEvento } from "../../../interfaces/IEvento";
import { obterId } from "../../../util";
import { listadeEventosState } from "../atom";

const useAdicionarEvento = () => {
   const setListaDeEventos = useSetRecoilState<IEvento[]>(listadeEventosState)
   return (evento: IEvento) => {
      const hoje = new Date()
      if (evento.inicio < hoje) {
         throw new Error('Eventos não podem ser cadastrado com data menor que a atual')
      }
      evento.id = obterId()
      return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
   }
}

export default useAdicionarEvento;