import React, { useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ["Все", "Мясо", "Курица", "Рыба", "Вегетарианский"];

  const handleCategories = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='categories'>
      <ul>
        {categories.map((item, i) => (
          <li
            key={item}
            onClick={() => handleCategories(i)}
            className={activeIndex === i ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
