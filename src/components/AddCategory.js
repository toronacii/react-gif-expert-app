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
    setValue(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const category = value.trim();
    if (!category) return;

    setCategories(categories => {
      if (!categories.includes(category)) {
        setValue('');
        return [category, ...categories];
      }
      return categories;
    });
  }
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
