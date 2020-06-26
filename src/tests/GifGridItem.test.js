import { shallow } from 'enzyme';
import React from 'react';
import { GifGridItem } from '../components/GifGridItem';

describe('Tests on `GifGridItem` component', () => {
  const title = 'test';
  const url = 'https://test.jpg';
  let wrapper = getWrapper();

  beforeEach(() => {
    wrapper = getWrapper();
  });

  test('GifGridItem should be created', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a p with the title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('should have a img with url and alt', () => {
    const img = wrapper.find('img');
    const { src, alt } = img.props();
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should have a animate__fadeIn class', () => {
    const div = wrapper.find('div');
    const hasClass = div.hasClass('animate__fadeIn');
    expect(hasClass).toBe(true);
  });

  function getWrapper() {
    return shallow(<GifGridItem url={url} title={title} />);
  }
});