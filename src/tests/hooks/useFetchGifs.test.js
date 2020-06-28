import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Tests on `useFetchGifs` hook', () => {

  test('should returns initial state', async () => {

    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));
    const { gifs, loading } = result.current;

    await waitForNextUpdate();
    
    expect(gifs).toEqual([]);
    expect(loading).toBe(true);
  });

  test('should returns images and loading in false', async () => {

    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));
    await waitForNextUpdate();

    const { gifs, loading } = result.current;
    
    expect(gifs.length).toBe(10);
    expect(loading).toBe(false);
  });

});