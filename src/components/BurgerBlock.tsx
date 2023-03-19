import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, CartItemType } from "../redux/slices/cartSlice";
import { RootState } from "../redux/store";

type BurgerBlockType = {
	id: number;
	title: string;
	price: number;
	imageUrl: string;
}

const BurgerBlock: React.FC<BurgerBlockType> = ({ id, title, price, imageUrl }) => {
  const dispatch = useDispatch();

  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const onItemAdd = () => {
    const item: CartItemType = {
      id,
      title,
      price,
      imageUrl,
			count: 0,
    };

    dispatch(addItem(item));
  };

  return (
    <div className='burger-block__wrapper'>
      <div className='burger-block'>
        <img className='burger-block__image' src={imageUrl} alt='burger' />
        <h4 className='burger-block__title'>{title}</h4>
        <div className='burger-block__bottom'>
          <div className='burger-block__price'>{price} ₽</div>
          <button
            onClick={onItemAdd}
            className='button button--outline button--add'
          >
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BurgerBlock;
