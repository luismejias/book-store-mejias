import './Item.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext';
import { Count } from '../../components';


export const Item = ({ id, title, author, image, price, initial, stock }) => {
  const { addBook } = useCartContext();
  const onAddBook = (quantity) => {
    addBook({ title, author, id, image, price }, quantity);
  }

  return (
    <Card className="item">
      <img src={image} alt='' width={286} height={180} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author}
        </Card.Text>
        <Count onAddBook={onAddBook} initial={initial} stock={stock} />
        <div className="item__button-box">
          <Link to={`/books/${id}`} className="item__space">
            <Button variant="primary" className="item__big-button" style={{ width: '100%' }}>Ver detalles</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}