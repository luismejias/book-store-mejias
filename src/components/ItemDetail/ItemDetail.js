import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import './ItemDetail.scss';
export const ItemDetail = () => {
  const [detail, setDetail] = useState({ image: '../../assets/photo-books/incognito.jpg' });
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, 'books', id);
    getDoc(itemRef).then((snapshot) => {
      setDetail({ id: snapshot.id, ...snapshot.data() })
      setLoading(false);
    });
  }, [id]);

  return (
    <div>
      {(loading) ? (
        <div className="itemDetail">
          < div className="itemDetail__loader-content">
            <Loader />
          </div>
        </div>
      ) : (
        <div className="itemDetail">
          <Card style={{ width: '600px' }}>
            <div className='itemDetail__imageContent'>
              <img className='itemDetail__image' src={detail.image} alt='' />
            </div>
            <Card.Body>
              <Card.Title>{detail.title}</Card.Title>
              <Card.Text className='itemDetail__summary'>
                {detail.detail}
              </Card.Text>
              <Link to={'/books'}> <Button variant="primary">Volver</Button></Link>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
}