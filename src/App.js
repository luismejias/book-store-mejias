import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About, CustomNavbar, Faq, Books, ItemDetail } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { } from './components/ItemDetail/ItemDetail';
import { CartProvider } from './contexts';

export const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <header className="App-header">
          <CustomNavbar />
        </header>
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route exact path="/books" element={<Books />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/books/:id" element={<ItemDetail />} />
          <Route path="*" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}