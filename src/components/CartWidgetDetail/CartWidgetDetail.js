
import { Button, Table } from 'react-bootstrap';
import { BsArrowLeftShort } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../contexts';
import { Alert } from '../../components';
import './CartWitgetDetail.scss';
export const CartWitgetDetail = () => {
  const { books, totalPrice, removeBook, clearCart } = useCartContext();
  const hasData = books.length > 0;
  const handleClearCart = () => {
    clearCart();
  }
  return (
    <div className='cartWitgetDetail'>
      <div className='cartWitgetDetail__box-icon-back'>
        <NavLink style={{ textDecoration: 'none' }} to={`/books`}>
          <span className='cartWitgetDetail__icon-back'><BsArrowLeftShort size={48} /></span>
        </NavLink>
      </div>
      {hasData ? (
        <div>
          <Table striped bordered hover className='cartWitgetDetail__table'>
            <thead>
              <tr>
                <th>Código</th>
                <th>Descripción</th>
                <th>Autor</th>
                <th>Año</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Sub-total</th>
                <th>Imagen</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => {
                const { title, author, year, id, image, price, quantity } = book;
                return (
                  <tr key={index}>
                    <td>{id} </td>
                    <td>{title} </td>
                    <td>{author} </td>
                    <td>{year} </td>
                    <td>{price} </td>
                    <td>{quantity} </td>
                    <td>{quantity * price} </td>
                    <td><img src={image} alt='' width={100} height={100} /> </td>
                    <td>
                      <Button variant="secondary" onClick={() => removeBook(id)}>
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td>Total</td>
                <td colSpan={8}>${totalPrice()}</td>
              </tr>
            </tbody>
          </Table>
          <div className='cartWitgetDetail__end-buy-box '>
            <span colSpan={9}>
              <Alert
                title="¡Tu pedido fue realizado con exito!"
                primaryButtonMessage="Finalizar compra"
                centralMessage="¡Gracias por tu compra!"
                closeButtonMessage="Cerrar"
                callBack={handleClearCart} />
            </span>
          </div>
        </div>

      ) : (
        <div className='cartWitgetDetail__empty-data-box'>
          Nada para mostrar
        </div>
      )}
    </div>
  );
}