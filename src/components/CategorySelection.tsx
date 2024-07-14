import React from "react";
import Words from "./Words";
import "../css/CategorySelection.css";

interface CategorySelectionProps {
  selectCategory: (category: string) => void;
}

const CategorySelection: React.FC<CategorySelectionProps> = ({
  selectCategory,
}) => {
  const categories = Object.keys(Words);

  return (
    <div className="category-selection-container">
      <div className="category-selection">
        {categories.map((category) => (
          <button
            className="category-selection-buttons"
            key={category}
            onClick={() => selectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;
