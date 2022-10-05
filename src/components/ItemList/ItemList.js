import { Item } from "../../components";
import './ItemList.scss';
export const ItemList = ({ bookList }) => {
 
  
  return (
    <div className="itemList">
      {bookList.map((book, index) => {
        return (
          <div key={index}>
            <Item {...book}></Item>
          </div>
        );
      })}
      <hr />
    </div>
  )

}