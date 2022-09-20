import { BsFillCartFill } from "react-icons/bs";
import './CartWitget.scss';
export const CartWidget = () => {
  return (
    <div className="cartWitget">
      <span className="cartWitget__icon"><BsFillCartFill  size={24}/></span>
    </div>
  );
}