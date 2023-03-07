import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import BurgerBlock from "../components/BurgerBlock";
import BurgerSkeleton from "../components/BurgerSkeleton";
import Pagination from "../components/Pagination";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sort: "rating",
  });

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `http://localhost:3001/burgers?_page=${currentPage}&_limit=4&${
        categoryId > 0 ? `category=${categoryId}` : ``
      }&_sort=${sortType.sort}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, currentPage]);
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          value={categoryId}
          onChangeCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className='content__title'>Меню</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(4)].map((_, index) => <BurgerSkeleton key={index} />)
          : items.map((item) => <BurgerBlock key={item.id} {...item} />)}
      </div>
      <Pagination onPageChange={(num) => setCurrentPage(num)} />
    </div>
  );
};

export default Home;
