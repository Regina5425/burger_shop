import React from "react";

const Categories = ({value, onChangeCategory}) => {

  const categories = ["Все", "Мясо", "Курица", "Рыба", "Вегетарианский"];

  return (
    <div className='categories'>
      <ul>
        {categories.map((item, i) => (
          <li
            key={item}
            onClick={() => onChangeCategory(i)}
            className={value === i ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
