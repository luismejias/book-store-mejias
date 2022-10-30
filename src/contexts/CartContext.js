import React, { useContext, useState } from "react";
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const addBook = (item, quantity) => {
    if (isInCart(item.id)) {
      console.log('item => ', item);
      
      setBooks(books.map(book => {
        return book.id === item.id ? { ...book, quantity: book.quantity + quantity } : book
      }));
    } else {
      setBooks([...books, { ...item, quantity }])
    }
  }

  const totalPrice = () => {
    return books.reduce((previous, current) => previous + current.quantity * current.price, 0);
  };
  const totalProduct = () => {
    return books.reduce((accumulator, currentproduct) => accumulator + currentproduct.quantity, 0);
  };

  const isInCart = (id) => {
    return books.find(book => book.id === id) ? true : false;
  }

  const removeBook = (id) => setBooks(books.filter(book => book.id !== id));

  const clearCart = () => setBooks([]);

  return (
    <CartContext.Provider value={{
      addBook,
      isInCart,
      removeBook,
      clearCart,
      totalPrice,
      totalProduct,
      books
    }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }