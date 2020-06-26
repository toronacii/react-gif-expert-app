import { useState, useEffect } from 'react';
import { getGifts } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    gifs: [],
    loading: true
  });

  useEffect(() => {
    getGifts(category).then(gifs => setState({
      gifs,
      loading: false
    }));
  }, [category]);

  return state;
  
}