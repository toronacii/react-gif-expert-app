import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [ value, setValue ] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      value={value}
      onChange={handleChange} />
    </form>
  );

  function handleChange({ target }) {
    setValue(target.value?.trim());
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;

    setCategories(categories => {
      if (!categories.includes(value)) {
        setValue('');
        return [...categories, value];
      }
      return categories;
    });
  }
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
