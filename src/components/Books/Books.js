import { useEffect, useState } from "react";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const dataBase = getFirestore();
    const itemsCollection = collection(dataBase, 'books');
    getDocs(itemsCollection).then((snapshot) => {
      const bookList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      if (bookList.length > 0) {
        setLoading(false);
        setBooks(bookList);
      }
    });
  }, []);
  return (
    <div>
      <ItemListContainer bookList={books} loading={loading} greeting="Listado de obras literarias" />
    </div>
  )
}