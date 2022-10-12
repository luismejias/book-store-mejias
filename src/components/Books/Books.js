import { useEffect, useState } from "react";
import { getDataBooks } from "../../data.mock";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";

export const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDataBooks().then((res) => {
      setLoading(true);
      if(res.length > 0){        
        setLoading(false);
        setBooks(res);
      }      
    }).catch(error => {
      console.log(error)
    })
  }, [books]);
  return (
    <div>
      <ItemListContainer bookList = { books } loading={loading} greeting = "Listado de obras literarias"/>
    </div>
  )
}