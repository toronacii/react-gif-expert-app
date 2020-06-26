import PropTypes from 'prop-types';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const { gifs, loading } = useFetchGifs(category);

  return <>
    <h3 className="animate__animated animate__flash">{category}</h3>
    { loading && <div className="animate__animated animate__flash">Cargando...</div> }
    <div className="card-grid">
      {gifs.map(({ id, ...props }) => (
        <GifGridItem
          key={id}
          {...props} />)
      )}
    </div>
  </>
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
