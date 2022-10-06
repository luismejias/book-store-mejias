import { ItemList } from '../../components';
import { Loader } from '../Loader/Loader';
import './ItemListContainer.scss';

export const ItemListContainer = (props) => {
  const { greeting, bookList, loading } = props;
 
  return (
    <div>
      {loading ? (
        <div className="itemListContainer">
          < div className="itemListContainer__loader-content">
            <Loader />
          </div>
        </div>
      ) : (
        <div className="itemListContainer">
          <span className='itemListContainer__greeting'>{greeting} </span>
          <ItemList bookList={bookList}></ItemList>
          <hr />
        </div>
      )}
    </div>
  );

}