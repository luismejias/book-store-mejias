import './Item.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts';


export const Item = ({ title, author, year, code, image }) => {
const {addBooks, books} = useContext(CartContext);
  const addBook = ()=>{
    const findBook = books.find(item => item.code === code);
    if(!findBook){
      addBooks({ title, author, year, code, image });
    }
    console.log('Books => ', books);
  }

  return (
    <Card style={{ width: '18rem' }} className="item">
      <img src={image} alt='' width={286} height={180} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author}
        </Card.Text>
        <Card.Text>
          {year}
        </Card.Text>        
         <div>
          <Link to={`/books/${code}`}> <Button variant="primary">Ver detalles</Button>
          </Link><Button variant="secondary" onClick={addBook}>Añadir al carrito</Button>
          </div>
      </Card.Body>
    </Card>
  );
}