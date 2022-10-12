import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from "../../contexts";
import './CartWitget.scss';
export const CartWidget = () => {
  const { books } = useContext(CartContext);
  return (
    <div className="cartWitget">
      <span className="cartWitget__icon">{books.length}<BsFillCartFill  size={24}/></span>
    </div>
  );
}