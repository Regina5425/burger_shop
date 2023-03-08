import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import BurgerBlock from "../components/BurgerBlock";
import BurgerSkeleton from "../components/BurgerSkeleton";
import Pagination from "../components/Pagination";
import axios from "axios";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filter);
  const sortType = sort.sort;

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `http://localhost:3001/burgers?_page=${currentPage}&_limit=4&${
          categoryId > 0 ? `category=${categoryId}` : ``
        }&_sort=${sortType}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, currentPage]);
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
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
