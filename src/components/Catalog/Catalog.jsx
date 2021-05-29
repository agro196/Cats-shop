import React from "react";
import cx from "clsx";
import {Product} from "../Product";
import {Button} from "../Button";
import {Container} from "../Container";
import {cards as cardsData} from "../../data";
import "./Catalog.scss";

export function Catalog({className, ...props}) {
   const [cards, setCards] = React.useState(cardsData);
   const [orderPrice, setOrderPrice] = React.useState(); // true - по возрастанию
   const [orderAge, setOrderAge] = React.useState();

   React.useEffect(() => {
      if (orderPrice === true) {
         setCards((prev) => sortPrice(prev, true));
      } else if (orderPrice === false) {
         setCards((prev) => sortPrice(prev, false));
      }
   }, [orderPrice]);

   React.useEffect(() => {
      if (orderAge === true) {
         setCards((prev) => sortAge(prev, true));
      } else if (orderAge === false) {
         setCards((prev) => sortAge(prev, false));
      }
   }, [orderAge]);

   return (
     <section className={cx(className, "catalog")} {...props}>
        <Container className="catalog__wrapper">
           <h2 className="visually-hidden">Каталог животных</h2>
           <div className="catalog__sorting">
              <h3 className="catalog__sorting-title">Сортировать по:</h3>
              <ul className="catalog__sorting-list">
                 <li className="catalog__sorting-item">
                    <button
                      className={cx(
                        "catalog__sorting-item-button",
                        orderPrice
                          ? "catalog__sorting-item-button--asc"
                          : "catalog__sorting-item-button--desc"
                      )}
                      onClick={() => setOrderPrice((val) => !val)}
                    >
                       Цене
                    </button>
                 </li>
                 <li className="catalog__sorting-item">
                    <button
                      className={cx(
                        "catalog__sorting-item-button",
                        orderAge
                          ? "catalog__sorting-item-button--asc"
                          : "catalog__sorting-item-button--desc"
                      )}
                      onClick={() => setOrderAge((val) => !val)}
                    >
                       Возрасту
                    </button>
                 </li>
              </ul>
           </div>
           <ul className="catalog__list">
              {cards.map((cat) => (
                <li key={cat.id} className="catalog__item">
                   <Product {...cat} />
                </li>
              ))}
           </ul>
           <Button show round className='catalog__show-button'>Показать ещё 20</Button>
        </Container>
     </section>
   );
}

function sortPrice(cards, asc = true) {
   return [...cards].sort((a, b) =>
     asc ? a.price - b.price : b.price - a.price
   );
}

function sortAge(cards, asc = true) {
   return [...cards].sort((a, b) =>
     asc ? a.labels.age - b.labels.age : b.labels.age - a.labels.age
   );
}
