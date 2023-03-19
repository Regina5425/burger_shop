import React from "react";
import { Link } from "react-router-dom";
import emptyCart from "../assets/images/empty-cart.png";

const CartEmpty: React.FC = () => {
  return (
    <div className='container container--cart'>
      <div className='cart cart--empty'>
        <h2>
          Корзина пустая <span>😕</span>
        </h2>
        <p>Скорее всего, вы не сделали заказ.</p>
        <p>Для того, чтобы заказать бургеры, перейдите на главную страницу.</p>
        <img src={emptyCart} alt='Empty cart' />
        <Link to='/' className='button button--black'>
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
