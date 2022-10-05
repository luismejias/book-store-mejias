import './Item.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ title, author, year, code, image }) => {
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
        <Link to={`/itemDetail/${code}`}> <Button variant="primary">Ver detalles</Button></Link>
      </Card.Body>
    </Card>
  );
}