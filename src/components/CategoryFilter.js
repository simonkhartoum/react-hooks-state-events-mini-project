import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map(category =>(
        <button key={category}
         onClick={()=> onSelectCategory(category)}
         className = {category === selectedCategory ? "selected" : null}
         >{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
