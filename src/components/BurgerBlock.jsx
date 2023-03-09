import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

const BurgerBlock = ({ id, title, price, imageUrl }) => {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const onItemAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
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
