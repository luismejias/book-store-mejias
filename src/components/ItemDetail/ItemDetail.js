import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { getDataBooksDetail } from '../../data.mock';
import { Loader } from '../Loader/Loader';
import './ItemDetail.scss';
export const ItemDetail = () => {
  const [detail, setDetail] = useState({ image: '../../assets/photo-books/incognito.jpg' });
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    getDataBooksDetail(id).then((res) => {
      if (res) {
        setLoading(false);
        setDetail(res);
      }
    });
  }, [id])

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