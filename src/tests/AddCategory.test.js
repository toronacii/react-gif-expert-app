import { shallow } from 'enzyme';
import React from 'react';
import { AddCategory } from '../components/AddCategory';

describe('Tests on `AddCategory` component', () => {
  const setCategories = jest.fn();
  let wrapper = _createWrapper();

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = _createWrapper();
  });

  test('AddCategory should be created', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should input change', () => {
    const value = 'Dragon ball';
    wrapper.find('input').simulate('change', { target: { value } });

    expect(wrapper.find('input').prop('value')).toBe(value);
  });

  test('shouldn`t submit info when input is empty', () => {
    const form  = wrapper.find('form');
    form.simulate('submit', { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should submit info when input isn`t empty', () => {
    const value = 'Dragon ball';

    wrapper.find('input').simulate('change', { target: { value } })
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
  });

  // test('should clean input when form is submited', () => {
  //   const value = 'Dragon ball';

  //   wrapper.find('input').simulate('change', { target: { value } })
  //   wrapper.find('form').simulate('submit', { preventDefault() {} });

  //   expect(wrapper.find('input').prop('value')).toBe('');
  // });

  function _createWrapper() {
    return shallow(<AddCategory setCategories={setCategories} />);
  }
});