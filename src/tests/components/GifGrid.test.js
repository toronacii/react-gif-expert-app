import { shallow } from 'enzyme';
import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Tests on `GifGrid` component', () => {
  const category = 'Dragon Ball';
  let wrapper = _createWrapper();

  beforeEach(() => {
    wrapper = _createWrapper();
  });

  test('GifGrid should be created', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should shows images when useFetchGifs is called', () => {
    const gifs = [{ id: 'abcdef', url: 'http://test', title: 'title' }];
    wrapper = _createWrapper(gifs, false);

    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    
  });

  function _createWrapper(gifs = [], loading = true) {
    useFetchGifs.mockReturnValue({ gifs, loading });
    return shallow(<GifGrid category={category} />);
  }
});