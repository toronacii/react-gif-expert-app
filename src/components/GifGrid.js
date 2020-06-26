import PropTypes from 'prop-types';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const { gifs, loading } = useFetchGifs(category);

  return <>
    <h3>{category}</h3>
    { loading && <div>Cargando...</div> }
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
