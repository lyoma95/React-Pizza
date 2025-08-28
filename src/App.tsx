import './scss/app.scss';
import Header from './components/Header';
import Sort from './components/Sort';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeketon';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [item, setItem] = useState([]);
  const [isActive, setIsAktive] = useState(true);

  useEffect(() => {
    fetch('https://68aedb37b91dfcdd62ba8583.mockapi.io/pizzas')
      .then((res) => res.json())
      .then((arr) => {
        setItem(arr), setIsAktive(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isActive
              ? [...new Array(6)].map((_, idx) => <Skeleton key={idx} />)
              : item.map((pizza) => (
                  <PizzaBlock
                    key={pizza.id}
                    title={pizza.title}
                    price={pizza.price}
                    img={pizza.imageUrl}
                    types={pizza.types}
                    sizes={pizza.sizes}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
