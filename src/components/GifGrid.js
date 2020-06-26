import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifts();
  }, []);

  return <>
    <h3>{category}</h3>
    <div className="card-grid">
      {gifs.map(({ id, ...props }) => (
        <GifGridItem
          key={id}
          {...props} />)
      )}
    </div>
  </>

  async function getGifts() {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=J5jUPD9MgICiV0j5LIsBLLGayV64VPmy`;
    const response = await fetch(url)
    const { data } = await response.json();
    const gifs = data.map(({ id, title, images }) => ({ id, title, ...images.downsized_medium }));
    setGifs(gifs);
  }
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
