import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Sort from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeketon';
import { useState } from 'react';
import { useEffect } from 'react';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';
import { useContext } from 'react';
import { setCategoryId } from '../redux/slises/filterSlice';

const Home = () => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const dispatch = useDispatch();

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const [item, setItem] = useState([]);
  const [isActive, setIsAktive] = useState(true);
  const [page, setPage] = useState(1);
  const { searchPizza } = useContext(SearchContext);

  useEffect(() => {
    setIsAktive(true);
    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchPizza ? `&search=${searchPizza}` : '';
    fetch(
      `https://68aedb37b91dfcdd62ba8583.mockapi.io/pizzas?page=${page}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItem(arr), setIsAktive(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchPizza, page]);

  const sceletons = [...new Array(6)].map((_, idx) => <Skeleton key={idx} />);
  const allPizzas = item.map((pizza) => (
    <PizzaBlock
      key={pizza.id}
      title={pizza.title}
      price={pizza.price}
      img={pizza.imageUrl}
      types={pizza.types}
      sizes={pizza.sizes}
    />
  ));

  return (
    <>
      <div>
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isActive ? sceletons : allPizzas}</div>
        <Pagination onChange={(number) => setPage(number)} />
      </div>
    </>
  );
};

export default Home;
