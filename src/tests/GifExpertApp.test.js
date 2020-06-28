import { shallow } from 'enzyme';
import React from 'react';
import GifExpertApp from '../GifExpertApp';

describe('Tests on `GifExpertApp` component', () => {
  let wrapper = _createWrapper();

  beforeEach(() => {
    wrapper = _createWrapper();
  });

  test('GifExpertApp should be created', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should shows categories', () => {
    const categories = ['Category 1', 'Category 2'];
    wrapper = _createWrapper(categories);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });

  function _createWrapper(categories = []) {
    return shallow(<GifExpertApp defaultCategories={categories} />);
  }
});