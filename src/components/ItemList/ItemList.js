import React from 'react';
import { Item } from "../../components";
import './ItemList.scss';
export const ItemList = ({ bookList }) => {
  return (
    <div className="itemList">
    
      {bookList.map((book, index) => {
        return (
            <Item {...book} key={index}> </Item>
        );
      })}
      <hr />
    </div>
  )

}