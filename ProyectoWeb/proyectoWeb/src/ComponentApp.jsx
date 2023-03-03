import { useState } from "react";


function ComponentApp() {
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState([])

  const handleInputChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddCategory = () => {
    if (category) {
      setCategories([...categories, category]);
      setCategory('');
    }
  };

  return (
    <div>
      <input type="text" value={category} onChange={handleInputChange} />
      <button onClick={handleAddCategory}>Add Category</button>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  )
}

export default ComponentApp;

