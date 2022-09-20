import './ItemListContainer.scss';

export const ItemListContainer = (props) => {
  const { greeting, bookList } = props;
  return (
    <div className="itemListContainer">
      <span className='itemListContainer__greeting'>{ greeting} </span>

      { bookList.map((book, index) => {
        return (
          <div key={ index } className="itemListContainer__item">
            <span>Nombre: {book.title}</span>
            <span>Año de lanzamiento: {book.year}</span>
            <span>Autor: {book.author}</span>
            <span>Código: {book.code}</span>
            <hr />
          </div>
        );
      })}
      <hr />
    </div>
  );
}