import React, { useState } from 'react'

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch Man', 'Samuray X', 'Dragon Ball'])
  const handleAdd = () => {
    const newCategory = getPromptNewCategory();
    if (newCategory) {
      setCategories([...categories, newCategory]);
    }
  }

  return (
    <div>
      <h2>GifExpertApp</h2>
      <hr />
      <button onClick={handleAdd}>Add</button>
      <ol>{
        categories.map(category => {
          return <li key={category}>{category}</li>
        })
      }</ol>
    </div>
  )

  function getPromptNewCategory() {
    let category;
    do {
      category = prompt('Añade una categoría')?.trim();
      if (category && categories.includes(category)) {
        alert('La categoría ya existe!');
        category = null;
      }
    } while (!category && category !== undefined);
    return category;
  }
}

export default GifExpertApp;
