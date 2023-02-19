import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import BurgerBlock from "./components/BurgerBlock";
import burgers from "./burgers.json";

import "./styles/app.scss";

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>Все бургеры</h2>
          <div className='content__items'>
            {burgers.map((item) => (
              <BurgerBlock key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
