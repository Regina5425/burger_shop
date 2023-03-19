import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import BurgerBlock from "../components/BurgerBlock";
import BurgerSkeleton from "../components/BurgerSkeleton";
import Pagination from "../components/Pagination";
import { BurgersType, fetchBurgersData } from "../redux/slices/burgersSlice";
import { RootState, useAppDispatch } from "../redux/store";

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useAppDispatch();
  const { categoryId, sort } = useSelector((state: RootState) => state.filter);
  const sortType = sort.sort;

  const { items, status } = useSelector((state: RootState) => state.burgers);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const getData = async () => {
    dispatch(fetchBurgersData({ currentPage, categoryId, sortType }));
  };

  useEffect(() => {
    getData();

    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [categoryId, sortType, currentPage]);

  const skeleton = [...new Array(4)].map((_, index) => (
    <BurgerSkeleton key={index} />
  ));
  const burgers = items.map((item: BurgersType) => <BurgerBlock key={item.id} {...item} />);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className='content__title'>Меню</h2>
      {status === "error" ? (
        <div className="content__error">
          <h2>Произошла ошибка при загрузке данных</h2>
          <h3>Попробуйте зайти позже</h3>
        </div>
      ) : (
        <div className='content__items'>
          {status === "loading" ? skeleton : burgers}
        </div>
      )}
      <Pagination onPageChange={(num) => setCurrentPage(num)} />
    </div>
  );
};

export default Home;
