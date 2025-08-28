import { useState } from 'react';

function Categories() {
  const allCategory = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const [activeCategory, setCategory] = useState(0);

  return (
    <div className="categories">
      <ul>
        {allCategory.map((value, i) => (
          <li
            key={i}
            onClick={() => setCategory(i)}
            className={activeCategory === i ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
