import { useEffect, useState } from "react";
import { getDataBooks } from "../../data.mock";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";

export const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getDataBooks().then((res) => {
      setBooks(res);
    }).catch(error => {
      console.log(error)
    })
  }, [books]);
  return (
    <div>
      <ItemListContainer bookList = { books } greeting = "Listado de obras literarias"/>
    </div>
  )
}