import React, { useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const addBooks = (book) => {
    setBooks([...books,book]);
  }

  return(
    <CartContext.Provider value={{books, addBooks}}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }