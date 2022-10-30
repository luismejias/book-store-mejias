import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts";
import './CartWitget.scss';
export const CartWidget = () => {
  const { books } = useContext(CartContext);
  return (
    <NavLink style={{ textDecoration: 'none' }} to={`/cartWitgetDetail`}>
      <div className="cartWitget">
        <span className="cartWitget__icon"><BsFillCartFill size={24} /></span>
        <span className="cartWitget__count">{books.length}</span>
      </div>
    </NavLink>


  );
}