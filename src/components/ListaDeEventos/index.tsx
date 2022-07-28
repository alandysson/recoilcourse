import React from 'react';
import Evento from '../Evento';
import Filtro from '../Filtro';
import useListaDeEventos from '../state/hooks/useListaDeEventos';
import style from './ListaDeEventos.module.scss';

const ListaDeEventos: React.FC = () => {
  const eventos = useListaDeEventos()

  return (<section>
    <Filtro />
    <div className={style.Scroll}>
      {eventos.map(evento => (
        <Evento evento={evento} key={evento.id} />
      ))}
    </div>
  </section>)
}

export default ListaDeEventos