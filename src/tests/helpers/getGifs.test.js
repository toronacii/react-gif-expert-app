import { getGifs } from '../../helpers/getGifs';

describe('Tests on `getGifs` helper', () => {

  test('should bring 10 elements', async () => {
    const gifs = await getGifs('Dragon Ball'); 
    expect(gifs.length).toBe(10);
  });

  test('should bring 0 elements when no category is sent', async () => {
    const gifs = await getGifs(''); 
    expect(gifs.length).toBe(0);
  });

});