import { useState } from "react";
import { Button } from "react-bootstrap";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";
import './Count.scss';
export const Count = ({ initial, stock, onAddBook }) => {
  const [number, setNumber] = useState(0);
  
  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    setNumber(number - 1);
  };

  return (
    <div className="count">
      <div className="count__first-box">
        <button
          className={number > 0 ? 'count__icon' : 'count__no-style'}//TODO add stock flow
          disabled={number >= Number(stock)}
          onClick={increase}>
          <BsPlusCircle size={24} />
        </button>
        <div className="count__number-box">
          <span className="count__number">{number}
          </span>
        </div>
        <button
          className={number > 0 ? 'count__icon' : 'count__no-style'}
          disabled={number <= 0}
          onClick={decrease}>
          <BsDashCircle size={24} />
        </button>
      </div>

      <Button
        variant="secondary"        
        disabled={number <= 0}
        onClick={() => onAddBook(number)}>
        Añadir al carrito
      </Button>
    </div>
  );
}